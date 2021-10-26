/// <reference types="cypress" /> 


it('Todos test', function() {

    cy.visit('https://todomvc.com/examples/react/#/')


})

it('To add items to Todos app', () =>  {
    //creating variables to store the Todos list itms.
    const Item1 ='Schedule sprint planning meeting',

    Item2 ='schedule Daily stand ups',
    
    Item3='Create test plan and test design documents',
    
    Item4='Conduct retrospectives and test analysis',
    
    Item5='Share lessons learnt with other teams'
    //getting the element and adding the list items one by one
    cy.get('.new-todo').type(`${Item1}{enter}`).type(`${Item2}{enter}`)
    .type(`${Item3}{enter}`)
    .type(`${Item4}{enter}`)
    .type(`${Item5}{enter}`)
    cy.get('.todo-list li')
    //asserting to check the number of items (length) in the list 
    .should('have.length', 5)
    }
)
    it( ('select an item and make it completed'),function() {
        //cy.contains('Schedule sprint planning meeting').parent().find('input[type=checkbox]').check()
        cy.get('.todo-list li').first().find('input[type=checkbox]').check()

    })

    
    it( ('select items and make them completed'),function() {
       // cy.contains('Schedule sprint planning meeting').parent().find('input[type=checkbox]').check()
        cy.contains('Create test plan and test design documents').parent().find('input[type=checkbox]').check()
        //cy.get('.completed').should('have.css', 'text-decoration', 'line-through')
        //cy.get('.completed').should('have.css', 'color', '#d9d9d9')
        
    })
    
    it( ('Test  the "Active" filter'),function() {
        cy.get('[data-reactid=".0.2.1.2"] > a').click().should('not.have.text', 'Schedule sprint planning meeting','Create test plan and test design documents')
        cy.get('.todo-list li').should('have.length',3)

    })

    it( ('Test the "completed" filter'),function() {
        cy.get('[data-reactid=".0.2.1.4"] > a').click()
        cy.get('.todo-list li').should('have.length',2)

    })

    it( ('Test the "All" filter'),function() {
        cy.get('[data-reactid=".0.2.1.0"] > a').click()
        cy.get('.todo-list li').should('have.length',5)
    })

    it( ('Test the "delete" button'),function() {

        cy.contains('Share lessons learnt with other teams').parent().find ('.destroy').click({ force: true }) 
        cy.get('.todo-list li').should('have.length',4)})


    it(('Test the "clear completed" button'), function (){

            cy.get('.clear-completed') .click() 
            cy.get('.todo-list')
            .should('not.have.text', 'Share lessons learnt with other teams', 'Create test plan and test design documents')})
    
