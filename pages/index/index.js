//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()

Page({
  data: { 
    swiperList: [
      {
        id: 0,
        type: 'image',
        url: '../../static/images/1.jpg'
      }, 
      {
        id: 1,
        type: 'image',
        url: 'https://cdn.colorhub.me/LwGmGx6J3PnZp4g9ZOK8_gf-eFzQXbX1EbW21jmVWSs/auto/0/500/ce/0/bG9jYWw6Ly8vMzAv/NmEvZTQwMjVjNmIx/ZjM4ZTE4ZTIzOTFm/OTE5MzRhN2E0MWE2/OGFkMzA2YS5qcGVn.jpg',
      }, 
      {
        id: 2,
        type: 'image',
        url: 'https://cdn.colorhub.me/fydylYfeHiXO69OnnaJrabXN6lvH3mlt3Y4XzevExWA/auto/0/500/ce/0/bG9jYWw6Ly8vMzkv/YTIvMjRlMjlhY2Ji/M2YxM2IyN2I4MjAy/MzE5OGUyYTFiMWI5/OWFiMzlhMi5qcGVn.jpg'
      }, 
      {
        id: 3,
        type: 'image',
        url: 'https://cdn.colorhub.me/EIq_j5GMRske3s_jUAvDBpExaQfKaBHynWKm0n4CwHM/auto/0/500/ce/0/bG9jYWw6Ly8vZjcv/YmQvNzEwY2MyNDA0/YWU0ZmZmNzA0NzNi/ZmExMzNmMzFhOTc4/OGUwZjdiZC5qcGc.jpg'
      }
    ],
    iconList: [
      {
        icon: 'footprint',
        color: 'red',
        id: 0,
        name: '婴幼儿'
      }, 
      {
        icon: 'group_fill',
        color: 'blue',
        id: 1,
        name: '儿童青少年'
      },
      {
        icon: 'like',
        color: 'orange',
        id: 2,
        name: '老年人'
      }, 
      {
        icon: 'evaluate',
        color: 'olive',
        id: 3,
        name: '孕妇'
      },
      {
        icon: 'hot',
        color: 'red',
        id: 4,
        name: '健身'
      },  
      {
        icon: 'questionfill',
        color: 'cyan',
        id: 5,
        name: '其他'
      }
    ],
    gridCol: 3,
    articles: [],
    mainContentHidden: true,
    indexPageLoadingTime: 1500
  },
  /**
   * 生命周期函数
   */
  onLoad: function() {
    let temp = []
    db.collection('news_list').get().then(res => {
      console.log(res)
      temp = res.data
      console.log(temp)
      this.setData({
        articles: temp
      })
    })
    console.log(app.globalData)
    wx.hideTabBar()
    let self = this
    let time = self.data.indexPageLoadingTime
    setTimeout(()=>{
      self.setData({
        mainContentHidden: false
      })
      wx.showTabBar()
    }, time)    
  },

  /**
   * 自定义事件
   */
  toAnalysis() {
    wx.navigateTo({
      url: '../component_analysis/component_analysis',
    })
  }, 
  toDetail(e) {
    console.log(e)
    let articleId = e.currentTarget.dataset._id
    wx.navigateTo({
      // 携带id跳转
      url: '../knowledge_detail/knowledge_detail?id=' + articleId,
    })
  },
  crowdTap(e) {
    console.log(e)
    let crowdId = e.currentTarget.dataset.id
    if(crowdId !== 5) {
      wx.navigateTo({
        url: '../crowdDetail/crowdDetail?id=' + crowdId,
      })
    } else {
      wx.showModal({
        title: '亲爱的用户',
        content: '此功能尚未开发',
        showCancel: false
      })
    }
  }
})
