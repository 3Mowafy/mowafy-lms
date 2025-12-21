import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';

import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-textarea-field',
  imports: [FloatLabelModule, InputTextModule, Field],
  template: `
    <p-floatlabel [variant]="field().floatlabel ?? 'on'">
      <textarea
        pInputText
        [field]="fieldName()"
        [id]="field().fieldLabelInputId ?? field().name"
        [rows]="field().rows ?? 5"
        [cols]="field().cols ?? 30"
        [class]="field().inputStyleClass ?? 'resize-none w-full'"
      ></textarea>
      <label
        [for]="field().fieldLabelInputId ?? field().name"
        [class]="field().labelStyleClass ?? 'text-label ml-2'"
        >{{ field().label ?? 'Text Area' }}</label
      >
    </p-floatlabel>
  `,
  styles: `.text-label {
  top: 20px;
}`,
})
export class TextareaField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<any>();
}
