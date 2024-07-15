
describe("查看常见的匹配器", function() {
	// it 代表一个测试用例
	it("相等条件", () => {
		// {a: 1, b: 2}
		expect(1+1).toBe(2)
		expect({}).toEqual({})
		expect(null).toBeNull()
		expect(true).toBeTruthy() // 如果这个值存在 就是真的
		expect('ok').toBeTruthy() // 如果这个值存在 就是真的
	})

	// 说明这个文件 只测试这个
	// it.only("不相等关系", () => {
	// 	expect(1+1).not.toBe(1)
	// 	expect(1+1).toBeLessThan(4)
	// 	expect(1+1).toBeGreaterThan(1)
	// 	expect(1+1).toBeGreaterThanOrEqual(1)
	// })

	it("判断包含关系", () => {
		expect("apple").toContain("p")
		expect("apple").toMatch("pl")
		expect("apple").toMatch(/pp/) // match 可以写正则
	})
})
/*
jest 可以进行配置 哪些文件变化了 只测试文件变化的

	只监控变化的文件
		jest默认是每次完成后就关闭了
			jest --watchAll 该进程就不会停


*/