import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  public isLogo: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Papis Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custome Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custome'
          },
          {
            label: 'domSeguro and Password',
            icon: 'pi pi-fw pi-globe',
            routerLink: 'customePipe'
          }
        ]
      }
    ]
  }
}

