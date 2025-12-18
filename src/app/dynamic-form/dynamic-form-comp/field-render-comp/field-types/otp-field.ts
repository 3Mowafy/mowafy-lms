import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { InputOtpModule } from 'primeng/inputotp';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-otp-field',
  imports: [InputOtpModule, Field],
  template: `
    <div [class]="field().fieldStyleClass ?? 'flex justify-center'">
      <p-inputotp
        [id]="field().fieldLabelInputId ?? field.name"
        [field]="fieldName()"
        [integerOnly]="field().otpIntegerOnly ?? true"
        [length]="field().optLength ?? 4"
      />
    </div>
  `,
})
export class OtpField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<FieldTree<any>>();
}
