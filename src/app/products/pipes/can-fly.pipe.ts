import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'si vuela' | 'no vuela' {
    return value? 'si vuela' : 'no vuela';
  }
}
