import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-select-field',
  imports: [SelectModule, Field],
  template: `
    <p-select
      [options]="field().options"
      [field]="fieldName()"
      [showClear]="field().clearSelected ?? true"
      [class]="field().inputStyleClass"
      [fluid]="field().inputFluid ?? true"
      [editable]="field().searchInMenu ?? true"
      optionLabel="name"
      [placeholder]="field().label ?? 'Select an option'"
    />
  `,
})
export class SelectField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<FieldTree<any>>();
}
