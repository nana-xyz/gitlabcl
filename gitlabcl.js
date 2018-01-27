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
request({
    method: "GET",
    url: "http://192.168.0.9/api/v4/version",
}, outResponse);

request({
    method: "GET",
    url: "http://192.168.0.9/api/v4/namespaces",
    qs: {
        search: "gitlab-client-test"
    }
}, outResponse);

// POSTリクエスト
request({
    method: "POST",
    url: "http://192.168.0.9/api/v4/projects",
    qs: {
        name: "test-project",
        namespace_id: "3",
        description: "これはテストプロジェクト"
    }
}, outResponse);

//
//
//
function outResponse(error, response, body) {
    console.log("----------");

    if (error) {
        console.log('Error: ' + error.message);
        return;
    }

    console.log('headers:');
    for (var key in response.headers) {
        console.log('  ' + key + ': ' + response.headers[key]);
    }

    console.log('statusCode: ' + response.statusCode)
    console.log('body: ' + body);
}
