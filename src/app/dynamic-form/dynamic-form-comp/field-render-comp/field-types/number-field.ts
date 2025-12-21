import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';

import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-number-field',
  imports: [FloatLabelModule, InputNumberModule, Field],
  template: `
    <p-floatlabel [variant]="field().floatlabel ?? 'on'">
      <p-inputnumber
        [field]="fieldName()"
        [inputId]="field().fieldLabelInputId ?? field().name"
        [prefix]="field().numberPrefix ?? ''"
        [suffix]="field().numberSuffix ?? ''"
        [class]="field().inputStyleClass"
        [fluid]="field().inputFluid ?? true"
        [mode]="field().numberMode ?? 'decimal'"
        [minFractionDigits]="field().minFractionDigits ?? 0"
        [maxFractionDigits]="field().maxFractionDigits ?? 2"
        [min]="field().minNumberValue ?? 1"
        [max]="field().maxNumberValue ?? 99"
      />
      <label
        [for]="field().fieldLabelInputId ?? field().name"
        [class]="field().labelStyleClass ?? 'ml-2'"
        >{{ field().label }}</label
      >
    </p-floatlabel>
  `,
})
export class NumberField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<any>();
}
