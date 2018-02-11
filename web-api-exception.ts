/**
 * WebApi クラスからフローされる例外クラスです。
 * 使ってWeb APIへリクエストし,HTTP ステータス 200以外が返った時に発行されます。
 */
export class WebApiException implements Error {
    /**
     * このクラスの名前
     */
    public name = 'WebApiException';

    /**
     * コンストラクです。
     * @param message 例外エラーメッセージ
     * @param headers レスポンス ヘッダー
     * @param statusCode レスポンス ステータス
     * @param body レスポンス ボディ
     */
    constructor(public message: string, headers: any, statusCode: number, body: string) {
    }

    /**
     * このオブジェクトを文字列として返します。
     */
    toString(): string {
        return this.name + ': ' + this.message;
    }
}
