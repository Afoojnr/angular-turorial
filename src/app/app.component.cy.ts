// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



describe('AppComponent', () => {
  it('mounts with template', () => {
    cy.mount(AppComponent, {
      imports: [HomeComponent, RouterLink, RouterOutlet],
      // providers: [ ActivatedRoute],
    });
  });
});

// describe('AppComponent', () => {
//   beforeEach(() => {
//     cy.mount(AppComponent);
//   });

// it('should display the logo', () => {
//   cy.get('.brand-logo').should('be.visible');
// });

//   it('should navigate to the home page when logo is clicked', () => {
//     cy.get('.brand-name').click();
//     cy.url().should('eq', 'http://localhost:4200/');
//   });

//   it('should display the content section', () => {
//     cy.get('.content').should('be.visible');
//   });
// });



// describe('AppComponent', () => {

//   it('should display the logo', () => {
//     cy.mount('<app-root></app-root>', {
//       declarations: [AppComponent, HomeComponent],
//     });
//     cy.get('.brand-logo').should('be.visible');
//   });

//   it('should navigate to home component when the logo is clicked', () => {
//     cy.get('.brand-name').click();
//     cy.url().should('include', '/');
//   });

//   it('should display the content section', () => {
//     cy.get('.content').should('be.visible');
//   });
// });
