const sidebar = require("./sidebar-auto");

const docsSidebar = {
    "/docs/设计模式手册": [
        {
            title: "创建型模式",
            collapsable: true,
            children: [
                ["01.创建型模式/01.单例模式.md", "单例模式"],
                ["01.创建型模式/02.工厂模式.md", "工厂模式"],
                ["01.创建型模式/03.抽象工厂模式.md", "抽象工厂模式"]
            ]
        },
        {
            title: "结构型模式",
            collapsable: true,
            children: [
                ["02.结构型模式/01.享元模式.md", "享元模式"],
                ["02.结构型模式/02.代理模式.md", "代理模式"],
                ["02.结构型模式/03.桥接模式.md", "桥接模式"],
                ["02.结构型模式/04.组合模式.md", "组合模式"],
                ["02.结构型模式/05.装饰者模式.md", "装饰者模式"],
                ["02.结构型模式/06.适配器模式.md", "适配器模式"]
            ]
        },
        {
            title: "行为型模式",
            collapsable: true,
            children: [
                ["03.行为型模式/01.命令模式.md", "命令模式"],
                ["03.行为型模式/02.备忘录模式.md", "备忘录模式"],
                ["03.行为型模式/03.模板模式.md", "模板模式"],
                ["03.行为型模式/04.状态模式.md", "状态模式"],
                ["03.行为型模式/05.策略模式.md", "策略模式"],
                ["03.行为型模式/06.解释器模式.md", "解释器模式"],
                ["03.行为型模式/07.订阅-发布模式.md", "订阅-发布模式"],
                ["03.行为型模式/08.责任链模式.md", "责任链模式"],
                ["03.行为型模式/09.迭代器模式.md", "迭代器模式"]
            ]
        }
    ]
};

const noteSidebar = {
    "/notes/": [
        {
            title: "02.设计模式",
            collapsable: true,
            sidebarDepth: 0,
            path: "/notes/02.设计模式/",
            children: [
                {
                    title: "1.创建型模式",
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        {
                            title: "3.行为型模型",
                            collapsable: true,
                            sidebarDepth: 0,
                            children: [
                                {
                                    title: "1.策略模式",
                                    collapsable: true,
                                    sidebarDepth: 0,
                                    path:
                                        "/notes/02.设计模式/1.创建型模式/3.行为型模式/1.策略模式/",
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "2.结构型模式",
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        [
                            "02.设计模式/2.结构型模式/1.享元模式/readme.md",
                            "单例模式"
                        ],
                        [
                            "02.设计模式/2.结构型模式/2.代理模式/readme.md",
                            "工厂模式"
                        ]
                    ]
                }
            ]
        }
    ]
};

module.exports = {
    repo: "dongyuanxin/blog",
    navbar: true,
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "更新于",
    nav: [
        {
            text: "前端图谱",
            link: "https://xxoo521.com/frontend/"
        },
        {
            text: "算法题解",
            link: "https://xxoo521.com/algorithm/"
        },
        {
            text: "文章归档",
            link: "https://xxoo521.com/archives/"
        }
    ],
    sidebar: noteSidebar
};
