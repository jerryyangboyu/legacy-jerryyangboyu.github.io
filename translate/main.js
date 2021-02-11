new Vue({
    el: '#app',
    data: function () {
        return { 
            form:{
                input:"",
                res:"",
                options: [{
                    value: 'zh',
                    label: '中文'
                  }, {
                    value: 'en',
                    label: '英语'
                  }, {
                    value: 'wyw',
                    label: '文言文'
                  }, {
                    value: 'jp',
                    label: '日语'
                  }, {
                    value: 'spa',
                    label: '西班牙语'
                  }],
                from:"en",
                to:"zh"
            }
         }
    },
    methods:{
        async getTranslate(q, f, t) {
            var appid = '20190915000334415';
            var key = 'Wj1zzMc0LOSjSZEZSkQK';
            var salt = (new Date).getTime();
            var query = q;
            // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
            var from = f;
            var to = t;
            var str1 = appid + query + salt + key;
            var sign = MD5(str1);
            var that = this
            $.ajax({
                url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
                type: 'post',
                dataType: 'jsonp',
                data: {
                    q: query,
                    appid: appid,
                    salt: salt,
                    from: from,
                    to: to,
                    sign: sign
                },
                success: function (data) {
                    console.log(data)
                    const result = JSON.parse(JSON.stringify(data));
                    //console.log(result.trans_result[0].dst)
                    var combine = ""
                    result.trans_result.forEach(v => {
                        combine += (v.dst + "\n")
                    });
                    that.form.res = combine
                    //注意在Jquery内部调用函数,this的指向会改变
                }
            });
        },
        async submitHandler(){
            console.log("submit")
            await this.getTranslate(this.form.input, this.form.from, this.form.to)
            console.log(this.form.res)
        }
    }
})