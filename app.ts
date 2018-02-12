// TypeScriptでrequire（CommonJS)を使うために
declare function require(x: string): any;

import { GitlabHelper } from "./gitlab-helper";
import { Util } from "./util";
import { Project } from "./factory/project";
import { PortalCreator } from "./factory/portal-creator";

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

        this.prologue();
        this.run();
        this.epilogue();
    }

    /**
     * メイン処理です。
     * コンストラクタから呼ばれます。
     */
    private run() {

        // グループリトをコンソールへ出力
        //this.gitLabHelper.printGroupList();

        var factory = new PortalCreator();
        var projects: Project[] = factory.create("free", "自由");

        Util.printDebugConsole2(projects);

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
        console.log("***** " + new Date() + " ***** ");
        console.log("***** GitLab Ver." + version["version"]);
        console.log("*****        Rev." + version["revision"]);
    }

    /**
     * 後処理です。
     */
    private epilogue() {
        console.log("***** " + new Date() + " ***** ");
        console.log("");
    }
}

const main = new Main();
