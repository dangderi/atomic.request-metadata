import cosmosDB from "../configs/cosmos.config";
import log4js from "../utils/default.logger";
import BadRequestError from "../errors/BadRequestError";

class DataEdge {
  private logger = log4js.getLogger("DataEdge");

  public async getRequestTypes(departmentId: string = "", correlationId: string ): Promise<any | null> {
    let sql = `SELECT 
      c.id as id,
      c.INSERT_USER as insertUser,
      c.REQ_TYPE_ACTIVE as reqTypeActive,
      c.INSERT_PROCESS as insertProcess,
      c.NOTIFY_ASSIGNEE as notifyAssignee,
      c.UPDATE_USER as updateUser,
      c.USER_DEFINED_1_LABEL as userDefined1Label,
      c.NOTIFY_TYPE as notifyType,
      c.REQ_TYPE_DESC as reqTypeDesc,
      c.UPDATE_DATETIME as updateDatetime,
      c.ADDITIONAL_INFO_WINDOW_OBJ as additionalInfoWindowObj,
      c.OVERRIDE_ASSIGNEE_USER_ID as overrideAssigneeUserId,
      c.SEQ_REQ_DEPT_ID as seqReqDeptId,
      c.NOTIFY_LOGGED_USER as notifyLoggedUser,
      c.INSERT_DATETIME as insertDatetime,
      c.UPDATE_PROCESS as updateProcess,
      c.REQ_TYPE_SHORT_DESC as reqTypeShortDesc,
      c.SEQ_REQ_TYPE_ID as seqReqTypeId,
      c.NOTE_TYPE_ACTIVE as noteTypeActive    
     FROM c`;

    let param: object = {};

    if ( !!departmentId ) {
      sql =  sql.concat(" WHERE c.SEQ_REQ_DEPT_ID=@departmentId");
      param = {
        name: "@departmentId",
        value: `${departmentId}`
      };
    }

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "REQUEST_TYPE", param);
  }

  public async getRequestStatuses(correlationId: string): Promise<any | null> {
    const sql = `SELECT
      c.LIST_TYPE as LIST_TYPE,
      c.CODE as CODE,
      c.DESCRIPTION as DESCRIPTION,
      c.INSERT_USER as INSERT_USER,
      c.UPDATE_USER as UPDATE_USER,
      c.UPDATE_DATETIME as UPDATE_DATETIME,
      c.INSERT_PROCESS as INSERT_PROCESS,
      c.UPDATE_PROCESS as UPDATE_PROCESS,
      c.ACTIVE_IND as ACTIVE_IND,
      c.SORT_ORDER as SORT_ORDER,
      c.CODE_2 as CODE_2
      FROM c
      WHERE c.LIST_TYPE="REQ_STATUS"
      ORDER BY c.LIST_TYPE DESC, c.CODE DESC`;

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "APP_VALUE_LIST", {});
    }

  public async getSecUsers(correlationId: string, userId: string): Promise<any | null> {
    let sql = `SELECT
      c.id as id,
      c.INITIALS as initials, 
      c.EXT as ext, 
      c.ONLINE_CLAIMS_RCPT_DEFAULT_YN as onlineClaimsRcptDefaultYn, 
      c.INSERT_PROCESS as insertProcess,
      c.LNAME as lname, 
      c.DEBUG_SESSION as debugSession, 
      c.SCREENPOP_ENABLED_YN as screenpopEnabledYn, 
      c.ADDONS_FONT_SCALE_PCT as addonsFontScalePct, 
      c.USER_ID as userId, 
      c.BUS_UNIT_FUNC_AREA_ID as busUnitFuncAreaId,
      c.MANAGER_USER_ID as managerUserId, 
      c.SEQ_REQ_DEPT_ID as seqReqDeptId, 
      c.INSERT_DATETIME as insertDatetime, 
      c.UPDATE_PROCESS as updateProcess, 
      c.EMAIL_ADDRESS as emailAddress, 
      c.DESCRIPTION as description, 
      c.DEP_MANAGER_USER_ID as depManagerUserId, 
      c.CLAIM_BARCODE_PRINTER_NAME as claimBarcodePrinterName, 
      c.MI as mi, 
      c.INSERT_USER as insertUser,  
      c.USR_LOCATION as usrLocation,
      c.DEFAULT_KPI_CODE as defaultKpiCode, 
      c.CUR_USR_DEPT as curUsrDept, 
      c.PWD_LAST_CHANGED as pwdLastChanged, 
      c.UPDATE_USER as updateUser, 
      c.DFLT_TEMPLATE as dfltTemplate, 
      c.SECURITY_LEVEL as securityLevel, 
      c.UPDATE_DATETIME as updateDatetime, 
      c.FNAME as fname, 
      c.BUSINESS_UNIT_ID as businessUnitId, 
      c.TERMINATION_DATE as terminationDate, 
      c.TEL as tel, 
      c.TEMPLATE_FLG as templateFlg, 
      c.FAX as fax
     FROM c`;

    sql = !!userId ? sql.concat(` WHERE c.USER_ID LIKE "${userId}%"`): sql;

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);
    return cosmosDB.getAllItems(sql, "SEC_USER", {});
  }
  public async getNoteTypes( correlationId: string): Promise<any | null> {
    try {
      const sql = `SELECT 
      c.id as id,
      c.INSERT_USER as insertUser,
      c.INSERT_PROCESS as insertProcess,
      c.USER_DEFINED_4_ST as userDefined4St,
      c.NOTE_TYPE as noteType,
      c.USER_DEFINED_3_ST as userDefined3St,
      c.USER_DEFINED_5_ST as userDefined5St,
      c.REASON_CODE_TYPE as reasonCodeType,
      c.RENEWAL_NOTE_TYPE as renewalNoteType,
      c.USER_DEFINED_1_ST as userDefined1St,
      c.UPDATE_USER as updateUser,
      c.USER_DEFINED_2_ST as userDefined2St,
      c.UPDATE_DATETIME as updateDatetime,
      c.INSERT_DATETIME as insertDatetime,
      c.NOTE_SECURITY_CODE as noteSecurityCode,
      c.USER_DATE_2_ST as userDate2St,
      c.USER_DATE_5_ST as userDate5St,
      c.USER_DATE_3_ST as userDate3St,
      c.USER_DATE_4_ST as userDate4St,
      c.UPDATE_PROCESS as updateProcess,
      c.USER_DATE_1_ST as userDate1St,
      c.DESCRIPTION as description,
      c.ALLOW_DELETE as allowDelete,
      c.DELETE_DAYS as deleteDays
     FROM c`;

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

      return await cosmosDB.getAllItems(sql, "NOTE_TYPE", {});
    } catch (error) {
      console.error(error);
      if(error.response && error.response.status === 400){
        throw new BadRequestError( "Atomic: " + error.message);
      }
      throw error;
    }
  }
  public async getNoteCatDepts(correlationId: string): Promise<any | null> {
    const sql = `SELECT 
      c.id as id,
      c.INSERT_USER as insertUser,
      c.SEQ_CC_NOTE_CAT_DEPT as seqCcNoteCatDept,
      c.INSERT_DATETIME as insertDateTime,
      c.INSERT_PROCESS as insertProcess,
      c.UPDATE_PROCESS as updateProcess,
      c.ACTIVE as active,
      c.DEPT_CODE as deptCode,
      c.UPDATE_USER as updateUser,
      c.DEPT_DESC as deptDesc,
      c.UPDATE_DATETIME as updateDateTime     
     FROM c`;

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "CC_NOTE_CAT_DEPT", {});
  }

  public async getRequestDepartments(correlationId: string, id: string): Promise<any | null> {
    let sql = `SELECT 
      c.id as id,
      c.INSERT_USER as insertUser,
      c.REQ_DEPT_DESC as description,
      c.INSERT_DATETIME as insertDateTime,
      c.INSERT_PROCESS as insertProcess,
      c.UPDATE_PROCESS as updateProcess,
      c.REQ_DEPT_ACTIVE as active,
      c.UPDATE_USER as updateUser,
      c.UPDATE_DATETIME as updateDateTime,
      c.SEQ_REQ_DEPT_ID as departmentId,
      c.SEQ_REQ_ASSIGNMENT_RULE_ID as assignmentRuleId,
      c.LAST_ROUND_ROBIN_SEC_USER as lastRoundRobinSecUser
     FROM c`;

    let param: object = {};

    if ( !!id ) {
      sql =  sql.concat(" WHERE c.id=@id");
      param = {
        name: "@id",
        value: `${id}`
      };
    }

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "REQUEST_DEPARTMENT", param);
  }

  public async getNoteCategories( correlationId: string): Promise<any | null> {
    const sql = `SELECT 
      c.id as id,
      c.INSERT_USER as insertUser,
      c.SEQ_CC_NOTE_CAT_DEPT as seqCcNoteCatDept,
      c.INSERT_DATETIME as insertDateTime,
      c.INSERT_PROCESS as insertProcess,
      c.UPDATE_PROCESS as updateProcess,
      c.SEQ_CC_NOTE_CAT as seqCcNoteCat,
      c.ACTIVE as active,
      c.UPDATE_USER as updateUser,
      c.NOTE_CAT_DESC as noteCatDesc,
      c.UPDATE_DATETIME as updateDateTime,
      c.NOTE_CAT_CODE as noteCatCode   
     FROM c`;

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "CC_NOTE_CAT", {});
  }

  public async getWrapUpCodes(correlationId: string): Promise<any | null> {
    const sql = `SELECT 
      c.id as id,
      c.INSERT_USER as insertUser,
      c.INSERT_DATETIME as insertDateTime,
      c.SEQ_CC_WRAP_UP as seqCcWrapUp,
      c.INSERT_PROCESS as insertProcess,
      c.UPDATE_PROCESS as updateProcess,
      c.DESCRIPTION as description,
      c.ACTIVE_IND as activeInd,
      c.SORT_ORDER as sortOrder,
      c.UPDATE_USER as updateUser,
      c.WRAPUP_CODE as wrapupCode,
      c.UPDATE_DATETIME as updateDateTime
     FROM c`;

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "CC_WRAP_UP_CODES", {});
  }

  public async getRequestHistories(correlationId: string): Promise<any | null> {
    const sql = `SELECT 
      c.id as id,
      c.INSERT_USER as insertUser,
      c.OLD_REQ_STATUS_DESC as oldReqStatusDesc,
      c.OLD_ASSIGNED_USER_NAME as oldAssignedUserName,
      c.INSERT_PROCESS as insertProcess,
      c.OLD_REQ_STATUS as oldReqStatus,
      c.NEW_REQ_STATUS_DESC as newReqStatusDesc,
      c.UPDATE_USER as updateUser,
      c.SEQ_REQ_HISTORY_ID as seqReqHistoryId,
      c.NEW_ASSIGNED_USER as newAssignedUser,
      c.SEQ_REQ_ID as seqReqId,
      c.UPDATE_DATETIME as updateDatetime,
      c.OLD_ASSIGNED_USER as oldAssignedUser,
      c.INSERT_DATETIME as insertDatetime,
      c.UPDATE_PROCESS as updateProcess,
      c.NEW_REQ_STATUS as newReqStatus,
      c.HISTORY_DESC as historyDesc,
      c.NEW_ASSIGNED_USER_NAME as newAssignedUserName
     FROM c OFFSET 0 LIMIT 100`;

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "REQUEST_HISTORY", {});
  }

  public async getPolicyDepartments(correlationId: string): Promise<any | null> {
    const sql = `SELECT 
      c.id as id,
      c.INSERT_USER as insertUser,
      c.SEQ_CC_NOTE_CAT_DEPT as seqCcNoteCatDept,
      c.INSERT_DATETIME as insertDateTime,
      c.INSERT_PROCESS as insertProcess,
      c.UPDATE_PROCESS as updateProcess,
      c.ACTIVE as active,
      c.DEPT_CODE as deptCode,
      c.UPDATE_USER as updateUser,
      c.DEPT_DESC as deptDesc,
      c.UPDATE_DATETIME as updateDateTime     
     FROM c`;

    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "CC_NOTE_CAT_DEPT", {});
  }

  public async getFormats(correlationId: string): Promise<any | null> {
    const sql = `SELECT 
      c.CODE as CODE,
      c.DESCRIPTION as DESCRIPTION
     FROM c`;
    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "APP_VALUE_LIST", {});
  }

  public async getPriorities(correlationId: string): Promise<any | null> {
    const sql = `SELECT 
      c.CODE as CODE,
      c.DESCRIPTION as DESCRIPTION
     FROM c`;
    this.logger.debug("SQL: ", sql, "correlationId: ", correlationId);

    return await cosmosDB.getAllItems(sql, "APP_VALUE_LIST", {});
  }  
}

export default new DataEdge();
