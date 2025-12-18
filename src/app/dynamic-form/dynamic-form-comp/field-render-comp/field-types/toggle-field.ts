import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { ToggleSwitchModule } from 'primeng/toggleswitch';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-toggle-field',
  imports: [ToggleSwitchModule, Field],
  template: `
    <div class="flex">
      <p-toggleswitch
        [field]="fieldName()"
        [inputId]="field().fieldLabelInputId ?? field().name"
        [class]="field().inputStyleClass"
      />
      <label
        [for]="field().fieldLabelInputId ?? field().name"
        [class]="field().labelStyleClass ?? 'ml-2'"
      >
        {{ field().label ?? 'Toggle Switch' }}</label
      >
    </div>
  `,
})
export class ToggleField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<FieldTree<string>>();
}
