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
            {text: 'Examples', link: '/theme/'},
            {
                text: 'Java',
                items: [
                    {text: 'Java 基础', link: '/java/basic/'},
                    {text: 'Java Web', link: '/java/web/'},
                    {text: 'Spring', link: '/java/spring/'},
                    {text: 'Spring Boot', link: '/java/spring-boot/'}
                ]
            },
            {
                text: '前端',
                items: [
                    {text: 'JavaScript', link: '/front-end/javascript/'}
                ]
            },
            {text: '算法', link: '/algorithm/'},
            {text: '设计模式', link: '/design-pattern/'},
        ],

        sidebar: {
            '/theme/': [
                {
                    text: 'Examples',
                    items: [
                        {text: 'Markdown Examples', link: '/theme/'},
                        {text: 'Runtime API Examples', link: '/theme/api-examples'}
                    ]
                }
            ],
            '/java/basic': [
                {
                    text: 'Java 基础',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                },
                {
                    text: 'JVM',
                    items: [
                        {text: ' Hello World', link: '/java/basic/hello-world'},
                        {text: ' IO', link: '/java/basic/io'},
                    ],
                    collapsed: true
                }
            ],
            '/front-end/javascript/': [
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
                }
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
