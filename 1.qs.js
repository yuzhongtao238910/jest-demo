// qs  可以转换字符串为 对象 ?a=1&b=2. => {a: 1, b: 2}

// {a:1, b:2} => a=1&b=2


export function parser(str) {
	const obj = {}

	str.replace(/([^&=?])=([^&=?])+/g, function() {
		let value = Number(arguments[2])
		if (isNaN(value)) {
			obj[arguments[1]] = arguments[2]
		} else {
			obj[arguments[1]] = value
		}
	})
	return obj
}
export function stringify(obj) {
	const arr = []
	for (let key in obj) {
		arr.push(`${key}=${obj[key]}`)
	}
	return arr.join("&")
}
/*
1- 为什么要测试 可以保留测试的代码，统一存放测试的代码，开发的时候可以直接看测试就可以了
2- 代码会尽量的简洁 多个功能，每个功能都会单独写


jest来测试：
	jest - 0配置
*/


// console.log(parser("a=1&b=2")).  => {a:1, b: 2}

// console.log(stringify({
// 	a: 1,
// 	b: 2
// })) // {a:1, b: 2} => a=1&b=2

























