import { GitLabApi } from "./gitlab/gitlab-api";
import { Util } from "./util";

/**
 * GitLabApiクラスに本ツール特有の機能を追加したクラスです。
 */
export class GitlabHelper extends GitLabApi {

    /**
     * コンストラクタです。
     */
    constructor(hostName: string, personalAccessToken: string) {
        super(hostName, personalAccessToken);
    }

    /**
     * 引数で与えたプロジェクト リストをデバッグ コンソールへ出力します。
     * @param projects プロジェクト(name,id,desc)一覧
     */
    printProjectList(projects: any) {
        for (var i in projects) {
            var project = projects[i]
            console.log(project.name + " " + project.id + " " + project.desc);
        }
    }

    /**
     * 引数で与えたプロジェクト リストをGitLabで生成します。
     * @param projects プロジェクト(name,id,desc)一覧
     */
    createProjectList(projects: any) {
        for (var i in projects) {
            var project = projects[i]
            this.createProject(project);
        }

    }

    /**
     * 引数で与えたプロジェクトをGitLabで生成します。
     * @param project プロジェクト(name,id,desc)
     */
    createProject(project: any) {
        this.createPorject(project.name, project.id, project.desc);
    }

    /**
     * GitLabに登録されているグループ リストをコンソール出力します。
     */
    printGroupList() {
        var groups = this.listGroups();
        Util.printDebugConsole2(groups);
    }

}