// pages/log/log.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataId: "",

        ClientOrUnitName: "", //数据库项目
        LegalPerson: "",
        ContactNumber: "",
        Address: "",
        Detial: "",
        ReportingPerson: "",
        ReportingTime: "",

        InputWordLength1: "0",
        InputWordLength2: "0",
        InputWordLength3: "0",
        InputWordLength4: "0",
        InputWordLength5: "0",
        InputWordLength6: "0",

        picname1: "",
        picname2: "",
        picname3: "",
        foldername: "",

        picfilePath1: "",
        picfilePath2: "",
        picfilePath3: "",

        PicID1: "",
        PicID2: "",
        PicID3: "",

        hidden_choose1: "true",
        hidden_choose2: "true",
        hidden_choose3: "true",

        chooseflag1: "",
        chooseflag2: "",
        chooseflag3: "",

        cloudPath1: "",
        cloudPath2: "",
        cloudPath3: "",

        picNumCount: "",

        PicUploadFlag1: "",
        PicUploadFlag2: "",
        PicUploadFlag3: "",

        BusinessOpportunityProfilePicture: "商机资料图片",

        Reserve: "",
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
            InputWordLength1: e.detail.cursor,
        })
    },

    input2: function (e) {
        this.setData({
            LegalPerson: e.detail.value,
            InputWordLength2: e.detail.cursor,
        })
    },

    input3: function (e) {
        this.setData({
            ContactNumber: e.detail.value,
            InputWordLength3: e.detail.cursor,
        })
    },

    input4: function (e) {
        this.setData({
            Address: e.detail.value,
            InputWordLength4: e.detail.cursor,
        })
    },

    input5: function (e) {
        this.setData({
            Detial: e.detail.value,
            InputWordLength5: e.detail.cursor,
        })
    },

    input6: function (e) {
        this.setData({
            ReportingPerson: e.detail.value,
            InputWordLength6: e.detail.cursor,
        })
    },

    choosepic1: function () {
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            success: chooseResult => {
                this.setData({
                    picfilePath1: chooseResult.tempFilePaths,
                    hidden_choose1: "",
                    chooseflag1: "yes",
                    picNumCount: this.data.picNumCount + 1,
                })
            },
        })
    },

    choosepic2: function () {
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            success: chooseResult => {
                this.setData({
                    picfilePath2: chooseResult.tempFilePaths,
                    hidden_choose2: "",
                    chooseflag2: "yes",
                    picNumCount: this.data.picNumCount + 1,
                })
            },
        })
    },

    choosepic3: function () {
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            success: chooseResult => {
                this.setData({
                    picfilePath3: chooseResult.tempFilePaths,
                    hidden_choose3: "",
                    chooseflag3: "yes",
                    picNumCount: this.data.picNumCount + 1,
                })
            },
        })
    },

    upload: function () {
        if (this.data.picNumCount > 1) {
            wx.showToast({
                title: '数据上传中',
                icon: 'loading',
                duration: 2000,
            })
            let db = wx.cloud.database() //设置数据库
            let userCollection = db.collection('Business') //单引号里为刚刚新建的集合名
            userCollection.add({
                data: {
                    ClientOrUnitName: this.data.ClientOrUnitName,
                    LegalPerson: this.data.LegalPerson,
                    ContactNumber: this.data.ContactNumber,
                    Address: this.data.Address,
                    Detial: this.data.Detial,
                    ReportingPerson: this.data.ReportingPerson,
                    ReportingTime: this.Get_UTC_Time(),
                }
            }).then(res => {
                console.log('添加成功', res)
                this.setData({
                    dataId: res._id,
                })
            }).catch(err => {
                console.log('添加失败', err) //失败提示错误信息
            })
            var that = this;
            setTimeout(function () {
                that.uploadPic(); //图片上传函数入口
            }, 2000)
        } else {
            wx.showModal({
                content: "选择的图片不足两张！请至少选择两张图片！",
                showCancel: false,
            })
        }
    },

    uploadPic: function () {
        var that = this;
        this.setData({
            foldername: this.data.ReportingPerson + "-" + this.data.ClientOrUnitName + "-" + this.data.LegalPerson + "-" + this.data.ContactNumber + "-" + this.data.dataId
        })
        this.setData({
            picname1: "营业执照" + "-" + this.data.ReportingPerson + "-" + this.data.ClientOrUnitName + "-" + this.data.LegalPerson + "-" + this.data.ContactNumber + "-" + this.data.dataId + ".jpg",

            picname2: "客户或法人身份证正反面" + "-" + this.data.ReportingPerson + "-" + this.data.ClientOrUnitName + "-" + this.data.LegalPerson + "-" + this.data.ContactNumber + "-" + this.data.dataId + ".jpg",

            picname3: "盖公章意向书" + "-" + this.data.ReportingPerson + "-" + this.data.ClientOrUnitName + "-" + this.data.LegalPerson + "-" + this.data.ContactNumber + "-" + this.data.dataId + ".jpg"
        })
        this.data.cloudPath1 = this.data.BusinessOpportunityProfilePicture + "/" + this.data.foldername + "/" + this.data.picname1;
        this.data.cloudPath2 = this.data.BusinessOpportunityProfilePicture + "/" + this.data.foldername + "/" + this.data.picname2;
        this.data.cloudPath3 = this.data.BusinessOpportunityProfilePicture + "/" + this.data.foldername + "/" + this.data.picname3;
        this.data.picfilePath1 = this.data.picfilePath1.toString();
        this.data.picfilePath2 = this.data.picfilePath2.toString();
        this.data.picfilePath3 = this.data.picfilePath3.toString();
        if (this.data.chooseflag1 == 'yes') {
            wx.cloud.uploadFile({
                // 指定上传到的云路径
                cloudPath: this.data.cloudPath1,
                // 指定要上传的文件的小程序临时文件路径
                filePath: this.data.picfilePath1,
                // 成功回调
                success: res => {
                    console.log('上传成功', res)
                    that.setData({
                        PicID1: "",
                        PicID1: res.fileID
                    })
                },
            })
        }
        if (this.data.chooseflag2 == 'yes') {
            wx.cloud.uploadFile({
                // 指定上传到的云路径
                cloudPath: this.data.cloudPath2,
                // 指定要上传的文件的小程序临时文件路径
                filePath: this.data.picfilePath2,
                // 成功回调
                success: res => {
                    console.log('上传成功', res)
                    that.setData({
                        PicID2: "",
                        PicID2: res.fileID
                    })
                },
            })
        }
        if (this.data.chooseflag3 == 'yes') {
            wx.cloud.uploadFile({
                // 指定上传到的云路径
                cloudPath: this.data.cloudPath3,
                // 指定要上传的文件的小程序临时文件路径
                filePath: this.data.picfilePath3,
                // 成功回调
                success: res => {
                    console.log('上传成功', res)
                    that.setData({
                        PicID3: "",
                        PicID3: res.fileID
                    })
                },
            })
        }
        setTimeout(function () {
            that.setData({
                ClientOrUnitName: "",
                LegalPerson: "",
                ContactNumber: "",
                Address: "",
                Detial: "",
                ReportingPerson: "",

                picfilePath1: "",
                picfilePath2: "",
                picfilePath3: "",

                hidden_choose1: "true",
                hidden_choose2: "true",
                hidden_choose3: "true",

                chooseflag1: "",
                chooseflag2: "",
                chooseflag3: "",

                cloudPath1: "",
                cloudPath2: "",
                cloudPath3: "",

                picNumCount: "",
            })
        }, 1000)
        setTimeout(function () {
            let db = wx.cloud.database()
            const _ = db.command
            db.collection('Business').doc(that.data.dataId).update({
                data: {
                    PicID1: that.data.PicID1,
                    PicID2: that.data.PicID2,
                    PicID3: that.data.PicID3,
                }
            })
        }, 2000)
        setTimeout(function () {
            that.setData({
                PicID1: "",
                PicID2: "",
                PicID3: "",
            })
        }, 5000)
        wx.navigateTo({
            url: '/pages/uploadsuccess/uploadsuccess',
        })
    },

    CheckInput: function () {
        if ((this.data.InputWordLength1 != 0) && (this.data.InputWordLength3 != 0) && (this.data.InputWordLength4 != 0) && (this.data.InputWordLength5 != 0) && (this.data.InputWordLength6 != 0)) {
            if (this.data.InputWordLength1 > 4) {
                if (this.data.InputWordLength2 > 0) {
                    this.CheckDuplicates() //查重函数入口
                } else {
                    wx.showModal({
                        content: "单位装机，法人名称必填，请填写法人名称！",
                        showCancel: false,
                    })
                }
            } else {
                this.CheckDuplicates() //查重函数入口
            }
        } else {
            wx.showModal({
                content: "请填写所有带*的必填项目！",
                showCancel: false,
            })
        }
    },

    CheckDuplicates: function () {
        var that = this;
        wx.showToast({
            title: '查重中，请稍后',
            icon: 'loading',
            duration: 2000,
        })
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
        setTimeout(function () {
            if (that.data.Reserve == 'yes') {
                wx.showModal({
                    content: "抱歉，该商机已被预占！不能进行上报！",
                    showCancel: false,
                })
            } else {
                that.upload() //数据上传数据库函数入口
            }
        }, 2000)
    },

    reChoosePic: function () {
        wx.showModal({
            title: "警告",
            content: "是否重新选择图片，此操作将删除当前图片，是否继续？",
            cancelText: "取消",
            confirmText: "继续",
            confirmColor: "#FF0000",
            success: res => {
                if (res.confirm == true) {
                    this.setData({
                        picfilePath1: "",
                        picfilePath2: "",
                        picfilePath3: "",

                        chooseComplete1: "true",
                        chooseComplete2: "true",
                        chooseComplete3: "true",

                        picNumCount: "",
                    })
                }
            }
        })
    },

    Get_UTC_Time: function () {
        var blank = "";
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1);
        var date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate();
        var hour = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours();
        var min = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes();
        var sec = myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds();
        var myTime = blank.concat(year, "-", month, "-", date, " ", hour, ":", min, ":", sec);
        return myTime;
    },


})