import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: []
})
export class UncommonPageComponent {

  // i18nSellect
  public name: string = 'Willian';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Nicole';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Jose', 'Miguel', 'Nicole', 'Jhon'];
  public clientsMap = {
    '=0': 'no tenemos nínguna persona esperando.',
    '=1': 'tenemos una persona esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # personas esperando.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // Slice
  str: string = 'abcdefghij';

  // JsonPipe
  public heroes: Object = [
    {
      name: 'Batman',
      fly: false
    },
    {
      name: 'Superman',
      fly: true,
      powers: [
        'invencibility',
        'heat vision'
      ]
    },
    {
      name: 'Thor',
      fly: true
    }
  ]

  //KeyValue Pípe
  public person = {
    name: 'Willian Morales',
    age: 25,
    addres: 'Trujillo, Perú',
  }

  // Async Pipe
  public myObservableTimer = interval(2000)
    .pipe(
      tap( value => value
      )
    );

    public promiseValue: Promise<string> = new Promise(  (resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data en la promesa');
      }, 3500);
    })

}
