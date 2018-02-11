/**
 * ユーティリティ クラスです。
 */
export class Util {

    /**
     * 単一行のJSONデータをコンソール出力します。
     * @param json 
     */
    static outDebugConsole(json: any) {
        for (var key in json) {
            console.log(key + ": " + json[key]);
        }
    }

    /**
     * 複数行のJSONデータをコンソール出力します。
     * @param json 
     */
    static outDebugConsole2(json: any) {
        for (var key in json) {
            console.log("<" + key + ">");
            this.outDebugConsole(json[key]);
            console.log("");
        }
    }

}