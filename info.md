## 前端自动化测试

- 一般情况下写单元测试的时间，是写业务时间的二倍
- 类库，组件库，核心逻辑，都是要求单元测试的 保证程序的健壮性，每次迭代的时候可以保证不破坏原有的逻辑



## 为什么要有测试

- 更新功能的时候不会破坏原有的逻辑
- 迭代的时候不方便阅读别人的代码，如果别人把方法写了一个测试用例 parse a=1&b=2.  ===> {a:1, b: 2} mergeOptions，也就是有了测试用例相互比较好看
- 写单元测试相当于给方法内置了一个文档，源码之中的工具方法
- 如果写单元测试，好处就是测试自己的代码，尽量不要给自己挖坑，代码的质量会比较高



## 前端的单元测试

- 黑盒测试，不知道功能怎么写出来，只是看结果不满足逻辑
- 白盒测试，知道代码是如何实现，知道里面的逻辑是怎么实现的
- 单元测试，多一些，测试的范围是一个单元，比如说一个函数，一个组件
- 集成测试，多一些，多个单元组合的就是集成测试
  - 一个功能由添加/删除/编辑组成，单个测方法就是单元
  - 所有的在一起就是集成测试，根据用户的行为多个组合在一起
- 端到端测试e2e
  - 登陆。模拟程序是否运行正常



## TDD BDD

- BDD 行为测试，先开发功能，功能开发完毕后，再去测试，占绝大多数 Behavior

- TDD 测试驱动开发，先写测试用例，先后预期，在填坑 Test

## 测试框架

- Karma 提供跨浏览器测试的能力，把项目跑在不同的浏览器之中，样式/显示是否正常
- Mocha 只提供一个自动化测试的框架， 断言，断言库：asset(1==1, "出错了")
- Jest mocha+jsdom jsdom 就是node环境模拟dom，但是无法测试样式，自带测试的覆盖率，100行代码，我们只测试了90行，那就是测试覆盖率90%，jest是一个独立的框架，
  - 优点0配置
- vue/test-utils 提供了丰富的api使用，而且可以和Karma一起使用



















































