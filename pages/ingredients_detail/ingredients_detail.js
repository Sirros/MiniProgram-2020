// pages/ingredients_detail/ingredients_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options !== '[]') {
      let temp = JSON.parse(options.detailInfo)
      console.log(temp)

      if(temp.length !== 0) {
        delete temp[0].id
        delete temp[0]._id
        let rtn = []
        let item = {}

        item["添加剂名"] = temp[0].name
        item["英文名"] =temp[0].en_name
        item["使用类别"] =temp[0].type
        item["商品名"] =temp[0].product_name
        item["英文商品名"] =temp[0].en_product_name
        item["化学式"] =temp[0].chemical_form
        item["分子量"] =temp[0].chemical_weight
        item["CAS"] =temp[0].CAS
        item["FEMA"] =temp[0].FEMA
        item["性状描述"] =temp[0].description
        item["制 法"] =temp[0].made
        item["毒理学"] =temp[0].poison
        item["用 途"] =temp[0].use
        
        rtn.push(item)

        this.setData({
          detailInfo: rtn
        })
      }
      console.log(this.data.detailInfo)
    }
  }
})