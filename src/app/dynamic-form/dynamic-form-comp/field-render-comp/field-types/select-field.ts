import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';

import { SelectModule } from 'primeng/select';
import { FloatLabel } from 'primeng/floatlabel';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-select-field',
  imports: [SelectModule, Field, FloatLabel],
  template: `
    <p-floatlabel [variant]="field().floatlabel ?? 'on'">
      <p-select
        [id]="field().fieldLabelInputId ?? field().name"
        [options]="field().options"
        [field]="fieldName()"
        [showClear]="field().clearSelected ?? true"
        [class]="field().inputStyleClass"
        [fluid]="field().inputFluid ?? true"
        [editable]="field().searchInMenu ?? true"
        optionLabel="name"
      />
      <label
        [for]="field().fieldLabelInputId ?? field().name"
        [class]="field().labelStyleClass ?? 'ml-2'"
        >{{ field().label ?? 'Select an option' }}</label
      >
    </p-floatlabel>
  `,
})
export class SelectField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<any>();
}
