// 
// node.jsを使ってHTTP リクエストを発行する
// 2018.1.27
// 
// node.js requestモジュールを下記コマンドで事前にインストールしておくこ
// npm install request
// 

var request = require("request");

// HTTP通信のリクエストヘッダのデフォルトとしてGitLabのアクセストークンを設定する
var request = request.defaults({
    headers: { "PRIVATE-TOKEN": "sUWrWstZcFDh5KQH176h" }
  });

// GETリクエスト
request.get({
    url: "http://192.168.0.9/api/v4/version",
}, function (error, response, body) {
    if (error) {
        console.log('Error: ' + error.message);
        return;
    }
    console.log(body);
});

