import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';

import { CheckboxModule } from 'primeng/checkbox';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-checkbox-field',
  imports: [CheckboxModule, Field],
  template: `
    @let gridClass = field().layoutGrid?.direction === 'row' ? 'grid-flow-row' : 'grid-flow-col overflow-x-auto gap-x-2';

    <div [class]="'grid ' + gridClass + ' grid-cols-' + (field().layoutGrid?.cols ?? 1)">
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
    </div>
  `,
})
export class CheckboxField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<any>();
}
