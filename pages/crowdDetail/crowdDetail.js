// pages/crowdDetail/crowdDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: "",
    blockTitle: "",
    swiperImgList: {
      children: [
        {
          id: 0,
          type: 'image',
          url: 'https://previews.123rf.com/images/sbego/sbego1506/sbego150600029/41822257-group-of-children-with-fruits.jpg'
        },
        {
          id: 1,
          type: 'image',
          url: 'http://img5.imgtn.bdimg.com/it/u=2545311149,2756468368&fm=26&gp=0.jpg'
        },
        {
          id: 2,
          type: 'image',
          url: 'https://previews.123rf.com/images/virinka/virinka1212/virinka121200020/16694385-cartoon-children-with-fruits.jpg'
        },
        {
          id: 3,
          type: 'image',
          url: 'http://img1.imgtn.bdimg.com/it/u=390439293,432794668&fm=26&gp=0.jpg'
        },
        {
          id: 4,
          type: 'image',
          url: 'http://img0.imgtn.bdimg.com/it/u=3532136509,714403793&fm=26&gp=0.jpg'
        }
      ],
      teenagers: [
        {
          id: 0,
          type: 'image',
          url: 'https://previews.123rf.com/images/sbego/sbego1506/sbego150600029/41822257-group-of-children-with-fruits.jpg'
        },
        {
          id: 1,
          type: 'image',
          url: 'http://img5.imgtn.bdimg.com/it/u=2545311149,2756468368&fm=26&gp=0.jpg'
        },
        {
          id: 2,
          type: 'image',
          url: 'https://previews.123rf.com/images/virinka/virinka1212/virinka121200020/16694385-cartoon-children-with-fruits.jpg'
        },
        {
          id: 3,
          type: 'image',
          url: 'http://img1.imgtn.bdimg.com/it/u=390439293,432794668&fm=26&gp=0.jpg'
        },
        {
          id: 4,
          type: 'image',
          url: 'http://img0.imgtn.bdimg.com/it/u=3532136509,714403793&fm=26&gp=0.jpg'
        }
      ],
      oldMan: [],
      pregnantWoman: [],
      keepFit: []
    },
    contentList: {
      children: [
        {
          importantText: "不管是成人还是婴儿，健康都是最重要的事情，婴幼儿作为幼体就更应该注重健康才能更好的发育成长，以及婴幼儿健康与早期营养补充的关系，现在就为你娓娓道来：",
        },
        {
          importantText: "1.婴幼儿健康的重要性。婴幼儿时期处于人体生长发育的关键期，身长和体重是衡量婴幼儿营养状况的重要指标。随着经济的发展，生活水平的不断提高，婴幼儿的生长发育问题备受重视，父母们更是时刻关注，想尽办法确保其小孩的健康。但很多时候，过度的喂养却导致父母们“揠苗助长”，使婴幼儿出现肥胖和超重，具有比较严重的远期健康危害。"
        },
        {
          importantText: "2.早期营养及其生长发育对成年期患慢性疾病的风险有重要影响，婴幼儿的生长发育需要充足的营养来保证其体格、智力和免疫功能的发展。传统意义上对儿童的养育，往往追求“多、快、高、大”，在体格、智力、免疫功能方面给儿童的生长带来了一定的近期效益，但往往“过犹不及”，增加了远期的健康危害。"
        }
      ],
      teenagers: [
        {
          importantText: "婴幼儿喂养实践中，应遵循其生长的固有轨迹，合理得当，寻求其生长发育与远期健康之间的平衡，避免一味地追求近期效益而带来远期危害。身体是人类的本钱，婴幼儿更是要健康才可以茁壮成长，要是连宝宝的健康都不能保障，我们又怎么配成为他们的父母呢？所以日常一定要为宝宝的营养锻炼想办法，饮食上要注重搭配，平时也要抱抱宝宝做一些伸展手脚的运动哦！",
        }
      ],
      oldMan: [
        {
          importantText: "",
        }
      ],
      pregnantWoman: [
        {
          importantText: "",
        }
      ],
      keepFit: [
        {
          importantText: "",
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let crowdId = options.id
    console.log(crowdId)
    switch(crowdId){
      case "0":
        this.setData({
          pageTitle: "婴幼儿健康小知识",
          swiperImgList: this.data.swiperImgList['children'],
          contentList: this.data.contentList['children'],
          blockTitle: "关于婴幼儿的健康"
        })
      break;
      case "1":
        this.setData({
          pageTitle: "儿童青少年健康小知识",
          swiperImgList: this.data.swiperImgList['teenagers'],
          contentList: this.data.contentList['teenagers'],
          blockTitle: "关于儿童青少年的健康"
        })
        break;
      case "2":
        this.setData({
          pageTitle: "老年人健康小知识",
          swiperImgList: this.data.swiperImgList['oldMan'],
          contentList: this.data.contentList['oldMan'],
          blockTitle: "关于老年人的健康"
        })
        break;
      case "3":
        this.setData({
          pageTitle: "孕妇健康小知识",
          swiperImgList: this.data.swiperImgList['pregnantWoman'],
          contentList: this.data.contentList['pregnantWoman'],
          blockTitle: "关于孕妇的健康"
        })
        break;
      case "4":
        this.setData({
          pageTitle: "健身小知识",
          swiperImgList: this.data.swiperImgList['keepFit'],
          contentList: this.data.contentList['keepFit'],
          blockTitle: ""
        })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})