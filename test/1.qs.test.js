// 默认jest 会查找。当前的目录下面的以 test.js 为结尾的文件
import {
	parser,
	stringify
} from "../1.qs.js" // es6 -> es5
// node 不支持es6 可以用babel转义
// @babel/core @babel/preset-env

// 做一个测试，测试里面有两个案例
// describe可写可不写 它的范围更大
// describe相当于分类 划分不同的类别 如果不写 默认相当于都在最外层使用这个 describe
describe("测试qs库是否符合规范", function() {
	// it 代表一个测试用例
	it("测试parser是否合法", () => {
		// {a: 1, b: 2}
		expect(parser(`a=1&b=2`)).toEqual({
			a: 1,
			b: 2
		})
	})


	it("测试stringify是否合法", () => {
		expect(stringify({a: 1, b: 2})).toBe("a=1&b=2")
	})
})

/*
测试的方法很多，很多种写法 都可以达到效果
匹配器，就是方法 toBe / toEqual

相等 

不等 

是否包含 
*/