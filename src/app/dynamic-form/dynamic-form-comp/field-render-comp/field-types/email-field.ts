import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { InputTextModule } from 'primeng/inputtext';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-email-field',
  imports: [FloatLabelModule, InputTextModule, Field],
  template: `
    <p-floatlabel [variant]="field().floatlabel ?? 'on'">
      <input
        pInputText
        [id]="field().fieldLabelInputId ?? field().name"
        type="email"
        [field]="fieldName()"
        [class]="field().inputStyleClass"
        [fluid]="field().inputFluid ?? true"
      />

      <label
        [for]="field().fieldLabelInputId ?? field().name"
        [class]="field().labelStyleClass ?? 'ml-2'"
        >{{ field().label }}
      </label>
    </p-floatlabel>
  `,
})
export class EmailField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<any>();
}
