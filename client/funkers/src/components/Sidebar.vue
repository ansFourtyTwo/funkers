<script lang="ts">
import { defineComponent } from 'vue'
import { useSidebarStore } from '../stores/sidebar'
import SidebarLink from './SidebarLink.vue'

export default defineComponent({
    name: "Sidebar",
    component: {SidebarLink},
    setup() {
        const sidebarStore = useSidebarStore();
        return { sidebarStore };
    },
    components: { SidebarLink }
})
</script>

<template>
    <div id="sidebar" :style="{ width: sidebarStore.sidebarWidth }">
        <span 
            class="collapse-icon"
            :class="{ 'rotate-180': sidebarStore.collapsed }"
            @click="sidebarStore.toggleSidebar"
        >
            <QIcon name="fas fa-angle-double-left"></QIcon>
        </span>
        <br>
        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/about" icon="fas fa-info-circle">About</SidebarLink>
        <SidebarLink to="/coding" icon="bi-code-slash">Code</SidebarLink>
        <SidebarLink to="/food" icon="r_restaurant">Code</SidebarLink>
        <SidebarLink to="/tennis" icon="mdi-tennis">Tennis</SidebarLink>
        <SidebarLink to="/poker" icon="mdi-cards-playing-spade">Poker</SidebarLink>
    </div>
</template>

<style> 
:root {
    --sidebar-bg-color: #1e524b;
    --sidebar-item-hover: #ffffff25;
    --sidebar-item-active: #ffffff0e;
    --sidebar-item-click: #00000015;
}
</style>

<style scoped>
#sidebar {
    color: #ffffff;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0.5em;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;

    transition: 0.5s ease;

    display: flex;
    flex-direction: column;
}
.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.4em;
    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>