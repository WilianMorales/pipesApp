import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: []
})
export class BasicsPageComponent{

  nameLower: string = 'willian morales';
  nameUpper: string = 'WILLIAN MORALES';
  fullName: string = 'wIlLIan MoRAleS';

  customDate: Date = new Date(); // el dia de hoy

}
