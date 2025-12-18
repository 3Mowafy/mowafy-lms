import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-text-field',
  imports: [FloatLabelModule, InputTextModule, Field],
  template: `
    <p-floatlabel [variant]="field().floatlabel ?? 'on'">
      <input
        pInputText
        [id]="field().fieldLabelInputId ?? field().name"
        type="text"
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
export class TextField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<FieldTree<string>>();
}
