import axios from "axios";
import request from "../request/request";

export const getTrainList = (data) =>
  request.post("/api/commonFileInfo/select", data);

// 跳转微信小程序
export const getWxOpenConfig = (prams) =>
  request.get(`/api/wx/open/jsdk/config/${prams}`);

//平安提交申请
export const postSubmitClubInfo = (data) =>
  request.post("/api/pingAn/submitClueInfo", data);

// 姓名身份证号二要素验证
export const postCertificationIdCard = (data) =>
  request.post("/api/diversion/verificationName", data);

// 获取登陆图片验证码
export const getBase64Image = () =>
  request.get("/api/verificationCode/getBase64Image");
//登陆
export const postLogin = (data) => request.post("/api/login", data);
//进件二维码
export const postQRCode = (data) =>
  request.post(
    "/api/mobileTerminal/query/diversionSubmit/generateQRCodeUrl",
    data
  );
// 贷款查询列表
export const requestLoanList = (data) =>
  request.post("/api/mobileTerminal/loanHead/getPageList", data);

//获取订单详情列表
export const postGetPageList = (data) =>
  request.post("/api/mobileTerminal/query/loanHead/getPageList", data);

//所属行业 INDUSTRY 通过码值获取列表
export const getCodesList = (prams) =>
  request.get(`/api/mobileTerminal/configuration/code/list/${prams}`);

//贷款期数等
export const getOptionList = (prams) =>
  request.get(`/api/mobileTerminal/LoanInfo/option/${prams}`);

//渠道列表
export const postDealerList = (data) =>
  request.post("/api/mobileTerminal/LoanInfo/dealer/getPageList", data);
//获取贷款详情
export const getLoanDetailInfo = (prams) =>
  request.get(`/api/mobileTerminal/LoanInfo/loan/loanDetail/info/${prams}`);
// 通过产品id获取贷款信息
export const postCalculationLoanDetailAmountNew = (data) =>
  request.post(
    "/api/mobileTerminal/LoanInfo/calculationLoanDetailAmountNew",
    data
  );

//产品列表
export const postProductList = (data) =>
  request.post("/api/mobileTerminal/LoanInfo/loan/product/getPageList", data);
//gps供应商查gps产品
export const getGpsSupplierList = () =>
  request.get(`/api/mobileTerminal/LoanInfo/gpsSupplier/activeList`);
//gps供应商查gps产品
export const getGpsProductList = (prams) =>
  request.get(`/api/mobileTerminal/LoanInfo/gpsProduct/activeList/${prams}`);
//查询选过的gps信息
export const getGpsLoanInfo = (prams) =>
  request.get(`/api/mobileTerminal/LoanInfo/loan/gps/info/${prams}`);
//查询费用信息列表
export const getExpenseDetailList = (prams) =>
  request.get(`/api/mobileTerminal/LoanInfo/expenseDetail/getList/${prams}`);

//车辆费用保存
export const postVehicleExpenseAdd = (data) =>
  request.post("/api/mobileTerminal/LoanInfo/expenseDetail/add", data);
//车辆费用删除
export const postVehicleExpenseDel = (data) =>
  request.post("/api/mobileTerminal/LoanInfo/expenseDetail/delete", data);
//贷款信息保存
export const postLoanDetailAdd = (data) =>
  request.post("/api/mobileTerminal/LoanInfo/loan/loanDetail/add", data);
// 贷款信息下一步
export const postLoanInfoNext = (data) =>
  request.post("/api/mobileTerminal/LoanInfo/loanDetail/next", data);

// 查询当前贷款来源：diversion-导流；loan-贷款
export const loanDetailInfo = (param) =>
  request.get(`/api/mobileTerminal/LoanInfo/loan/loanDetail/info/${param}`);

// 查询车辆基本信息
export const getCarBaseInfo = (param) =>
  request.get(`/api/mobileTerminal/carInfo/loan/info/${param}`);

//车辆信息保存
export const saveCarInfo = (data) =>
  request.post("/api/mobileTerminal/carInfo/addLoanHead", data);

// 车辆信息下一步
export const postCarInfoNext = (data) =>
  request.post("/api/mobileTerminal/carInfo/loan/next", data);

// 查询车架号
// export const requestSearchVin = (data) => request.post("/api/changAn/queryCarInfo", data);
export const requestSearchVin = (data) =>
  request.post("/api/mobileTerminal/carInfo/getCarInfoPageList", data);
// 在线估价
export const requestOnlineValuation = (data) =>
  request.post("/api/mobileTerminal/carInfo/getCarPriceNew", data);

// 获取贷款人清单 -- 人员信息
export const getLoanCustomerList = (param) =>
  request.get(`/api/mobileTerminal/customerInfo/getLoanCustomerList/${param}`);
// 删除主借人或配偶
// export const getDelete = (customerId) => request.get(`/api/mobileTerminal/customerInfo/delete/${customerId}`);
export const postDeletePerson = (data) =>
  request.post("/api/mobileTerminal/customerInfo/delete", data);
// 新增
export const Add = (data) =>
  request.post("/api/mobileTerminal/customerInfo/add", data);
// 校验人员信息是否完善
export const checkCustomerUnsaveInfo = (data) =>
  request.post(
    `/api/mobileTerminal/customerInfo/checkCustomerUnsaveInfo`,
    data
  );
// 人员信息保存
export const savePersonInfo = (data) =>
  request.post("/api/mobileTerminal/customerInfo/update", data);
// 转共借
export const toBorrowerAndSpouse = (customerId) =>
  request.post(
    `/api/mobileTerminal/customerInfo/toBorrowerAndSpouse/${customerId}`
  );

// 封装上传文件接口
export const uploadFile = (api, file) => {
  let config = {
    headers: { "Content-Type": "multipart/form-data" },
    baseURL: request.defaults.baseURL,
  };
  const formData = new FormData();
  formData.append("uploadImgFile", file);
  return axios.post(api, formData, config);
};

// 获取人员详情信息 -- 维护
export const personDetailInfo = (customerId) =>
  request.get(`/api/mobileTerminal/customerInfo/info/${customerId}`);

// 添加联系人
export const postAddPersonInfo = (data) =>
  request.post(
    "/api/mobileTerminal/customerInfo/customerInfo/saveContactPerson",
    data
  );
// 联系人列表
export const getPersonList = (customerId) =>
  request.get(
    `/api/mobileTerminal/customerInfo/customerInfo/getContactPersonco/${customerId}`
  );
// 删除联系人
export const getPersonDelete = (param) =>
  request.get(
    `/api/mobileTerminal/customerInfo/customerInfo/deleteContactPerson/${param}`
  );

/**
 * 文件信息
 */
// 获取文件信息列表
export const getLoanFileList = (data) =>
  request.post(
    `/api/mobileTerminal/fileInfo/loanFileList/getLoanFileList`,
    data
  );

// 获取某个文件图片
export const getLoanFileDetails = (param) =>
  request.get(
    `/api/mobileTerminal/fileInfo/loanFileList/getLoanFileDetails/${param}`
  );
// 文件上传保存
export const postFileDetailsAdd = (data) =>
  request.post(
    "/api/mobileTerminal/fileInfo/loanFileList/fileDetails/add",
    data
  );
// 清空当前类所有文件
export const postFiledeleteAll = (data) =>
  request.post("/api/mobileTerminal/fileInfo/loanFileList/deleteAllFile", data);
// 清空当前类单个文件
export const postFileDelete = (data) =>
  request.post("/api/mobileTerminal/fileInfo/loanFileList/deleteFile", data);

// 最后的校验然后弹备注弹框
export const postSubmitCheck = (data) =>
  request.post("/api/mobileTerminal/fileInfo/submit/check", data);
// 备注弹框 提交
export const postSubmitApprove = (data) =>
  request.post("/api/mobileTerminal/fileInfo/approve/startRiskFirstTask", data);

// 预审列表
// export const postPretrialList = (data) => request.post("/api/mobileTerminal/query/diversionInput/getPageListPersonal", data);
// 待预审列表
export const postPretrialList = (data) =>
  request.post("/api/mobileTerminal/query/diversionPretrial/getPageList", data);
// 发起复议
export const postInitiateReconsideration = (data) =>
  request.post(
    "/api/mobileTerminal/query/diversionPretrialInfo/updatePretrialResultThree",
    data
  );
//资方拒绝-发起复议
export const postCapitalInitiateReconsideration = (data) =>
  request.post(
    "/api/mobileTerminal/query/diversionPretrialInfo/updateStateResultThree",
    data
  );
// 我要进件
export const postINeedDiversionInput = (data) =>
  request.post("/api/mobileTerminal/query/diversionInput/submit", data);
// 我的面签
export const getInterviewList = (data) =>
  request.post(
    "/api/mobileTerminal/faceSign/faceSignInfo/searchMyFaceSignInfoList",
    data
  );
// export const getInterviewList = (data) => request.post("/api/mobileTerminal/faceSign/faceSignInfo/searchFaceSignInfoListH5", data);
// 收还款信息
export const searchCardTableInfo = (param) =>
  request.get(
    `/api/mobileTerminal/faceSign/faceSignInfo/searchCardTableInfoH5/${param}`
  );
// 面签提交接口
export const saveFaceSignAllInfo = (data) =>
  request.post(
    "/api/mobileTerminal/faceSign/faceSignInfo/saveFaceSignAllInfoH5",
    data
  );
// gps设备基本信息
export const getGpsInfo = (param) =>
  request.get(`/api/mobileTerminal/faceSign/faceSignInfo/getGpsInfo/${param}`);
// 新增gps设备信息
export const addGpsDevice = (data) =>
  request.post("/api/mobileTerminal/faceSign/faceSignInfo/addGpsDevice", data);
// 校验当前贷款面签人员，贷款状态认为待面签
export const checkLoanStatusAndUserH5 = (data) =>
  request.post(
    "/api/mobileTerminal/faceSign/faceSignInfo/checkLoanStatusAndUserH5",
    data
  );
// 根据loanNumber获取合同信息
export const searchContractLoanInfoH5 = (param) =>
  request.get(
    `/api/mobileTerminal/faceSign/faceSignInfo/searchContractLoanInfoH5/${param}`
  );
// 根据loanNumber校验gps安装
export const checkIsHaveInstallerH5 = (param) =>
  request.get(
    `/api/mobileTerminal/faceSign/faceSignInfo/checkIsHaveInstallerH5/${param}`
  );
// 获取审核意见
export const getReturnDesc = (param) =>
  request.get(`/api/mobileTerminal/query/approveTask/getReturnDesc/${param}`);

// 文件信息下一步
export const postFileInfoNext = (data) =>
  request.post("/api/mobileTerminal/fileInfo/next", data);

// 获取待预审订单详情
export const getDiversionPretrialInfo = (param) =>
  request.get(`/api/mobileTerminal/query/diversionPretrial/info/${param}`);

// 更新预审结果
export const postUpdatePretrialResult = (data) =>
  request.post(
    "/api/mobileTerminal/query/diversionPretrial/updatePretrialResult",
    data
  );

// 获取省市区列表
export const getProvinceCityAreaList = (param) =>
  request.get(`/api/diversion/provinceCityAreaList`);

// 获取结算等级列表
export const postSettlementLevelList = (data) =>
  request.post("/api/supermarketProductH5/getSettlementLevel", data);

// 长安资产管理获取还款计划
export const postLoanSuccessInstitutionList = (data) =>
  request.post("/api/changAn/getLoanSuccessInstitutionList", data);

// 长安资产管理列表
export const postLoanSuccessListCA = (data) =>
  request.post("/api/changAn/getLoanSuccessListCA", data);

// 长安资产管理详情
export const postLoanSuccessCAInfo = (data) =>
  request.post("/api/changAn/getLoanSuccessCAInfo", data);

//数据报表基础版
export const getBaseData = (data) =>
  request.post("/api/shengXin/getBaseDate", data);

// 获取权限以及员工ID
export const getEmployeeAbilityList = (param) =>
  request.get(`/standardCore/agreementPayment/getEmployeeAbilityList/${param}`);

//获取我的放款信息
export const postMyBaseDate = (data) =>
  request.post("/api/shengXin/myBaseData", data);

//退档件列表
export const postReverseList = (data) =>
  request.post("/api/mobileTerminal/query/getReverseGearPage", data);
