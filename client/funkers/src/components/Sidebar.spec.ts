import { mount } from '@cypress/vue'
import Sidebar from './Sidebar.vue'

describe('The sidebar', () => {
    it('has a entry for home', () => {
        mount(Sidebar);
        cy.get('.sidebar-item').contains('Home')  
    });
  });