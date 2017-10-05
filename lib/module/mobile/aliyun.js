const TopClient = require("topsdk");
const core = {};
let client;
core.configure = (params) => {
    client = new TopClient(params.key, params.secret, {
        endpoint: 'http://gw.api.taobao.com/router/rest',
        useValidators: true,
        rawResponse: false
    });
};
core.sendMsg = (params, callback) => {
    client.execute('alibaba.aliqin.fc.sms.num.send', {
        'extend': '',
        'sms_type': 'normal',
        'sms_free_sign_name': params.sign,
        'sms_param': JSON.stringify({ code: params.code }),
        'rec_num': parmas.phone,
        'sms_template_code': params.template
    })
        .then((data) => {
            callback(null, data);
        })
        .catch(err => {
            callback(err);
        });
};
module.exports = core;
