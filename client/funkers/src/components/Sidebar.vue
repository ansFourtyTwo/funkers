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
            <font-awesome-icon :icon="['fas', 'angle-double-left']" />
        </span>
        <br>
        <SidebarLink to="/" icon="home">Home</SidebarLink>
        <SidebarLink to="/about" icon="info-circle">About</SidebarLink>
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