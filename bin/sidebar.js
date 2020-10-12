const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports.getSidebar = getSidebar;

const ROOT_PATH = path.resolve(process.cwd(), "notes");

function getSidebar() {
    const toc = [];
    scan(ROOT_PATH, toc);
    return {
        "/notes/": toc
    };
}

function scan(parentPath, toc = []) {
    const folders = fs.readdirSync(parentPath);
    folders.sort((a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    });

    for (const folderName of folders) {
        if (!checkValid(folderName)) {
            continue;
        }

        const folderPath = path.resolve(parentPath, folderName);
        const fileStat = fs.statSync(folderPath);
        if (fileStat.isFile() && folderName.endsWith(".md")) {
            toc.push({
                title: folderName.replace(/^\d+\./, "").replace(/\.md$/, ""),
                collapsable: true,
                sidebarDepth: 0,
                path: `/notes/${path.relative(ROOT_PATH, folderPath)}`,
                children: []
            });
        } else if (fileStat.isDirectory()) {
            const subToc = {
                title: folderName.replace(/^\d+\./, ""),
                collapsable: true,
                sidebarDepth: 0,
                children: []
            };
            const existReadme = fs.existsSync(
                path.join(folderPath, "readme.md")
            );
            if (existReadme) {
                subToc.path = `/notes/${path.relative(ROOT_PATH, folderPath)}/`;
            }
            scan(folderPath, subToc.children);
            if (subToc.children.length > 0 && existReadme) {
                subToc.path = getPermalink(path.join(folderPath, "readme.md"));
            }
            toc.push(subToc);
        }
    }
}

function checkValid(name = "") {
    return /^\d+\./.test(name);
}

function getPermalink(filepath) {
    if (!filepath) {
        return;
    }

    const content = fs.readFileSync(filepath).toString("utf8");
    try {
        const yamlContent = /---\n((.|\n)*?)\n---\n/.exec(content)[1];
        const doc = yaml.safeLoad(yamlContent);
        if (doc) {
            return "/" + doc.permalink + "/";
        }
    } catch (error) {
        console.log("getPermalink error", filepath, error.message);
    }
    return;
}
