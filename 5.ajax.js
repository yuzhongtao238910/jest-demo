import axios from "axios"
export function getList() {
	return axios.get("/list")
}


export function getData() {
	return axios.post("/data")
}


export function getUrl() {
	return axios({
		url: "/data"
	})
}

// 做单元测试，一般情况下是不测试接口的 直接mock掉接口的