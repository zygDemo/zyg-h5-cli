import axios from "axios";
import request from "../request/request";

export const getTrainList = (data) =>
  request.post("/api/commonFileInfo/select", data);

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

// 获取省市区列表
export const getProvinceCityAreaList = (param) =>
  request.get(`/api/diversion/provinceCityAreaList`);

