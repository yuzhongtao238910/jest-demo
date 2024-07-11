// 测试 dom方法

// 测试一个outerHTML 是否ok
// 测试节点是否可以被删除

export function removeNode(node) {
	// 删除节点
	node.parentNode.removeChild(node)
}