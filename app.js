//app.js
App({
  onLaunch: function() {
    //云开发环境初始化
    wx.cloud.init({
      env:"healthyeating-bzce9"
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        // console.log(e)
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
         	this.globalData.Custom = capsule;
        	this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
        	this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
    // 请求获取接口调用凭证
    // wx.request({
    //   url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET',
    //   method: 'GET',
    //   data: {
    //     grant_type: "client_credential",
    //     appid: "wx675c204407b286da", // 小程序id：wx675c204407b286da
    //     secret: "8d1c60f3d01d89ac35450ff68fed02de" // 小程序密钥： 8d1c60f3d01d89ac35450ff68fed02de
    //   },
    //   success: res=> {
    //     console.log("获取凭证成功")
    //     console.log(res)
    //     this.globalData.access_token = res.data.access_token
    //   },
    //   fail: err => {
    //     console.log("获取凭证失败" + err)
    //   },
    //   complete: info => {
    //     console.log("获取凭证请求触发" + info)
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    access_token: ''
  }
})