import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function createDatePickerValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const hasValidDate = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(value);


        return !hasValidDate ? { invalidDate: true }: null;
    }
}
