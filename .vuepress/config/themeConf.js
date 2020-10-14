const { getSidebar } = require("./../../bin/sidebar");

module.exports = {
    repo: "dongyuanxin/blog",
    navbar: true,
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "更新于",
    nav: [
        {
            text: '更新日志',
            link: '/changelog/'
        },
        {
            text: "笔记归档",
            link: "/notes/"
        },
        {
            text: "前端图谱",
            link: "/frontend/"
        },
        {
            text: "算法题解",
            link: "/algorithm/"
        }
    ],
    sidebar: getSidebar(),
    searchMaxSuggestions: 15
};
