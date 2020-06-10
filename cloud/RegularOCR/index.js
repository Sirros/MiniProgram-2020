// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const rtnJson = await cloud.callFunction({
    // 要调用的云函数名称
    name: 'OCRUtil',
    // 传递给云函数的参数
    data: {
        str:event.str
    }
  })
  let total = ''
  for(let i = 0;i<rtnJson.result.item_list.length;i++){
      total = total + rtnJson.result.item_list[i]["itemstring"]
  }
 let wordsPattern = /[\u4E00-\u9FA5]{2,4}$/
 let formPattern = /%.*%/
 let contentPattern = /[+-]?([0-9]*\\.?[0-9]+|[0-9]+\\.?[0-9]*)([eE][+-]?[0-9]+)?[a-zA-Z]*/
 let NRCPattern = /[1-9]\\d*$/
 let formMatcher = total.match(formPattern)
 console.log(formMatcher)
 let s
 let form
 let calorie
  if (formMatcher){
    //过滤出只包含营养成分表项目的内容
    s = formMatcher[0]
    //处理掉第一个%
    s = s.substring(1)
    //根据%分词
    form = s.split("%")
    //卡路里计算变量
    calorie = 0.0;
 }
 let rtn = [];
  for(let i = 0;i<form.length;i++){
    let valueMatcher = form[i].match(/\d+([\.]\d+)?/g)
    let temp = form[i].replace(/\d+([\.]\d+)?/g,' ')
    let t = temp.split(' ')
    let row = {}
    if(!t||! valueMatcher)
      break
    row['name'] = t[0]
    if(t.length>0)
      row['value'] = valueMatcher[0] + t[1]
    else
    row['value'] = valueMatcher[0] 
    row['nrv'] = valueMatcher[1] + '%'
    rtn.push(row)
  if(row['name'] == "能量"){
    calorie = parseFloat(valueMatcher[0]) / 4.186
  }
  if (valueMatcher[1]< 10 ) {
      row['caution'] = 'normal'
  } else if (valueMatcher[1]< 20) {
      row['caution'] = 'middle'
  } else {
      row['caution'] = 'high'
  }
  if(row['name'] == "反式脂肪酸"){
      row['caution'] = 'high'
  }
  }
  rtn.push({name:"卡路里",value:calorie,nrv:' ',caution:'结果为每份卡路里，请注意摄入总量哦'})
  return JSON.stringify(rtn)
}