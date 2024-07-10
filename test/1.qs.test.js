// 默认jest 会查找。当前的目录下面的以 test.js 为结尾的文件
import {
	parser,
	stringify
} from "../1.qs.js"

// 做一个测试，测试里面有两个案例

describe("测试qs库是否符合规范", function(params) {
	it("测试parser是否合法", () => {
		expect(parser(`a=1&b=2`)).to
	})


	it("测试stringify是否合法", () => {})
})