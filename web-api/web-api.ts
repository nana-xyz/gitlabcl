// TypeScriptでrequire（CommonJS)を使うために
declare function require(x: string): any;

import { WebApiException } from "./web-api-exception";

/**
 * sync-requestを使ったWeb API リクエスト クラスです。
 * 
 * node.js モジュールを下記コマンドで事前にインストールしておくこと
 * npm install request 不要かも
 * npm install sync-request
 */
export class WebApi {
    /**
     * sync-request オブジェクト
     */
    private request: any;

    /**
     * Web API レスポンス　オブジェクト
     */
    private response: any;

    /**
     * コンストラクタです。
     * TypeScriptのコンストラクタは下記と同じ意味です。
     *   private hostName: string;
     *   constructor(hostName: string) {
     *       this.hostName = hostName;
     *   }
     * @param _hostName ホスト名
     */
    constructor(private _hostName: string) {
        this.request = require("sync-request");
    }

    /**
     * ホスト名を設定します。
     * @param hostName ホスト名
     */
    set hostName(hostName: string) {
        this._hostName = hostName;
    }

    /**
     * ホスト名を取得します。
     * @return ホスト名
     */
    get hostName(): string {
        return this._hostName;
    }

    /**
     * HTTP GETリクエストを送ります。
     * @param uri URI
     * @param header HTTPヘッダー
     * @param query HTTPクエリストリング
     * 
     * @return HTTPレスポンス ボディ
     * @exception WebApiException HTTPステータスが200以外の場合
     */
    protected get(uri: string, header: any, query: any): any {
        return this.httpRequest(uri, "GET", header, query);
    }

    /**
     * HTTP POSTリクエストを送ります。
     * @param uri URI
     * @param header HTTPヘッダー
     * @param query HTTPクエリストリング
     * 
     * @return HTTPレスポンス ボディ
     * @exception WebApiException HTTPステータスが200以外の場合
     */
    protected post(uri: string, header: any, query: any): any {
        return this.httpRequest(uri, "POST", header, query);
    }

    /**
     * HTTP リクエストを送ります。
     * WebApiException
     * @param uri URI
     * @param method HTTPメソッド
     * @param header HTTPヘッダー
     * @param query HTTPクエリストリング
     * 
     * @return HTTPレスポンス ボディ (実行環境がブラウザの場合は文字列、そうでない場合はバッファ型)
     * @exception WebApiException HTTPステータスが300以上の場合
     */
    private httpRequest(uri: string, method: string, header: string, query: string): any {
        this.response = this.request(method, uri, {
            headers: header,
            qs: query
        })

        if (this.statusCode >= 300) {
            throw new WebApiException(
                "Status code is not 200",
                this.headers,
                this.statusCode,
                this.body.toString()
            );
        }

        return this.body;
    }

    /**
     * 直前に呼び出したWebAPIのレスポンス ヘッダーを取得します。
     * 取得したヘッダーの参照例は下記のとおり
     * for (var key in response.headers) {
     *   console.log('  ' + key + ': ' + response.headers[key]);
     * }
     * @return レスポンス ヘッダー (JSON)
     */
    get headers(): any {
        return this.response.headers;
    }

    /**
     * 直前に呼び出したWebAPIのレスポンス ヘッダーをkeyを指定して取得します。
     * @param key
     * @return レスポンス ヘッダー
     */
    getHeader(key: string): string {
        return this.response.headers[key].toString();
    }

    /**
     * 直前に呼び出したWebAPIのレスポンス ステータスコードを取得します。
     * @return レスポンス ステータスコード
     */
    get statusCode(): number {
        return this.response.statusCode;
    }

    /**
     * 直前に呼び出したWebAPIのレスポンス ボディを取得します。
     * @return レスポンス ボディ (実行環境がブラウザの場合は文字列、そうでない場合はバッファ型)
     */
    get body(): any {
        return this.response.body;
    }

    /**
     * 直前に呼び出したWebAPIのレスポンスをデバッグ　コンソールへ出力します。
     */
    outDebugConsole() {
        console.log("----------");

        console.log("headers:");
        for (var key in this.response.headers) {
            console.log("  " + key + ": " + this.response.headers[key]);
        }

        console.log("statusCode: " + this.response.statusCode)
        console.log("body: " + this.response.body);
    }
}