import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { KeyFilterModule } from 'primeng/keyfilter';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-keyfilter-field',
  imports: [FloatLabelModule, InputTextModule, KeyFilterModule, Field],
  template: `
    <p-floatlabel [variant]="field().floatlabel ?? 'on'">
      <input
        pInputText
        [id]="field().fieldLabelInputId ?? field().name"
        [field]="fieldName()"
        [pKeyFilter]="field().keyFilterRegex ?? blockSpace"
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
export class KeyfilterField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<FieldTree<string>>();

  blockSpace: RegExp = /^[^\s]+$/;
}
