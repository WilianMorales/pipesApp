import { Component } from '@angular/core';

@Component({
  selector: 'app-custome',
  templateUrl: './custome.component.html',
  styles: [
  ]
})
export class CustomeComponent {

  constructor() { }

  public videoUrl = 'https://www.youtube.com/embed/gIw9YjLZRQ8';

  public pass: string = 'Simp98!demo';

  public activar: boolean = true;
}
