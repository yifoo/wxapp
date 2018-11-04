var CONFIG = require('../../utils/config.js')

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swipers: [],
    news: [],
    cat: '17',
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: CONFIG.API_URL.GET_INDEX,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200) {
          var data = res.data;
          var swipers = [];
          var news = [];
          console.log(data);
          for (var i = 0; i < data.count; i++) {
            if (i < 4) {
              swipers.push(data.post[i]);
            }
            news.push(data.post[i])
          }
          that.setData({ swipers: swipers });
          that.setData({ news: news });
        } else {

        }
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '倍养健康',
      desc: '小程序',
      path: '/pages/index/index'
    }
  },
});
