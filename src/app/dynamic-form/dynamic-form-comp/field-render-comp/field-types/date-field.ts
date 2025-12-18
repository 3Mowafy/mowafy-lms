import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-date-field',
  imports: [FloatLabelModule, DatePickerModule, Field],
  template: `
    <p-floatlabel [variant]="field().floatlabel ?? 'on'">
      <p-datepicker
        [field]="fieldName()"
        [inputId]="field().fieldLabelInputId ?? field().name"
        [showIcon]="field().showDateIcon ?? true"
        [iconDisplay]="field().iconDateDisplay ?? 'button'"
        [fluid]="field().inputFluid ?? true"
        [class]="field().inputStyleClass"
        [numberOfMonths]="field().numberOfMonthsForDates ?? 2"
        [showTime]="field().showTimeForDates ?? true"
        [hourFormat]="field().hourFormatForDates ?? '12'"
        [showSeconds]="field().showSecondsForDates ?? false"
        [showButtonBar]="field().showButtonBarForDates ?? true"
        [selectionMode]="field().selectionModeForDates ?? 'single'"
      />
      <label
        [for]="field().fieldLabelInputId ?? field().name"
        [class]="field().labelStyleClass ?? 'ml-2'"
        >{{ field().label }}</label
      >
    </p-floatlabel>
  `,
})
export class DateField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<FieldTree<any>>();
}
