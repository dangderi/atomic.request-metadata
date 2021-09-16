import { CosmosClient, Database, CosmosClientOptions } from "@azure/cosmos";

const config = {
    endpoint: process.env["DATA_EDGE_ENDPOINT"],
    key: process.env["COSMOS_READ_ONLY_KEY"],
    databaseId: process.env["DATA_EDGE_DATABASE_ID"],
  };

const options: CosmosClientOptions = {
    endpoint: config.endpoint,
    key: config.key,
  };

const cosmosClient = new CosmosClient(options);
const database = cosmosClient.database(config.databaseId);

export class CosmosConfig {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  public async getAllItems(query: string, container: string, param: any = {}) {
    const querySpec = {
        query: query,
        parameters: [
            {
                name: param.name,
                value: param.value
            }
        ]
    };

    if ( param && Object.keys(param).length === 0 ) {
        delete querySpec.parameters;
    }

    const { resources: items } = await this.database
      .container(container)
      .items.query(querySpec)
      .fetchAll();

    return items;
  }
}

export default new CosmosConfig(database);
