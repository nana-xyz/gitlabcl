/**
 * ユーティリティ クラスです。
 */
export class Util {

    /**
     * 単一行のJSONデータをコンソール出力します。
     * @param json 
     */
    static printDebugConsole(json: any) {
        for (var key in json) {
            console.log(key + ": " + json[key]);
        }
    }

    /**
     * 複数行のJSONデータをコンソール出力します。
     * @param json 
     */
    static printDebugConsole2(json: any) {
        for (var key in json) {
            console.log("<" + key + ">");
            this.printDebugConsole(json[key]);
            console.log("");
        }
    }

}