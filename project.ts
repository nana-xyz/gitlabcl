
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
     * @param name プロジェクト名
     * @param id プロジェクトが属するグループまたはサブグループID
     * @param des プロジェクトの説明
     */
    constructor(public name: string, public id: string, public desc: string) {
    }

}
