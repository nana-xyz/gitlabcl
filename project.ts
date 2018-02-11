
/**
 * Gilab プロジェクト クラスです。
 * プロパティは、Gitlab Web APIでプロジェクトを作成する時に必要なものしか含まれません。
 */
export class Project {
    /**
     * コンストラクタです。
     * TypeScriptのコンストラクタは下記と同じ意味です。
     *   private name: string;
     *   ...
     * 
     *   constructor(name: string, ...) {
     *       this.name = name;
     *       ...
     *   }
     * @param _name プロジェクト名
     * @param _groupId プロジェクトが属するグループまたはサブグループID
     * @param _description プロジェクトの説明
     */
    constructor(private _name: string, private _groupId: string, private _description: string) {
    }

    /**
     * プロジェクト名を設定します。
     * @param name プロジェクト名
     */
    set name(name: string) {
        this._name = name;
    }

    /**
     * プロジェクト名を取得します。
     * @return プロジェクト名
     */
    get name(): string {
        return this._name;
    }

    /**
     * プロジェクトが属するグループまたはサブグループIDを設定します。
     * @param groupId プロジェクトが属するグループまたはサブグループID
     */
    set groupId(groupId: string) {
        this._groupId = groupId;
    }

    /**
     * プロジェクトが属するグループまたはサブグループIDを取得します。
     * @return プロジェクトが属するグループまたはサブグループID
     */
    get groupId(): string {
        return this._groupId;
    }

    /**
     * プロジェクトの説明を設定します。
     * @param description プロジェクトの説明
     */
    set description(description: string) {
        this._description = description;
    }

    /**
     * プロジェクトの説明を取得します。
     * @return プロジェクトの説明
     */
    get description(): string {
        return this._description;
    }

    /**
     * このオブジェクトをJSONオブジェクトで返却します。
     */
    toJson(): any {
        return { "name": this._name, "id": this._groupId, "desc": this._description };
    }
}
