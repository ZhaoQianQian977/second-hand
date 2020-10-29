// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  // console.log(event.name)
  return await db.collection(event.name).limit(5).orderBy('time','desc').get()
}