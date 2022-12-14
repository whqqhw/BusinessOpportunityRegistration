// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 获取openid
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    return {
        event,
        openid: wxContext.OPENID,
        // appid: wxContext.APPID,
        // unionid: wxContext.UNIONID,
    }
}