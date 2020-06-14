// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database() //初始化数据库
// 云函数入口函数
exports.main = async (event, context) => {
  if(event.str == null){
    return null
  }
 //初始化数据库
  try{
  return await db.collection("abstract").where({           
    name:db.RegExp({        
      regexp: event.str,        
      options: 'i'      
    })
  }).get({     
    success: res => {
      console.log(res)
      rtn = res
    }
    })
  }catch(e){
    console.log(e)
  }
}