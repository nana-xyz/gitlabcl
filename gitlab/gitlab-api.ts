import { WebApi } from "./web-api";

/**
 * GitLab WebAPIラッパークラスです。
 * node.jsを使ってHTTP リクエストを発行します。
 * 事前に下記コマンドでnode.js モジュールをインストールしてください。
 * npm install request
 * npm install sync-request
 */
export class GitLabApi extends WebApi {
    /**
     * GitLab WebAPIバージョン
     */
    private static readonly API_V: string = "v4";

    /**
     * コンストラクタです。
     * @param hostName GitLabホスト名
     * @param _personalAccessToken GitLab パーソナル アクセス トークン
     */
    constructor(hostName: string, private _personalAccessToken: string) {
        super(hostName);
    }

    /**
     * GitLabのパーソナル アクセス トークンを設定します。
     * @param hostName GitLabパーソナル アクセス トークン
     */
    set personalAccessToken(personalAccessToken: string) {
        this._personalAccessToken = personalAccessToken;
    }

    /**
     * GitLabのパーソナル アクセス トークンを取得設定します。
     * @return GitLabパーソナル アクセス トークン
     */
    get personalAccessToken(): string {
        return this._personalAccessToken;
    }

    /**
     * GitLab WebAPI versionを呼び出します。
     * @return JSON
     * @see https://docs.gitlab.com/ee/api/version.html
     */
    version(): any {
        var headers = {
            "PRIVATE-TOKEN": this.personalAccessToken
        };

        return JSON.parse(this.get(this.getUri("version"), headers, null))
    }

    /**
     * GitLab WebAPI groupsを呼び出します。
     * @return JSON
     * @see https://docs.gitlab.com/ee/api/groups.html
     */
    listGroups(): any {
        var headers = {
            "PRIVATE-TOKEN": this.personalAccessToken
        };

        return JSON.parse(this.get(this.getUri("groups"), headers, null))
    }


    /**
     * GitLab WebAPI search for groupを呼び出します。
     * @param  name グループ名
     * @return JSON
     * @see https://docs.gitlab.com/ee/api/groups.html#search-for-group
     */
    searchForGroup(name: string): any {
        var headers = {
            "PRIVATE-TOKEN": this.personalAccessToken
        };

        var qs = {
            "search": name,
        };

        return JSON.parse(this.get(this.getUri("groups"), headers, qs))
    }

    /**
     * GitLab WebAPI projectsを呼び出し、グループまたはサブグループの下にプロジェクトを作成します。
     * @param  name プロジェクト名
     * @param nameSpaneId グループまたはサブグループのID(listGroupsで取得するid)
     * @param description 説明
     * @see https://docs.gitlab.com/ee/api/projects.html
     */
    createPorject(name: string, nameSpaneId: string, description: string) {
        var headers = {
            "PRIVATE-TOKEN": this.personalAccessToken
        };

        var qs = {
            "name": name,
            "namespace_id": nameSpaneId,
            "description": description
        };

        return JSON.parse(this.post(this.getUri("projects"), headers, qs))
    }

    /**
     * 引数commandからGitLab WebAPIへのURLを取得します。
     * @param command URIコマンド
     */
    private getUri(command: string): string {
        return "http://" + this.hostName + "/api/" + GitLabApi.API_V + "/" + command;
    }
}
