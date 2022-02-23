import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const collapsed = ref(true);
  const toggleSidebar = () => (collapsed.value = !collapsed.value)

  const SIDEBAR_WIDTH = 90
  const SIDEBAR_WIDTH_COLLAPSED = 30

  const sidebarWidth = computed(
      () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
  )
  return { collapsed, toggleSidebar, sidebarWidth, SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED }
})
 