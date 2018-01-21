import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'slice'
})
export class SlicePipe implements PipeTransform{

    transform(value: string, num: number) {
        console.log(value);
        let returnValue = '';
        if (value) {
            if (value.length < num) {
                returnValue = value;
            } else {
                returnValue = value.slice(0, num) + '...';
            }
        }
        return returnValue;
    }

}
