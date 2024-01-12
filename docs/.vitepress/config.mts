import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "花椒叶の煎饼",
    description: "blog ",
    base: "/",
    srcDir: ".",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: '归纳', link: '/theme/'},
            {text: '前端', link: '/front-end/'},
            {text: 'Java', link: '/java/'},
            {text: '算法', link: '/algorithm/'},
            {text: '设计模式', link: '/design-pattern/'},
        ],
        sidebar: {
            '/front-end/': [
                {
                    text: 'HTML',
                    items: [
                        {text: 'HTML', link: '/front-end/javascript/basic/basic'}
                    ],
                    collapsed: true
                },
                {
                    text: 'CSS',
                    items: [
                        {text: 'CSS', link: '/front-end/javascript/basic/basic'}
                    ],
                    collapsed: true
                },
                {
                    text: 'JS 基础',
                    items: [
                        {text: 'JS 基础', link: '/front-end/javascript/basic/basic'}
                    ],
                    collapsed: true
                },
                {
                    text: 'ES6',
                    items: [
                        {text: 'ES6 介绍', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 环境搭建', link: '/front-end/javascript/es6/es6-setup'},
                        {text: 'ES6 let 与 const', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 解构赋值', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 Symbol', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 Map 与 Set', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 Reflect 与 Proxy', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 字符串', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 数值', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 对象', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 数组', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 函数', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 Class 类', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 Promise 对象', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 Generator 函数', link: '/front-end/javascript/es6/es6'},
                        {text: 'ES6 async 函数', link: '/front-end/javascript/es6/es6'},
                    ],
                    collapsed: true
                },
                {
                    text: 'Vue',
                    items: [
                        {text: 'Vue', link: '/front-end/javascript/basic/basic'}
                    ],
                    collapsed: true
                },
                {
                    text: 'React',
                    items: [
                        {text: 'React', link: '/front-end/javascript/basic/basic'}
                    ],
                    collapsed: true
                },
                {
                    text: 'Nodejs',
                    items: [
                        {text: 'React', link: '/front-end/javascript/basic/basic'}
                    ],
                    collapsed: true
                },
                {
                    text: 'Electron',
                    items: [
                        {text: 'React', link: '/front-end/javascript/basic/basic'}
                    ],
                    collapsed: true
                },
            ],
            '/java/': [
                {
                    text: 'Java 基础',
                    items: [
                        {text: 'Java 介绍', link: '/java/basic/hello-world'},
                        {text: 'Hello World', link: '/java/basic/hello-world'},
                        {text: '注释', link: '/java/basic/hello-world'},
                        {text: '模块', link: '/java/basic/hello-world'},
                        {text: '类型', link: '/java/basic/hello-world'},
                        {text: '变量与常量', link: '/java/basic/hello-world'},
                        {text: '关键字', link: '/java/basic/hello-world'},
                        {text: '操作符', link: '/java/basic/hello-world'},
                        {text: '表达式', link: '/java/basic/hello-world'},
                        {text: '语句', link: '/java/basic/hello-world'},
                        {text: '枚举', link: '/java/basic/hello-world'},
                        {text: '异常', link: '/java/basic/hello-world'},
                        {text: '数组', link: '/java/basic/hello-world'},
                        {text: '字符串', link: '/java/basic/hello-world'},
                        {text: '集合', link: '/java/basic/hello-world'},
                        {text: 'IO', link: '/java/basic/io'},
                        {text: 'Stream 流', link: '/java/basic/io'},
                        {text: '常用 API', link: '/java/basic/io'},
                        {text: '新特性', link: '/java/basic/io'},
                        {text: '正则表达式', link: '/java/basic/io'},
                        {text: '函数式编程', link: '/java/basic/hello-world'},
                        {text: '泛型', link: '/java/basic/hello-world'},
                        {text: '反射', link: '/java/basic/hello-world'},
                        {text: '注解', link: '/java/basic/hello-world'},
                        {text: '封装', link: '/java/basic/hello-world'},
                        {text: '继承', link: '/java/basic/hello-world'},
                        {text: '多态', link: '/java/basic/hello-world'},
                        {text: '网络编程', link: '/java/basic/io'},
                        {text: '多线程', link: '/java/basic/io'},
                        {text: '单元测试', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: 'JVM',
                    items: [
                        {text: 'JVM 简介', link: '/java/basic/hello-world'},
                        {text: 'Java 虚拟机的组成', link: '/java/basic/hello-world'},
                        {text: '字节码文件', link: '/java/basic/hello-world'},
                        {text: '类的生命周期', link: '/java/basic/hello-world'},
                        {text: '类加载器', link: '/java/basic/hello-world'},
                        {text: '运行时数据区', link: '/java/basic/hello-world'},
                        {text: '自动垃圾回收', link: '/java/basic/hello-world'},
                    ],
                    collapsed: true
                },
                {
                    text: 'Java Web',
                    items: [
                        {text: 'HTTP 请求', link: '/java/basic/hello-world'},
                        {text: 'Tomcat', link: '/java/basic/io'},
                        {text: 'Servlet', link: '/java/basic/io'},
                        {text: 'Request', link: '/java/basic/io'},
                        {text: 'Response', link: '/java/basic/io'},
                        {text: 'JSP', link: '/java/basic/io'},
                        {text: 'Cookie', link: '/java/basic/io'},
                        {text: 'Session', link: '/java/basic/io'},
                        {text: 'Filter', link: '/java/basic/io'},
                        {text: 'Lister', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: 'Spring',
                    items: [
                        {text: 'Spring 介绍', link: '/java/basic/hello-world'},
                        {text: 'Spring 系统架构', link: '/java/basic/hello-world'},
                        {text: 'Spring IoC', link: '/java/basic/hello-world'},
                        {text: 'Spring DI', link: '/java/basic/hello-world'},
                        {text: 'Bean 基础配置', link: '/java/basic/hello-world'},
                        {text: 'Bean 实例化', link: '/java/basic/hello-world'},
                        {text: 'Bean 生命周期', link: '/java/basic/hello-world'},
                        {text: 'Spring 整合 MyBatis', link: '/java/basic/hello-world'},
                        {text: 'Spring 整合 JUnit', link: '/java/basic/hello-world'},
                        {text: 'Spring AOP', link: '/java/basic/hello-world'},
                        {text: 'Spring 事务', link: '/java/basic/hello-world'},
                        {text: 'SpringMVC', link: '/java/basic/hello-world'},
                        {text: 'SSM 整合', link: '/java/basic/hello-world'},

                    ],
                    collapsed: true
                },
                {
                    text: 'Spring Boot',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: 'MySQL',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: 'MyBatis',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: 'MyBatisPlus',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: 'Redis',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: 'Maven',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: 'Docker',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: '项目',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
            ],
            '/algorithm/': [
                {
                    text: '数据结构',
                    items: [
                        {text: '数组', link: '/java/basic/hello-world'},
                        {text: '链表', link: '/java/basic/hello-world'},
                        {text: '列表', link: '/java/basic/hello-world'},
                        {text: '栈', link: '/java/basic/hello-world'},
                        {text: '队列', link: '/java/basic/hello-world'},
                        {text: '哈希表', link: '/java/basic/hello-world'},
                        {text: '树', link: '/java/basic/hello-world'},
                        {text: '堆', link: '/java/basic/hello-world'},
                        {text: '图', link: '/java/basic/hello-world'},
                    ],
                    collapsed: true
                },
                {
                    text: '算法',
                    items: [
                        {text: '复杂度分析', link: '/java/basic/hello-world'},
                        {text: '搜索', link: '/java/basic/hello-world'},
                        {text: '排序', link: '/java/basic/hello-world'},
                        {text: '分治', link: '/java/basic/hello-world'},
                        {text: '回溯', link: '/java/basic/hello-world'},
                        {text: '动态规划', link: '/java/basic/hello-world'},
                        {text: '贪心', link: '/java/basic/hello-world'},
                    ],
                    collapsed: true
                },
                {
                    text: 'LeetCode',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },


            ],
            '/design-pattern/':[
                {
                    text: 'UML',
                    items: [
                        {text: 'UML', link: '/java/basic/hello-world'},
                    ],
                    collapsed: true
                },
                {
                    text: '创建型模式',
                    items: [
                        {text: '工厂方法', link: '/java/basic/hello-world'},
                        {text: '抽象工厂', link: '/java/basic/hello-world'},
                        {text: '生成器', link: '/java/basic/hello-world'},
                        {text: '原型', link: '/java/basic/hello-world'},
                        {text: '单例', link: '/java/basic/hello-world'},

                    ],
                    collapsed: true
                },
                {
                    text: '结构型模式',
                    items: [
                        {text: '适配器', link: '/java/basic/hello-world'},
                        {text: '桥接', link: '/java/basic/hello-world'},
                        {text: '组合', link: '/java/basic/hello-world'},
                        {text: '装饰', link: '/java/basic/hello-world'},
                        {text: '外观', link: '/java/basic/hello-world'},
                        {text: '享元', link: '/java/basic/hello-world'},
                        {text: '代理', link: '/java/basic/hello-world'},
                    ],
                    collapsed: true
                },
                {
                    text: '行为模式',
                    items: [
                        {text: '责任链', link: '/java/basic/hello-world'},
                        {text: '命令', link: '/java/basic/hello-world'},
                        {text: '迭代器', link: '/java/basic/hello-world'},
                        {text: '中介者', link: '/java/basic/hello-world'},
                        {text: '备忘录', link: '/java/basic/hello-world'},
                        {text: '观察者', link: '/java/basic/hello-world'},
                        {text: '状态', link: '/java/basic/hello-world'},
                        {text: '策略', link: '/java/basic/hello-world'},
                        {text: '模板方法', link: '/java/basic/hello-world'},
                        {text: '访问者', link: '/java/basic/hello-world'},

                    ],
                    collapsed: true
                },
            ]
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        search: {
            provider: 'local'
        }
    },

})
