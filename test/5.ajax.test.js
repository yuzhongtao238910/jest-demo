import {
	getList,
	getData,
	getUrl
} from "../5.ajax.js"

// 告诉他需要用假的文件了
// 相当于在这里使用了 __mocks__之中的同名的文件
jest.mock("../5.ajax.js")


describe("测试是否可以正常的获取数据", () => {
	it("测试 getList", async () => {
		const list = await getList()

		expect(list).toEqual([1, 2, 3, 4])
	})
})