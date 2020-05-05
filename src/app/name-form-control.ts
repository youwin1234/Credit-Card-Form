import { FormControl } from '@angular/forms';

export class NameFormControl extends FormControl{
    setValue(value: string | null, options: any) {
        if(!value){
            super.setValue('', {...options, emitModelToViewChange:true});
            return;
        }
        if(value.match(/[^a-zA-Z |\/]/gi)){
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return;
        }
        if(value.length>26){
            super.setValue(this.value, {...options, emitModelToViewChange:true});
            return;
        }
        super.setValue(value, {...options, emitModelToViewChange: true});
    }
}
