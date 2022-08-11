// pages/database/database.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: "xxx",

        delete_path: "",

        UpdataMonth: "",
        UpdataDate: "",
        UpdataHide: "",

        dataID1: "",
        ClientOrUnitName1: "",
        LegalPerson1: "",
        ContactNumber1: "",
        Address1: "",
        Detial1: "",
        ReportingPerson1: "",
        ReportingTime1: "",
        PicID11: "",
        PicID21: "",
        PicID31: "",

        dataID2: "",
        ClientOrUnitName2: "",
        LegalPerson2: "",
        ContactNumber2: "",
        Address2: "",
        Detial2: "",
        ReportingPerson2: "",
        ReportingTime2: "",
        PicID12: "",
        PicID22: "",
        PicID32: "",

        dataID3: "",
        ClientOrUnitName3: "",
        LegalPerson3: "",
        ContactNumber3: "",
        Address3: "",
        Detial3: "",
        ReportingPerson3: "",
        ReportingTime3: "",
        PicID13: "",
        PicID23: "",
        PicID33: "",

        dataID4: "",
        ClientOrUnitName4: "",
        LegalPerson4: "",
        ContactNumber4: "",
        Address4: "",
        Detial4: "",
        ReportingPerson4: "",
        ReportingTime4: "",
        PicID14: "",
        PicID24: "",
        PicID34: "",

        dataID5: "",
        ClientOrUnitName5: "",
        LegalPerson5: "",
        ContactNumber5: "",
        Address5: "",
        Detial5: "",
        ReportingPerson5: "",
        ReportingTime5: "",
        PicID15: "",
        PicID25: "",
        PicID35: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
        wx.cloud.callFunction({
            // 云函数名称
            name: 'get_openid',
            // 传给云函数的参数
            data: {},
            success: function (res) {
                that.setData({
                    openid: res.result.openid
                })
            },
            fail: console.error
        })

        this.Get_Updata();
    },

    searchdatabase: function () {
        if (Object.keys(this.data.openid).length > 0) {
            this.clear();
            let db = wx.cloud.database() //设置数据库
            let userCollection = db.collection('Business') //单引号里为刚刚新建的集合名
            userCollection.where({
                _openid: this.data.openid
            }).get().then(res => {
                console.log('数据查询成功', res) //将返回值存到res里
                if (res.data.length == 1) {
                    this.setData({
                        dataID1: res.data[res.data.length - 1]._id,
                        ClientOrUnitName1: res.data[res.data.length - 1].ClientOrUnitName,
                        LegalPerson1: res.data[res.data.length - 1].LegalPerson,
                        ContactNumber1: res.data[res.data.length - 1].ContactNumber,
                        Address1: res.data[res.data.length - 1].Address,
                        Detial1: res.data[res.data.length - 1].Detial,
                        ReportingPerson1: res.data[res.data.length - 1].ReportingPerson,
                        ReportingTime1: res.data[res.data.length - 1].ReportingTime,
                        PicID11: res.data[res.data.length - 1].PicID1,
                        PicID21: res.data[res.data.length - 1].PicID2,
                        PicID31: res.data[res.data.length - 1].PicID3,
                    })
                }
                if (res.data.length == 2) {
                    this.setData({
                        dataID1: res.data[res.data.length - 1]._id,
                        ClientOrUnitName1: res.data[res.data.length - 1].ClientOrUnitName,
                        LegalPerson1: res.data[res.data.length - 1].LegalPerson,
                        ContactNumber1: res.data[res.data.length - 1].ContactNumber,
                        Address1: res.data[res.data.length - 1].Address,
                        Detial1: res.data[res.data.length - 1].Detial,
                        ReportingPerson1: res.data[res.data.length - 1].ReportingPerson,
                        ReportingTime1: res.data[res.data.length - 1].ReportingTime,
                        PicID11: res.data[res.data.length - 1].PicID1,
                        PicID21: res.data[res.data.length - 1].PicID2,
                        PicID31: res.data[res.data.length - 1].PicID3,

                        dataID2: res.data[res.data.length - 2]._id,
                        ClientOrUnitName2: res.data[res.data.length - 2].ClientOrUnitName,
                        LegalPerson2: res.data[res.data.length - 2].LegalPerson,
                        ContactNumber2: res.data[res.data.length - 2].ContactNumber,
                        Address2: res.data[res.data.length - 2].Address,
                        Detial2: res.data[res.data.length - 2].Detial,
                        ReportingPerson2: res.data[res.data.length - 2].ReportingPerson,
                        ReportingTime2: res.data[res.data.length - 2].ReportingTime,
                        PicID12: res.data[res.data.length - 2].PicID1,
                        PicID22: res.data[res.data.length - 2].PicID2,
                        PicID32: res.data[res.data.length - 2].PicID3,
                    })
                }
                if (res.data.length == 3) {
                    this.setData({
                        dataID1: res.data[res.data.length - 1]._id,
                        ClientOrUnitName1: res.data[res.data.length - 1].ClientOrUnitName,
                        LegalPerson1: res.data[res.data.length - 1].LegalPerson,
                        ContactNumber1: res.data[res.data.length - 1].ContactNumber,
                        Address1: res.data[res.data.length - 1].Address,
                        Detial1: res.data[res.data.length - 1].Detial,
                        ReportingPerson1: res.data[res.data.length - 1].ReportingPerson,
                        ReportingTime1: res.data[res.data.length - 1].ReportingTime,
                        PicID11: res.data[res.data.length - 1].PicID1,
                        PicID21: res.data[res.data.length - 1].PicID2,
                        PicID31: res.data[res.data.length - 1].PicID3,

                        dataID2: res.data[res.data.length - 2]._id,
                        ClientOrUnitName2: res.data[res.data.length - 2].ClientOrUnitName,
                        LegalPerson2: res.data[res.data.length - 2].LegalPerson,
                        ContactNumber2: res.data[res.data.length - 2].ContactNumber,
                        Address2: res.data[res.data.length - 2].Address,
                        Detial2: res.data[res.data.length - 2].Detial,
                        ReportingPerson2: res.data[res.data.length - 2].ReportingPerson,
                        ReportingTime2: res.data[res.data.length - 2].ReportingTime,
                        PicID12: res.data[res.data.length - 2].PicID1,
                        PicID22: res.data[res.data.length - 2].PicID2,
                        PicID32: res.data[res.data.length - 2].PicID3,

                        dataID3: res.data[res.data.length - 3]._id,
                        ClientOrUnitName3: res.data[res.data.length - 3].ClientOrUnitName,
                        LegalPerson3: res.data[res.data.length - 3].LegalPerson,
                        ContactNumber3: res.data[res.data.length - 3].ContactNumber,
                        Address3: res.data[res.data.length - 3].Address,
                        Detial3: res.data[res.data.length - 3].Detial,
                        ReportingPerson3: res.data[res.data.length - 3].ReportingPerson,
                        ReportingTime3: res.data[res.data.length - 3].ReportingTime,
                        PicID13: res.data[res.data.length - 3].PicID1,
                        PicID23: res.data[res.data.length - 3].PicID2,
                        PicID33: res.data[res.data.length - 3].PicID3,
                    })
                }
                if (res.data.length == 4) {
                    this.setData({
                        dataID1: res.data[res.data.length - 1]._id,
                        ClientOrUnitName1: res.data[res.data.length - 1].ClientOrUnitName,
                        LegalPerson1: res.data[res.data.length - 1].LegalPerson,
                        ContactNumber1: res.data[res.data.length - 1].ContactNumber,
                        Address1: res.data[res.data.length - 1].Address,
                        Detial1: res.data[res.data.length - 1].Detial,
                        ReportingPerson1: res.data[res.data.length - 1].ReportingPerson,
                        ReportingTime1: res.data[res.data.length - 1].ReportingTime,
                        PicID11: res.data[res.data.length - 1].PicID1,
                        PicID21: res.data[res.data.length - 1].PicID2,
                        PicID31: res.data[res.data.length - 1].PicID3,

                        dataID2: res.data[res.data.length - 2]._id,
                        ClientOrUnitName2: res.data[res.data.length - 2].ClientOrUnitName,
                        LegalPerson2: res.data[res.data.length - 2].LegalPerson,
                        ContactNumber2: res.data[res.data.length - 2].ContactNumber,
                        Address2: res.data[res.data.length - 2].Address,
                        Detial2: res.data[res.data.length - 2].Detial,
                        ReportingPerson2: res.data[res.data.length - 2].ReportingPerson,
                        ReportingTime2: res.data[res.data.length - 2].ReportingTime,
                        PicID12: res.data[res.data.length - 2].PicID1,
                        PicID22: res.data[res.data.length - 2].PicID2,
                        PicID32: res.data[res.data.length - 2].PicID3,

                        dataID3: res.data[res.data.length - 3]._id,
                        ClientOrUnitName3: res.data[res.data.length - 3].ClientOrUnitName,
                        LegalPerson3: res.data[res.data.length - 3].LegalPerson,
                        ContactNumber3: res.data[res.data.length - 3].ContactNumber,
                        Address3: res.data[res.data.length - 3].Address,
                        Detial3: res.data[res.data.length - 3].Detial,
                        ReportingPerson3: res.data[res.data.length - 3].ReportingPerson,
                        ReportingTime3: res.data[res.data.length - 3].ReportingTime,
                        PicID13: res.data[res.data.length - 3].PicID1,
                        PicID23: res.data[res.data.length - 3].PicID2,
                        PicID33: res.data[res.data.length - 3].PicID3,

                        dataID4: res.data[res.data.length - 4]._id,
                        ClientOrUnitName4: res.data[res.data.length - 4].ClientOrUnitName,
                        LegalPerson4: res.data[res.data.length - 4].LegalPerson,
                        ContactNumber4: res.data[res.data.length - 4].ContactNumber,
                        Address4: res.data[res.data.length - 4].Address,
                        Detial4: res.data[res.data.length - 4].Detial,
                        ReportingPerson4: res.data[res.data.length - 4].ReportingPerson,
                        ReportingTime4: res.data[res.data.length - 4].ReportingTime,
                        PicID14: res.data[res.data.length - 4].PicID1,
                        PicID24: res.data[res.data.length - 4].PicID2,
                        PicID34: res.data[res.data.length - 4].PicID3,
                    })
                }
                if (res.data.length >= 5) {
                    this.setData({
                        dataID1: res.data[res.data.length - 1]._id,
                        ClientOrUnitName1: res.data[res.data.length - 1].ClientOrUnitName,
                        LegalPerson1: res.data[res.data.length - 1].LegalPerson,
                        ContactNumber1: res.data[res.data.length - 1].ContactNumber,
                        Address1: res.data[res.data.length - 1].Address,
                        Detial1: res.data[res.data.length - 1].Detial,
                        ReportingPerson1: res.data[res.data.length - 1].ReportingPerson,
                        ReportingTime1: res.data[res.data.length - 1].ReportingTime,
                        PicID11: res.data[res.data.length - 1].PicID1,
                        PicID21: res.data[res.data.length - 1].PicID2,
                        PicID31: res.data[res.data.length - 1].PicID3,

                        dataID2: res.data[res.data.length - 2]._id,
                        ClientOrUnitName2: res.data[res.data.length - 2].ClientOrUnitName,
                        LegalPerson2: res.data[res.data.length - 2].LegalPerson,
                        ContactNumber2: res.data[res.data.length - 2].ContactNumber,
                        Address2: res.data[res.data.length - 2].Address,
                        Detial2: res.data[res.data.length - 2].Detial,
                        ReportingPerson2: res.data[res.data.length - 2].ReportingPerson,
                        ReportingTime2: res.data[res.data.length - 2].ReportingTime,
                        PicID12: res.data[res.data.length - 2].PicID1,
                        PicID22: res.data[res.data.length - 2].PicID2,
                        PicID32: res.data[res.data.length - 2].PicID3,

                        dataID3: res.data[res.data.length - 3]._id,
                        ClientOrUnitName3: res.data[res.data.length - 3].ClientOrUnitName,
                        LegalPerson3: res.data[res.data.length - 3].LegalPerson,
                        ContactNumber3: res.data[res.data.length - 3].ContactNumber,
                        Address3: res.data[res.data.length - 3].Address,
                        Detial3: res.data[res.data.length - 3].Detial,
                        ReportingPerson3: res.data[res.data.length - 3].ReportingPerson,
                        ReportingTime3: res.data[res.data.length - 3].ReportingTime,
                        PicID13: res.data[res.data.length - 3].PicID1,
                        PicID23: res.data[res.data.length - 3].PicID2,
                        PicID33: res.data[res.data.length - 3].PicID3,

                        dataID4: res.data[res.data.length - 4]._id,
                        ClientOrUnitName4: res.data[res.data.length - 4].ClientOrUnitName,
                        LegalPerson4: res.data[res.data.length - 4].LegalPerson,
                        ContactNumber4: res.data[res.data.length - 4].ContactNumber,
                        Address4: res.data[res.data.length - 4].Address,
                        Detial4: res.data[res.data.length - 4].Detial,
                        ReportingPerson4: res.data[res.data.length - 4].ReportingPerson,
                        ReportingTime4: res.data[res.data.length - 4].ReportingTime,
                        PicID14: res.data[res.data.length - 4].PicID1,
                        PicID24: res.data[res.data.length - 4].PicID2,
                        PicID34: res.data[res.data.length - 4].PicID3,

                        dataID5: res.data[res.data.length - 5]._id,
                        ClientOrUnitName5: res.data[res.data.length - 5].ClientOrUnitName,
                        LegalPerson5: res.data[res.data.length - 5].LegalPerson,
                        ContactNumber5: res.data[res.data.length - 5].ContactNumber,
                        Address5: res.data[res.data.length - 5].Address,
                        Detial5: res.data[res.data.length - 5].Detial,
                        ReportingPerson5: res.data[res.data.length - 5].ReportingPerson,
                        ReportingTime5: res.data[res.data.length - 5].ReportingTime,
                        PicID15: res.data[res.data.length - 5].PicID1,
                        PicID25: res.data[res.data.length - 5].PicID2,
                        PicID35: res.data[res.data.length - 5].PicID3,
                    })
                }
            }).catch(err => {
                console.log('查询失败', err) //失败提示错误信息
            })
        }
    },

    clear: function () {
        wx.clearStorage({})
        wx.clearStorageSync()
    },

    Pictap11: function () {
        wx.previewImage({
            urls: [this.data.PicID11] // 需要预览的图片http链接列表
        })
    },

    Pictap21: function () {
        wx.previewImage({
            urls: [this.data.PicID21] // 需要预览的图片http链接列表
        })
    },

    Pictap31: function () {
        wx.previewImage({
            urls: [this.data.PicID31] // 需要预览的图片http链接列表
        })
    },

    Pictap12: function () {
        wx.previewImage({
            urls: [this.data.PicID12] // 需要预览的图片http链接列表
        })
    },

    Pictap22: function () {
        wx.previewImage({
            urls: [this.data.PicID22] // 需要预览的图片http链接列表
        })
    },

    Pictap32: function () {
        wx.previewImage({
            urls: [this.data.PicID32] // 需要预览的图片http链接列表
        })
    },

    Pictap13: function () {
        wx.previewImage({
            urls: [this.data.PicID13] // 需要预览的图片http链接列表
        })
    },

    Pictap23: function () {
        wx.previewImage({
            urls: [this.data.PicID23] // 需要预览的图片http链接列表
        })
    },

    Pictap33: function () {
        wx.previewImage({
            urls: [this.data.PicID33] // 需要预览的图片http链接列表
        })
    },

    Pictap14: function () {
        wx.previewImage({
            urls: [this.data.PicID14] // 需要预览的图片http链接列表
        })
    },

    Pictap24: function () {
        wx.previewImage({
            urls: [this.data.PicID24] // 需要预览的图片http链接列表
        })
    },

    Pictap34: function () {
        wx.previewImage({
            urls: [this.data.PicID34] // 需要预览的图片http链接列表
        })
    },

    Pictap15: function () {
        wx.previewImage({
            urls: [this.data.PicID15] // 需要预览的图片http链接列表
        })
    },

    Pictap25: function () {
        wx.previewImage({
            urls: [this.data.PicID25] // 需要预览的图片http链接列表
        })
    },

    Pictap35: function () {
        wx.previewImage({
            urls: [this.data.PicID35] // 需要预览的图片http链接列表
        })
    },



    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    Get_Updata: function () {
        var that = this;
        wx.cloud.database().collection('Announcement').where({
                _id: "6d85a2b962f071c6189e0ea32aa8a846",
            })
            .get()
            .then(res => {
                that.setData({
                    Month: res.data[0].Month,
                    Date: res.data[0].Date,
                    Hide: res.data[0].Hide,
                })
            })
    },

})