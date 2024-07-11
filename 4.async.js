// 异步代码的测试

// 测试3秒后返回结果

export function getData(cb) { // 异步api
	console.log("===")
	// setTimeout(() => {
	// 	console.log("cb")
	// 	cb({name: "apple"})
	// }, 2000)

	setInterval(() => {
		console.log("cb")
		cb({name: "apple"})
	}, 2000)
}

export function getDataPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("promise")
			resolve({name: "apple"})
		}, 2000)
	})
}