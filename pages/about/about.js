Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarList: [
      { avatarUrl: "../../static/images/liu.jpg"},
      { avatarUrl: "../../static/images/jiang.jpg"},
      { avatarUrl: "../../static/images/su.jpg"},
      { avatarUrl: "../../static/images/lin.jpg"}
    ],
    wave: {}
  },
  // onLoad: function() {
  //   const db = wx.cloud.database()
  //   db.collection('avatar_img_list').get({
  //     success: (res) => {
  //       console.log(res)
  //       let temp = res.data.pop()
  //       this.setData({
  //         // avatarList: res.data,
  //         wave: temp
  //       })
  //       console.log(this.data.avatarList)
  //     },
  //     fail: err => {
  //       console.log(err)
  //     }
  //   })
  // }
})