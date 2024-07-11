// 异步代码的测试

// 测试3秒后返回结果

export function getData(cb) { // 异步api
	setTimeout(() => {
		cb({name: "apple"})
	}, 2000)
}

export function getDataPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({name: "apple"})
		}, 3000)
	})
}