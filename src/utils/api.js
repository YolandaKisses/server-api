import request from "./request";
import qs from 'qs'

/**
 * 获取批次数据
 */
const getBatchData = () => {
  return request({
    url: 'rest/zhfundbatch/selectBatch.do',
    method: 'POST',
    params: {
      _userId: 1
    }
  })
}

/**
 * 根据批次获取组合数据
 * @param { Object } data 批次信息
 */
const getGroupData = (data) => {
  return request({
    url: 'rest/report/queryBatchCollateFund.do',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  })
}

export default {
  getBatchData,
  getGroupData
}
