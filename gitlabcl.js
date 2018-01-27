// 
// node.jsを使ってHTTP リクエストを発行する
// 2018.1.27
// 
// node.js モジュールを下記コマンドで事前にインストールしておくこと
// npm install request
// npm install sync-request
// 

var request = require("sync-request");

// HTTP通信のリクエストヘッダのデフォルトとしてGitLabのアクセストークンを設定する
//var request = request.defaults({
//    headers: { "PRIVATE-TOKEN": "sUWrWstZcFDh5KQH176h" }
//});

// GETリクエスト
var response = request("GET", "http://192.168.0.9/api/v4/version", {
    headers: {
        "PRIVATE-TOKEN": "sUWrWstZcFDh5KQH176h"
    }
});

outResponse(response);

response = request("GET", "http://192.168.0.9/api/v4/namespaces", {
    headers: {
        "PRIVATE-TOKEN": "sUWrWstZcFDh5KQH176h"
    },
    qs: {
        search: "gitlab-client-test"
    }
});
outResponse(response);


// POSTリクエスト
response = request("POST", "http://192.168.0.9/api/v4/projects", {
    headers: {
        "PRIVATE-TOKEN": "sUWrWstZcFDh5KQH176h"
    },
    qs: {
        name: "test-project",
        namespace_id: "3",
        description: "これはテストプロジェクト"
    }
});
outResponse(response);

//
//
//
function outResponse(response) {
    console.log("----------");

 //   if (error) {
 //       console.log('Error: ' + error.message);
 //       return;
 //   }

    console.log('headers:');
    for (var key in response.headers) {
        console.log('  ' + key + ': ' + response.headers[key]);
    }

    console.log('statusCode: ' + response.statusCode)
    console.log('body: ' + response.body);
}
