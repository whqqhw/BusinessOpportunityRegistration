// index.js
Page({
    data: {

    },

    logtap: function () {
        wx.navigateTo({
            url: '/pages/log/log',
        })
    },

    searchtap: function () {
        wx.navigateTo({
            url: '/pages/search/search',
        })
    },

    databasetap: function () {
        wx.navigateTo({
            url: '/pages/database/database',
        })
    },

})