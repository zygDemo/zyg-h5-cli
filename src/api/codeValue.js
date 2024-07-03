import request from '../request/request'

let baseUrl = '/api/mobileTerminal/configuration/code/list'
// 婚姻情况
export const maritalStatus = () => request.get(`${baseUrl}/maritalStatus`);
// 证件类型
export const credentialType = () => request.get(`${baseUrl}/credentialType`);
// 居住状况
export const liveType = () => request.get(`${baseUrl}/liveType`);
// 职业类型
export const jobType = () => request.get(`${baseUrl}/jobType`);
// 教育程度
export const educationLevel = () => request.get(`${baseUrl}/educationLevel`);
// 最高学位
export const highestEducation = () => request.get(`${baseUrl}/highestEducation`);
// 对账单邮寄地址类型
export const statementType = () => request.get(`${baseUrl}/statementType`);
// 民族
export const nation = () => request.get(`${baseUrl}/nation`);
// 行业类别
export const sector = () => request.get(`${baseUrl}/sector`);
// 单位性质
export const companyNature = () => request.get(`${baseUrl}/companyNature`);
// 职务
export const position = () => request.get(`${baseUrl}/position`);
// 客户角色
export const customerRole = () => request.get(`${baseUrl}/customerRole`);
// 与主借人关系
export const contactRelation = () => request.get(`${baseUrl}/contactRelation`);
export const lesseeRelation = () => request.get(`${baseUrl}/lesseeRelation`);
// 驾照类型
export const driverLicenseType = () => request.get(`${baseUrl}/driverLicenseType`);
// 职业
export const indivPro = () => request.get(`${baseUrl}/indivPro`);
// 职称
export const profsn = () => request.get(`${baseUrl}/profsn`);
// 业务类型
// export const businessType = () => request.get(`${baseUrl}/businessType`);
// 车牌类型
export const licenseType = () => request.get(`${baseUrl}/licenseType`);
// 车辆类型
export const vehicleType = () => request.get(`${baseUrl}/vehicleType`);
// 变速器类型
export const gearboxType = () => request.get(`${baseUrl}/gearboxType`);
// 评级
export const rate = () => request.get(`${baseUrl}/rate`);
// 燃油类型
export const oilType = () => request.get(`${baseUrl}/oilType`);
// 车辆抵押情况
export const mortgageSituation = () => request.get(`${baseUrl}/mortgageSituation`);