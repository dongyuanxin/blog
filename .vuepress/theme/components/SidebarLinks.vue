<template>
    <ul v-if="items.length" class="sidebar-links">
        <li v-for="(item, i) in items" :key="i">
            <SidebarGroup
                v-if="item.type === 'group'"
                :item="item"
                :open="openGroupIndexes.includes(`${depth}-${i}`)"
                :collapsable="item.collapsable || item.collapsible"
                :depth="depth"
                @toggle="toggleGroup(`${depth}-${i}`)"
            />
            <SidebarLink v-else :sidebar-depth="sidebarDepth" :item="item" />
        </li>
    </ul>
</template>

<script>
import SidebarGroup from "@theme/components/SidebarGroup.vue";
import SidebarLink from "@theme/components/SidebarLink.vue";
import { isActive } from "./SidebarGroup";
export default {
    name: "SidebarLinks",
    components: { SidebarGroup, SidebarLink },
    props: [
        "items",
        "depth", // depth of current sidebar links
        "sidebarDepth", // depth of headers to be extracted
        "initialOpenGroupIndex"
    ],
    data() {
        return {
            // openGroupIndex: this.initialOpenGroupIndex || 0,
            openGroupIndexes: [this.initialOpenGroupIndex || 0],
            storageKey: "vuepress-default-sidebar"
        };
    },
    watch: {
        $route() {
            this.refreshIndex();
        }
    },
    created() {
        // this.refreshIndex();
        this.loadStorage();
    },
    methods: {
        refreshIndex() {
            // const index = resolveOpenGroupIndex(this.$route, this.items);
            // if (index > -1) {
            //     this.openGroupIndex = index;
            // }
        },
        loadStorage() {
            const content = localStorage.getItem(this.storageKey) || "";
            this.openGroupIndexes = content.split(",");
        },
        saveStorage() {
            const content = this.openGroupIndexes.join(",");
            localStorage.setItem(this.storageKey, content);
        },
        toggleGroup(index) {
            if (typeof index !== "string") {
                return;
            }
            const indexOf = this.openGroupIndexes.indexOf(index);
            const copy = [...this.openGroupIndexes];
            if (indexOf === -1) {
                copy.push(index);
            } else {
                copy.splice(indexOf, 1);
            }
            this.openGroupIndexes = copy;
            this.saveStorage();
        },
        isActive(page) {
            return isActive(this.$route, page.regularPath);
        }
    }
};
function resolveOpenGroupIndex(route, items) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (descendantIsActive(route, item)) {
            return i;
        }
    }
    return -1;
}
function descendantIsActive(route, item) {
    if (item.type === "group") {
        return item.children.some(child => {
            if (child.type === "group") {
                return descendantIsActive(route, child);
            } else {
                return child.type === "page" && isActive(route, child.path);
            }
        });
    }
    return false;
}
</script>