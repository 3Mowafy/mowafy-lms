import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

import { FieldType, IFormConfig, initFormFields } from '../interfaces/dynamic-form';
import { FieldRenderComp } from './field-render-comp/field-render-comp';
import { FormContext } from '../FormFactoryService/form-context';
import { FORM_CONTEXT_TOKEN } from '../FormFactoryService/dynamic-form-service';

@Component({
  selector: 'app-dynamic-form-comp',
  imports: [CommonModule, MessageModule, ButtonModule, FieldRenderComp],
  providers: [{ provide: FORM_CONTEXT_TOKEN, useExisting: FormContext }],
  templateUrl: './dynamic-form-comp.html',
})
export class DynamicFormComp {
  private _formContext = inject(FormContext);

  receivedFields = this._formContext.formFields();
  formConfig = this._formContext.formConfig();

  readonly fieldType = FieldType;
  readonly dynamicForm = this._formContext.formInstance;

  onReceivedFilesFromFieldRender(event: any, fieldName: string) {
    this.dynamicForm[fieldName]().value.update(() => event);
  }

  onSubmit() {
    console.log('Dynamic Form Value:', this.dynamicForm().value());
  }

  onCancel() {
    console.log('Dynamic Form Cancelled');
  }

  onReset() {
    this.dynamicForm().reset();
  }
}
