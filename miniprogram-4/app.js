// app.js
App({
    onLaunch: function () {
        //初始化云环境
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力');
        } else {
            wx.cloud.init({
                env: '你的云环境ID',
                traceUser: true,
            });
        }
    },
})