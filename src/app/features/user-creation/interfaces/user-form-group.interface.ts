import { FormControl } from "@angular/forms";

export interface UserFormGroup {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  dateExpiration: FormControl<Date | null>;
  repeatPassword: FormControl<string | null>;
  enabled: FormControl<boolean | null>;
}
