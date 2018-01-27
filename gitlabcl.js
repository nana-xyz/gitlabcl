// 
// node.jsを使ってHTTP リクエストを発行する
// 2018.1.27
// 
// node.js requestモジュールを下記コマンドで事前にインストールしておくこ
// npm install request
// 

var webclient = require("request");

// GETリクエスト
webclient.get({
    url: "http://192.168.0.9/api/v4/version",
    // HTTP 通信のリクエストヘッダを設定する
    headers: {
        "PRIVATE-TOKEN": "sUWrWstZcFDh5KQH176h"
    }
}, function (error, response, body) {
    if (error) {
        console.log('Error: ' + error.message);
        return;
    }
    console.log(body);
});

