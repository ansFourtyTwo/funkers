import { mount } from '@cypress/vue'
import { setActivePinia, createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import Sidebar from './Sidebar.vue'
import HomeView from '../views/HomeView.vue'
import SidebarLink from './SidebarLink.vue';
import { useSidebarStore } from '../stores/sidebar'

const LINK_TO = "/test/location"
const LINK_ICON = "test-icon"
const LINK_TEXT = "Test Button"


describe('SidebarLink compoment', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
        mount(SidebarLink, { 
            props: {
                to: LINK_TO,
                icon: LINK_ICON
            },
            slots: {
                default: {
                    render: () => LINK_TEXT
                }
            }
        })
    })

    it('has a router link element', () => {
        cy.get('router-link').should('exist').should('have.attr', 'to')
    })
    it('points to the rigth location', () => {
        cy.get(`router-link[to="${LINK_TO}"]`).should('exist')
    })
    it('has an icon in the link', () => {
        cy.get('router-link > font-awesome-icon').should('exist').should('have.attr', 'icon')
    })
    it('Should use the correct icon', () => {
        cy.get(`font-awesome-icon[icon="fas,${LINK_ICON}"]`).should('exist')
    })
    it('does not show a text beside the icon when sidebar is collapsed', () => {
        cy.get('span.link-text').should('not.exist')
    })
    it('shows correct name when sidebar is expanded', () => {
        const sidebarStore = useSidebarStore()
        sidebarStore.toggleSidebar()
        cy.get('span.link-text').should('exist').contains(LINK_TEXT)
    })
});