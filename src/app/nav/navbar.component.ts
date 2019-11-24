import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [
      `
        @media (max-width: 1200px) {#searchForm {display:none}}
      `
  ]
})
export class NavBar {

    

}