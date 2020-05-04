import { FormControl } from '@angular/forms';

export class CardNumberFormControl extends FormControl{
    setValue(value: string | null, options: any) {
        if(!value){
            super.setValue('', {...options, emitModelToViewChange:true});
            return;
        }
        if(value.match(/[^0-9|\/]/gi)){
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return;
        }
        if(value.length>16){
            super.setValue(this.value, {...options, emitModelToViewChange:true});
            return;
        }
        super.setValue(value, {...options, emitModelToViewChange: true});
    }
}
