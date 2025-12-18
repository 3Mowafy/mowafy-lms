import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-password-field',
  imports: [FloatLabelModule, PasswordModule, Field],
  template: `
    <p-floatlabel [variant]="field().floatlabel ?? 'on'">
      <p-password
        [field]="fieldName()"
        [feedback]="field().passwordFeedback ?? true"
        [toggleMask]="field().passwordToggleMask ?? true"
        [promptLabel]="field().passwordPromptLabel ?? 'Enter a password'"
        [weakLabel]="field().passwordWeakLabel ?? 'Weak'"
        [mediumLabel]="field().passwordMediumLabel ?? 'Medium'"
        [strongLabel]="field().passwordStrongLabel ?? 'Strong'"
        [inputId]="field().fieldLabelInputId ?? field().name"
        [fluid]="field().inputFluid ?? true"
        [class]="field().inputStyleClass"
      />
      <label
        [for]="field().fieldLabelInputId ?? field().name"
        [class]="field().labelStyleClass ?? 'ml-2'"
        >Password</label
      >
    </p-floatlabel>
  `,
})
export class PasswordField {
  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<FieldTree<any>>();
}
