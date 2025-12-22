import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldType, IFormFieldsConfig } from '../../interfaces/dynamic-form';
import { CheckboxField } from './field-types/checkbox-field';
import { DateField } from './field-types/date-field';
import { EmailField } from './field-types/email-field';
import { KeyfilterField } from './field-types/keyfilter-field';
import { MultiselectField } from './field-types/multiselect-field';
import { NumberField } from './field-types/number-field';
import { OtpField } from './field-types/otp-field';
import { PasswordField } from './field-types/password-field';
import { RadiobuttonField } from './field-types/radiobutton-field';
import { SelectField } from './field-types/select-field';
import { TextField } from './field-types/text-field';
import { TextareaField } from './field-types/textarea-field';
import { ToggleField } from './field-types/toggle-field';
import { FileField } from './field-types/file-field';

@Component({
  selector: 'app-field-render-comp',
  imports: [
    CommonModule,
    CheckboxField,
    DateField,
    EmailField,
    KeyfilterField,
    MultiselectField,
    NumberField,
    OtpField,
    PasswordField,
    RadiobuttonField,
    SelectField,
    TextField,
    TextareaField,
    ToggleField,
    FileField,
  ],
  templateUrl: './field-render-comp.html',
})
export class FieldRenderComp {
  formField = input.required<IFormFieldsConfig>();
  fieldControl = input.required<any>();

  sendFilesToDynamicFormComp = output<any>();


  fieldType = FieldType;


  onReceivedFilesFromFileField(event: any) {
    this.sendFilesToDynamicFormComp.emit(event);
  }
}
