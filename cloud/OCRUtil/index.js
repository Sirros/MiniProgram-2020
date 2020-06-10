// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const { OCR } = require('qqai-api-sdk');
const APP = {
  appkey: 'uCtJh2U1VlNb4LDi',
  appid: '2134874098'
}
const ocr = new OCR(APP.appkey,APP.appid)
// 云函数入口函数
exports.main = async (event,context) =>{
  //const img1 = event.img
  console.log('444')
  const img1 = await cloud.downloadFile({
    fileID: event.str,
  })
  let buffer =new Buffer(img1.fileContent)
  let rtn = ''
  return new Promise((resolve, reject) => {
    ocr.generalocr(buffer.toString('base64'))
      .then(res => {
        rtn = JSON.stringify(res.data)
        console.log(rtn);
        resolve(res.data);
      }, (e) => {
        reject(JSON.stringify(e));
      })
  })
}
