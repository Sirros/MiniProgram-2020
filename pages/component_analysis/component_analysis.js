let config = require('../../utils/util.js')
let baseURL = config.config.baseURL

const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgList: [], // 图片
    loadModal: false, // 识别动画控制
    analysisRES: '',
    fileID:'1',
    tempFilePaths:''
  },
  onLoad: function() {
    
  },
  /**
   * 自定义函数
   */
  // 选择图片
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],  // 本地相册选择、拍照
      success: (res) => {
        console.log("Select Image Success!")
        this.setData({
          imgList: res.tempFilePaths  // 保存图片url到本地，以便展示以及删除
        })
        this.tempFilePaths = res.tempFilePaths[0]
        console.log(this.tempFilePaths)
        let targetImage = res.tempFilePaths
        let self = this
        // 选择图片之后就进行上传
        wx.cloud.uploadFile({
          cloudPath: 'img_tmp/'+(new Date()).valueOf()+'pic.png',
          filePath: targetImage[0],
          name: 'file',
          success:(res)=> {  
            console.log("Upload Image Success!")
            this.fileID = res.fileID 
          },
          fail(err) {
            console.log("Upload Image Fail...")
          }
        })
      },
      fail: (err) => {
        console.log("Select Image Fail...")
      }
    });
  },
  // 预览图片
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  // 删除图片
  DelImg(e) {
    wx.showModal({
      title: '亲爱的用户',
      content: '确定要删除这张照片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  // 腾讯AI通用OCR接口文档：https://ai.qq.com/doc/ocrgeneralocr.shtml
  toGetRes() {
    wx.cloud.callFunction({
      name:"RegularOCR",
      data:{
      //img:wx.getFileSystemManager().readFileSync(this.tempFilePaths, "base64")
      str:this.fileID
    },
    success:res => {
      this.analysisRES = res,
      console.log('[云函数] [OCRUtil] 调用成功')
      console.log(res)
      wx.navigateTo({
        url: '../analysis_result/analysis_result?result='+res.result,
      })
    },
      fail: err => { 
        console.error('[云函数] [OCRUtil] 调用失败', err)
      }
    })    
    console.log(this.analysisRES)
    // if(this.data.analysisRES == '') {
    //   wx.showModal({
    //     title: 'Sorry',
    //     content: '请稍后重试',
    //     showCancel: false
    //   })
    // } else {
    //   console.log(this.data.analysisRES)
    // }
    
  },

  onLoad: function() {
    wx.showModal({
      title: '提示',
      content: '在上传图片的时候，请尽量让图片内不含无用的信息',
      showCancel: false
    })
  }
})