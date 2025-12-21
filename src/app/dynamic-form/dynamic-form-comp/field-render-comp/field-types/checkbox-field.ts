import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';

import { CheckboxModule } from 'primeng/checkbox';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-checkbox-field',
  imports: [CheckboxModule, Field],
  template: `
    @for (option of field().options; track option.key) {
    <div class="flex items-center">
      <p-checkbox
        [inputId]="option.key"
        [value]="option.key"
        [field]="fieldName()"
        [binary]="field().checkBoxbinary ?? false"
      />
      <label [for]="option.key" [class]="field().labelStyleClass ?? 'ml-2'">
        {{ option.name }}
      </label>
    </div>
    }
  `,
})
export class CheckboxField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<any>();
}
