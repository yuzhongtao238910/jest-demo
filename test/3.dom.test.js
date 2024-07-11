import {
	removeNode
} from "../3.dom.js" // es6 -> es5

describe("测试dom库", function() {
	it("测试节点能否被删除", () => {
		// jest js-dom 在node环境下可以模拟一套dom结构

		// 1- 先创建一个节点扔到页面之中，调用删除方法 再去看这个节点是否消失了
		let div = document.createElement("div")
		div.id = "parent"
		document.body.appendChild(div)


		let ele1 = document.getElementById("parent")

		expect(ele1).not.toBeNull() // 说明放到页面之中了


		removeNode(ele1)

		// 这个只是模拟的dom环境，都没有dom映射 所以需要在取一遍
		let ele2 = document.getElementById("parent")

		expect(ele2).toBeNull() // 说明放到页面之中了
	})
})