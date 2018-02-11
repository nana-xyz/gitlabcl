// TypeScriptでrequire（CommonJS)を使うために
declare function require(x: string): any;

import { GitlabHelper } from "./gitlab-helper";
import { Util } from "./util";

/**
 * 
 * 標準入力を使う為、launch.json に下記が必要
 * "console": "integratedTerminal"
 */
class Main {
    /** GitLabホスト名 */
    private static readonly GTILAB_HOST = "192.168.0.14";

    /** GitLabパーソナル アクセス トークン */
    private static readonly GTILAB_PERSONAL_ACCESS_TOKEN = "sUWrWstZcFDh5KQH176h";

    /** グローバル */
    private static readonly G_GLOBAL_ONLY_ID = "11"; // 社員のみ
    private static readonly G_GLOBAL_DOC_ID = "10"; // ドキュメント
    private static readonly G_GLOBAL_SRC_ID = "9"; // プログラムソース

    /** GitLabApiオブジェクト */
    private gitLabHelper: GitlabHelper;

    /** readline-sync オブジェクト */
    private readlineSync: any;

    /**
     * コンストラクタです。
     * 初期処理後、run()メソッドを呼び出します。
     */
    constructor() {
        this.gitLabHelper = new GitlabHelper(Main.GTILAB_HOST, Main.GTILAB_PERSONAL_ACCESS_TOKEN);
        this.readlineSync = require('readline-sync');
        this.run();
    }

    /**
     * メイン処理です。
     * コンストラクタから呼ばれます。
     */
    private run() {
        this.prologue();

        var projects = [
            { "name": "project1", "id": "9", "desc": "サブグループ1 - プロジェクト1" },
            { "name": "project2", "id": "9", "desc": "サブグループ2 - プロジェクト1" },
            { "name": "project3", "id": "9", "desc": "サブグループ3 - プロジェクト1" },
        ];

        var subgroup = this.gitLabHelper.searchForGroup("sub-doc");
        console.log(subgroup.length);
        Util.outDebugConsole2(subgroup);

        if (!this.readlineSync.keyInYN("続行しますか?")) {
            return;
        }

    }

    /**
     * 初期処理です。
     */
    private prologue() {
        var version = this.gitLabHelper.version();

        console.log();
        console.log("***** " + new Date()+ " ***** ");
        console.log("***** GitLab Ver." + version["version"]);
        console.log("*****        Rev." + version["revision"]);
    }

    /**
     * 後処理です。
     */
    epilogue() {
        console.log("***** " + new Date() + " ***** ");
        console.log("");
    }
}

const main = new Main();
main.epilogue();