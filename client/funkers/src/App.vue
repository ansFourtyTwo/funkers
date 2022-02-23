<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue"
import { RouterView } from 'vue-router'
import { useSidebarStore } from './stores/sidebar'

const sidebarStore = useSidebarStore()
</script>

<template>
    <Sidebar></Sidebar>
    <div id="main" :style="{ 'margin-left': sidebarStore.sidebarWidth  }">
        <div class="content">
            <RouterView />
        </div>
    </div>    
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700;800&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&family=Oswald:wght@200;300;400;500;600;700&display=swap');
</style> 

<style scoped>
* {
 font-weight: 300;
 font-family: 'Josefin sans', sans-serif;
}

#main {
    padding-left: 1.0em;
    transition: 0.5s ease;
}

.content {
    padding: 0.2em;
    color: #434bbd;
    background-color: #d1d1d1;
    border-radius: 0.5em;
    font-weight: 900;
}
</style>
