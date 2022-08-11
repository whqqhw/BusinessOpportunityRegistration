// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        Reserve: "no",

        ClientOrUnitName: "",
        LegalPerson: "",
        ContactNumber: "",
        Address: "",


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        clearInterval(this.data.timer);
        this.setData({
            timer: null
        })
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        clearInterval(this.data.timer);
        this.setData({
            timer: null
        })
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

    input1: function (e) {
        this.setData({
            ClientOrUnitName: e.detail.value,
        })
    },

    input2: function (e) {
        this.setData({
            LegalPerson: e.detail.value,
        })
    },

    input3: function (e) {
        this.setData({
            ContactNumber: e.detail.value,
        })
    },

    input4: function (e) {
        this.setData({
            Address: e.detail.value,
        })
    },

    search: function () {
        this.setData({
            Reserve: "no"
        })
        let db = wx.cloud.database() //设置数据库
        let userCollection = db.collection('Business') //单引号里为刚刚新建的集合名
        userCollection.where({
            ClientOrUnitName: this.data.ClientOrUnitName
        }).get().then(res => {
            console.log('数据查询成功', res) //将返回值存到res里
            if (res.data.length > 0) {
                console.log("匹配")
                this.setData({
                    Reserve: "yes"
                })
            }
        })
        userCollection.where({
            LegalPerson: this.data.LegalPerson
        }).get().then(res => {
            console.log('数据查询成功', res) //将返回值存到res里
            if (res.data.length > 0) {
                console.log("匹配")
                this.setData({
                    Reserve: "yes"
                })
            }
        })
        userCollection.where({
            ContactNumber: this.data.ContactNumber
        }).get().then(res => {
            console.log('数据查询成功', res) //将返回值存到res里
            if (res.data.length > 0) {
                console.log("匹配")
                this.setData({
                    Reserve: "yes"
                })
            }
        })
        userCollection.where({
            Address: this.data.Address
        }).get().then(res => {
            console.log('数据查询成功', res) //将返回值存到res里
            if (res.data.length > 0) {
                console.log("匹配")
                this.setData({
                    Reserve: "yes"
                })
            }
        })
        wx.showToast({
            title: '查询中，请稍后',
            icon: 'loading',
            duration: 2000,
        })
        var that = this;
        setTimeout(function () {
            if (that.data.Reserve == 'yes') {
                wx.showModal({
                    content: "抱歉，该商机已被预占！",
                    showCancel: false,
                })
            } else {
                wx.showModal({
                    content: "恭喜，该商机未被预占！",
                    showCancel: false,
                })
            }
        }, 2000)
    },


})