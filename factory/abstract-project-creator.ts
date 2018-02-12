import { Project } from "./project";

/**
 * Projectオブジェクトを生成するの抽象クラス(Factory MethodパターンのCreatorに相当)です。
 * すべてのCreatorFactoryはこの抽象クラスを継承して生成します。
 */
export abstract class AbstractProjectCreator<P extends Project> {

	/**
	 * オブジェクトを生成する抽象メソッドです(factoryMethod相当)。
	 * @param name プロジェクト名
	 * @param desc プロジェクトの説明
	 * @return Projectまたはその派生クラス オブジェクトの配列
	 */
	protected factoryMethod(name: string, desc: string): Project[] {
		// 本当は,ConcreteProductnの相当するオブジェクト(PortalProject)を
		// 生成するのだけれど、Projectオブジェクトで事足りるので、PortalProject
		// のようなものは定義しなかった。

		var result: Project[] = [];

		for (var id in this.getIdDesc()) {
			// console.log(id);
			// console.log(PortalCreator.ID_DESC[id]);
			result.push(new Project(name, id, this.getIdDesc()[id] + " / " + desc));
		}

		return result;
	};

	/**
	 * Gitlabへ登録するプロジェクトが属するサブグループIDとプロジェクト説明をJSONで取得します。
	 * @return サブグループIDとプロジェクト説明をJSON
	 */
	protected abstract getIdDesc(): { [key: string]: string; };

	/**
	 * オブジェクトを生成するpublicメソッドです。
	 * @param name プロジェクト名
	 * @param desc プロジェクトの説明
	 * @return Projectまたはその派生クラス オブジェクトの配列
	 */
	create(name: string, desc: string): Project[] {
		return this.factoryMethod(name, desc);
	}
}