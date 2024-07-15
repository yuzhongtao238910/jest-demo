import axios from "axios"
export function getList() {
	return axios.get("/list")
}


export function getData() {
	return axios.post("/data")
}


export function getUrl() {
	return axios({
		url: "/url"
	})
}

// 做单元测试，一般情况下是不测试接口的 直接mock掉接口的

// 1- 匹配器
// 2- describe it describe 也是可以嵌套的
// 3- 异步测试 done async + await
// 4- fake timer mock接口 mock方法 jest.fn模拟一个假的方法
// 5- 覆盖率 测试代码的覆盖范围
// 产生一个jest的配置文件 npx jest --init jest --coverage