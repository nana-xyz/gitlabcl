// 
// node.jsを使ってHTTP リクエストを発行する
// 2018.1.27
// 
// node.js モジュールを下記コマンドで事前にインストールしておくこと
// npm install request
// npm install sync-request
// 

// 環境定数
const GTILAB_HOST = "192.168.0.14";
const GTILAB_WEB_API = "http://" + GTILAB_HOST + "/api/v4/";
const PRIVATE_TOKEN = "sUWrWstZcFDh5KQH176h";

var request = require("sync-request");

// HTTP通信のリクエストヘッダのデフォルトとしてGitLabのアクセストークンを設定する
//var request = request.defaults({
//    headers: { "PRIVATE-TOKEN": PRIVATE_TOKEN }
//});

// GETリクエスト
var response = request("GET", GTILAB_WEB_API + "/version", {
    headers: {
        "PRIVATE-TOKEN": PRIVATE_TOKEN
    }
});

outResponse(response);

response = request("GET", GTILAB_WEB_API + "/groups", {
    headers: {
        "PRIVATE-TOKEN": PRIVATE_TOKEN
    },
//    qs: {
//       search: "gitlab-client-test"
//    }
});
outResponse(response);


// POSTリクエスト
/*
response = request("POST", GTILAB_WEB_API + "/projects", {
    headers: {
       "PRIVATE-TOKEN": PRIVATE_TOKEN
    },
    qs: {
        name: "test-project",
        namespace_id: "3",
        description: "これはテストプロジェクト"
    }
});
outResponse(response);
*/

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
