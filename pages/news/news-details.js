var CONFIG = require('../../utils/config.js')
var WxParse = require('../../utils/wxParse/wxParse.js');

var app = getApp();
Page({
  data:{
    news:{}
  },
  onLoad: function (options) {
    var that = this;
        //  var data = {post:{id:13,thumbnail:'https://s1.ax1x.com/2018/11/03/i5SDyj.jpg',img:'https://s1.ax1x.com/2018/11/03/i5SBlQ.jpg',title:'测试标题',excerpt:'侧暗示大手大脚控制库存卡实打实大阿斯达四大',content:`<div id="content" class="content"><span>消费者对新鲜健康的需求越来越渴望和迫切，新鲜零食现在已经成为了食品零售业最热门的趋势。</span><img src="https://s1.ax1x.com/2018/11/03/i5SDyj.jpg" /></div>
        //   `}}
        //   that.setData({
        //     news: data.post,
        //   })
        //   WxParse.wxParse('content', 'html', data.post.content, that, 25)
        //   return
    wx.request({
      url: CONFIG.API.GET_ARTICLE + options.id,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res);

        if (res.statusCode == 200) {        
          var data = res.data;
          data = {post:{id:13,thumbnail:'https://s1.ax1x.com/2018/11/03/i5SDyj.jpg',img:'https://s1.ax1x.com/2018/11/03/i5SBlQ.jpg',title:'测试阿萨德爱是低价',excerpt:'侧暗示大手大脚控制库存卡实打实大阿斯达四大',content:`<div id="content" class="content"><span>消费者对新鲜健康的需求越来越渴望和迫切，新鲜零食现在已经成为了食品零售业最热门的趋势。</span><img src="https://s1.ax1x.com/2018/11/03/i5SDyj.jpg" /></div>
          `}}
          that.setData({
            news: data.post,
          })
          WxParse.wxParse('content', 'html', data.post.content, that, 25)
        } else {
          
        }
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
