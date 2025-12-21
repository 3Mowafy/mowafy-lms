import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { FloatLabelModule } from 'primeng/floatlabel';
import { MultiSelectModule } from 'primeng/multiselect';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-multiselect-field',
  imports: [FloatLabelModule, MultiSelectModule, Field],
  template: `
    <p-floatlabel [variant]="field().floatlabel ?? 'on'">
      <p-multiselect
        [id]="field().fieldLabelInputId ?? field().name"
        [options]="field().options"
        optionLabel="name"
        [field]="fieldName()"
        [class]="field().inputStyleClass"
        [fluid]="field().inputFluid ?? true"
        [maxSelectedLabels]="field().maxSelectedLabels ?? 3"
        [display]="field().multiSelectDisplay ?? 'chip'"
        [virtualScrollItemSize]="field().virtualScrollItemSize ?? 30"
        [showClear]="field().clearSelected ?? true"
      />
      <label
        [for]="field().fieldLabelInputId ?? field().name"
        [class]="field().labelStyleClass ?? 'ml-2'"
        >{{ field().label ?? 'Select an option' }}</label
      >
    </p-floatlabel>
  `,
})
export class MultiselectField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<any>();
}
