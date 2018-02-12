import { AbstractProjectCreator } from "./abstract-project-creator";
import { Project } from "./project";

/**
 * ポータル関係のProjectオブジェクトを生成するクラス(Factory MethodパターンのConcreteCreatorに相当)です。
 */
export class PortalCreator extends AbstractProjectCreator<Project> {

    protected getIdDesc(): { [key: string]: string; } {
        return {
        "9": "トップのグループ / プログラムソース",
        "10": "トップのグループ / ドキュメント",
        "11": "トップのグループ / 社員のみ",
        };
    }
}
