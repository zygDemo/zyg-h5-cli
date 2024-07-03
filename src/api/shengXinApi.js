import request from "../request/request";

//培训列表
export const getTrainList = (data) =>
  request.post("/api/commonFileInfo/select", data);