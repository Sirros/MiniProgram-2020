// pages/search_result/search_result.js
const app = getApp();
const db = wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resList: [],
    CustomBar: app.globalData.CustomBar,
    Index: undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let res_arr = JSON.parse(options.result)
    console.log(res_arr)
    if(res_arr.length == 0)
      res_arr.push({"name":"抱歉暂无搜索结果"})
    this.setData({
      resList: res_arr
    })
    console.log(this.resList)
  },

  goToDetail(e) {
    console.log(e)
    console.log(this.data.resList)
    let index = e.currentTarget.dataset.index
    console.log(index)
    db.collection('detail').where({
      id: _.eq(index)
    }).get({
      success: res => {
        console.log(res)
        // this.setData({
        //   detailInfo: res.data
        // })
        // console.log(this.data.detailInfo)
        wx.navigateTo({
          url: '../ingredients_detail/ingredients_detail?detailInfo=' + JSON.stringify(res.data)
        })
      },
      fail: err => {
        console.log('获取详情信息失败', err)
      }
    })
  }
})