import {
getList,
getData,
getUrl
} from "../5.ajax.js"


describe("测试是否可以正常的获取数据", () => {
	it("测试 getList", async () => {
		const list = await getList()

		expect(list).toEqual([1, 2, 3])
	})
})