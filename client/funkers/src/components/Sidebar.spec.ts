import { mount } from '@cypress/vue'
import Sidebar from './Sidebar.vue'
import { setActivePinia, createPinia } from 'pinia'
import { useSidebarStore } from '../stores/sidebar'

describe('The sidebar', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
        mount(Sidebar)   
    })
    it('has an icon to collapse and expand the sidebar', () => {
        cy.get('.collapse-icon')
            .should('exist')
    })
    it('should be collapsed initially', () => {
        const sidebarStore = useSidebarStore()
        const expected_width = sidebarStore.SIDEBAR_WIDTH_COLLAPSED
        cy.get('#sidebar')
            .should('have.css', 'width', `${expected_width}px`)
    })
    it('has toggle button to show/hide sidebar', () => {
        cy.get('span.collapse-icon')
            .should('exist')
            .should('have.class', 'rotate-180', 'false')
    })
    it('should expand clicking the toogle button', () => {
        const sidebarStore = useSidebarStore()
        const expected_width = sidebarStore.SIDEBAR_WIDTH
        cy.get('span.collapse-icon').click()
        cy.get('#sidebar')
            .should('have.css', 'width', `${expected_width}px`)
    })
    it('should be collapse after clicking the toggle button twice', () => {
        const sidebarStore = useSidebarStore()
        const expected_width = sidebarStore.SIDEBAR_WIDTH_COLLAPSED
        cy.get('span.collapse-icon').click().click()
        cy.get('#sidebar')
            .should('have.css', 'width', `${expected_width}px`)
    })
  });