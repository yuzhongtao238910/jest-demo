import {
	getData,
	getDataPromise
} from "../4.async.js"
// 默认是串行测试，一个一个的测试
// 需要将异步定时器mock掉
/*
异步的时间太长了：
	1- 真函数不太靠谱，使用假函数，
		jest.useFakeTimers()

*/

// 我创建出来一个模拟时间
// jest.useFakeTimers()



describe("测试异步获取数据是否可以", () => {
	// jest默认不支持测试异步 / 回调 ，可以在参数之中加一个done
	it("测试 getData", () => {
		// jest.runAllTimers()
		// // jest.advanceTimersByTime(1000) // 让时间快进1s
		getData(function(data) {
			expect(data).toEqual({
				name: "apple"
			})
			// done() // 打印最终的测试结果
		})
		// jest.advanceTimersByTime(3000) // 让时间快进1s  针对 setInterval 来处理
		// jest.runAllTimers() // 可以针对 setTimeout 来处理


		// 针对advanceTimersByTime处理 setInterval 里面的时间的问题
		// jest.runOnlyPendingTimers() // 只运行当前等待的timer

		// let fn = jest.fn() // 模拟一个fn函数
		// getData(fn)
		// jest.runAllTimers() // 运行所有的定时
		// expect(fn).toHaveBeenCalled()
	})

	it("测试 getDataPromise-1", (done) => {

		getDataPromise().then(data => {
			expect(data).toEqual({
				name: "apple"
			})
			done()
		})
		// jest.runAllTimers() // 可以针对 setTimeout 来处理
	})

	// promise 可以采用done的方式 也可以采用async await的方式
	// it("测试 getDataPromise-2", async () => {
	// 	const data = await getDataPromise()
	// 	expect(data).toEqual({
	// 		name: "apple"
	// 	})
	// })




	// 自己mock一个函数
})
// 接口到底要不要测试？？？

// Vue.extend().$mount()