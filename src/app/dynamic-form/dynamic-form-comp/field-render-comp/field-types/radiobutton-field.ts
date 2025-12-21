import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-radiobutton-field',
  imports: [RadioButtonModule, Field],
  template: `
    @for (option of field().options; track option.key; let i = $index) {
    <div class="flex items-center gap-2">
      <p-radiobutton
        type="radio"
        [inputId]="(field().fieldLabelInputId ?? field().name) + i"
        [field]="fieldName()"
        [value]="option.key"
      />
      <label
        [for]="(field().fieldLabelInputId ?? field().name) + i"
        [class]="field().labelStyleClass ?? 'ml-2'"
      >
        {{ option.name }}
      </label>
    </div>
    }
  `,
})
export class RadiobuttonField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<any>();
}
