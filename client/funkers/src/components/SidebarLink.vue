<script lang="ts">
import { defineComponent } from 'vue'
import { useSidebarStore } from '../stores/sidebar'

export default defineComponent({
    name: 'SidebarLink',
    props: {
        to: { type: String, required: true },
        icon: { type: String, required: true }
    },
    setup() {
        const sidebarStore = useSidebarStore()
        return { sidebarStore }
    }
})
</script>

<template>
    <router-link :to="to" class="link">
        <font-awesome-icon class="link-icon" :icon="['fas', icon]" />
            <Transition name="fade">            
                <span v-if="!sidebarStore.collapsed" class="link-text">
                    <slot></slot>
                </span>
            </Transition>
    </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.link {
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    user-select: none;

    margin: 0.2em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: #ffffff;
    text-decoration: none;
}

.link:hover {
    background-color: var(--sidebar-item-hover);
}

.link:active {
    background-color: var(--sidebar-item-click);
}

.router-link-active {
    background-color: var(--sidebar-item-active);
}

.link-icon {
    padding-right: 0.6em;
    width: 16px;
}

.link-text {
    vertical-align: middle;
    text-align: rigth;
}

</style> 