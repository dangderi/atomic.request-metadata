export type Error = {
  code: number;
  message: string;
}

export type QueryResult = {
  total: number;
  page: number;
  limit: number;
  data: RequestType[];
}

export type Enquiry = {
  source: string;
  policy: string;
  applicationId: string;
  firstName: string;
  lastName: string;
  applicationType: string;
  status: string;
  assignee: string;
  assignedDate: string;
}

export type NoteType = {
  id: string;
  insertUser: string;
  insertProcess: string;
  userDefined4St: string;
  noteType: string;
  userDefined3St: string;
  userDefined5St: string;
  reasonCodeType: string;
  renewalNoteType: string;
  userDefined1St: string;
  updateUser: string;
  userDefined2St: string;
  noteSecurityCode: string;
  userDate1St: string;
  userDate2St: string;
  userDate5St: string;
  userDate3St: string;
  userDate4St: string;
  updateProcess: string;
  description: string;
  allowDelete: string;
  deleteDays: string;
  insertDatetime: string;
  updateDatetime: string;
}

export type NoteTypes = NoteType[]

export type NoteCatDept = {
  id: string;
  insertUser: string;
  seqCcNoteCatDept: string;
  insertDateTime: string;
  insertProcess: string;
  updateProcess: string;
  active: string;
  deptCode: string;
  updateUser: string;
  deptDesc: string;
  updateDateTime: string;
}

export type NoteCatDepts = NoteCatDept[]

export type NoteCategory = {
  id: string;
  insertUser: string;
  seqCcNoteCatDept: string;
  insertDateTime: string;
  insertProcess: string;
  updateProcess: string;
  seqCcNoteCat: string;
  active: string;
  updateUser: string;
  noteCatDesc: string;
  updateDateTime: string;
  noteCatCode: string;
}

export type NoteCategories = NoteCategory[]

export type WrapupCode = {
  id: string;
  insertUser: string;
  insertDateTime: string;
  seqCcWrapUp: string;
  insertProcess: string;
  updateProcess: string;
  description: string;
  activeInd: string;
  sortOrder: string;
  updateUser: string;
  wrapupCode: string;
  updateDateTime: string;
}

export type WrapupCodes = WrapupCode[]

export type Enquiries = Enquiry[]

export type SecUser = {
  id: string;
  initials: string;
  ext: string;
  onlineClaimsRcptDefaultYn: string;
  insertProcess: string;
  lname: string;
  debugSession: string;
  screenpopEnabledYn: string;
  addonsFontScalePct: string;
  userId: string;
  busUnitFuncAreaId: string;
  managerUserId: string;
  seqReqDeptId: string;
  insertDatetime: string;
  updateProcess: string;
  emailAddress: string;
  description: string;
  depManagerUserId: string;
  claimBarcodePrinterName: string;
  mi: string;
  insertUser: string;
  usrLocation: string;
  defaultKpiCode: string;
  curUsrDept: string;
  pwdLastChanged: string;
  updateUser: string;
  dfltTemplate: string;
  securityLevel: string;
  updateDatetime: string;
  fname: string;
  businessUnitId: string;
  terminationDate: string;
  tel: string;
  templateFlg: string;
  fax: string;
}

export type SecUsers = SecUser[]

export type RequestType = {
  id: string;
  insertUser: string;
  reqTypeActive: string;
  insertProcess: string;
  notifyAssignee: string;
  updateUser: string;
  userDefined1Label: string;
  notifyType: string;
  reqTypeDesc: string;
  updateDatetime: string;
  additionalInfoWindowObj: string;
  overrideAssigneeUserId: string;
  seqReqDeptId: string;
  notifyLoggedUser: string;
  insertDatetime: string;
  updateProcess: string;
  reqTypeShortDesc: string;
  seqReqTypeId: string;
  noteTypeActive: string;
}

export type RequestHistory = {
  id: string;
  insertUser: string;
  oldReqStatusDesc: string;
  oldAssignedUserName: string;
  insertProcess: string;
  oldReqStatus: string;
  newReqStatusDesc: string;
  updateUser: string;
  seqReqHistoryId: string;
  newAssignedUser: string;
  seqReqId: string;
  updateDatetime: string;
  oldAssignedUser: string;
  insertDatetime: string;
  updateProcess: string;
  newReqStatus: string;
  historyDesc: string;
  newAssignedUserName: string;
}

export type RequestHistories = RequestHistory[]




