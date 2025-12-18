import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { CheckboxModule } from 'primeng/checkbox';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-checkbox-field',
  imports: [CheckboxModule, Field],
  template: `
    <div [class]="field().fieldStyleClass ?? 'flex gap-x-2 overflow-auto'">
      @for (option of field().options; track option.key) {
      <p-checkbox
        [inputId]="option.key"
        [value]="option.key"
        [field]="fieldName()"
        [binary]="field().checkBoxbinary ?? false"
      />
      <label [for]="option.key" [class]="field().labelStyleClass ?? 'ml-2'">
        {{ option.name }}
      </label>
      }
    </div>
  `,
})
export class CheckboxField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<FieldTree<any>>();
}
