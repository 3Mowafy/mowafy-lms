import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { form } from '@angular/forms/signals';

import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

import { FieldType, IFormConfig, IFormFields, IFormFieldsConfig } from '../interfaces/dynamic-form';
import { FieldRenderComp } from './field-render-comp/field-render-comp';

@Component({
  selector: 'app-dynamic-form-comp',
  imports: [CommonModule, MessageModule, ButtonModule, FieldRenderComp],
  templateUrl: './dynamic-form-comp.html',
})
export class DynamicFormComp {
  receivedFields = input.required<IFormFieldsConfig[]>();
  formConfig = input.required<IFormConfig>();

  readonly formFields = signal<IFormFields>({});
  readonly formFieldsForReset = signal<IFormFields>({});
  readonly dynamicForm = form<IFormFields>(this.formFields);

  readonly fieldType = FieldType;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.receivedFields().forEach((field) => {
      this.formFields.update((fields) => ({ ...fields, [field.name]: field.value }));
      this.formFieldsForReset.update((fields) => ({ ...fields, [field.name]: field.value }));
    });
  }

  onSubmit() {
    console.log('Dynamic Form Value:', this.dynamicForm().value());
  }

  onCancel() {
    console.log('Dynamic Form Cancelled');
  }

  onReset() {
    this.dynamicForm().reset(this.formFieldsForReset());
  }
}
