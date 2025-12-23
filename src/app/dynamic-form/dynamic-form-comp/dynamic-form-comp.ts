import { CommonModule } from '@angular/common';
import { Component, input, linkedSignal, model } from '@angular/core';
import {
  email,
  form,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  required,
  SchemaPathTree,
} from '@angular/forms/signals';

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
  receivedFields = model.required<IFormFieldsConfig[]>();
  formConfig = input.required<IFormConfig>();

  private readonly formModel = linkedSignal({
    source: this.receivedFields,
    computation: (fields) => this.buildFormModel(fields),
  });

  private readonly emptyFormModel = linkedSignal({
    source: this.receivedFields,
    computation: (fields) => this.buildFormModel(fields),
  });

  readonly fieldType = FieldType;

  readonly dynamicForm = form<IFormFields>(this.formModel, (schema) => {
    this.validationFn(schema);
  });



  validationFn(schemaPath: SchemaPathTree<IFormFields>) {
    return [
      required(schemaPath['cats'], { message: 'At least one category must be selected' }),
      required(schemaPath['email'], { message: 'Email is required' }),
      email(schemaPath['email'], { message: 'Invalid email format' }),
      minLength(schemaPath['keyfilter'], 5, { message: 'Minimum length is 5 characters' }),
      maxLength(schemaPath['keyfilter'], 10, { message: 'Maximum length is 10 characters' }),
      min(schemaPath['age'], 18, { message: 'Minimum age is 18' }),
      max(schemaPath['age'], 65, { message: 'Maximum age is 65' }),
      pattern(schemaPath['lastName'], /^[a-zA-Z0-9_]+$/, {
        message: 'Username can only contain letters, numbers, and underscores',
      }),
      required(schemaPath['lastName'], { message: 'At least one category must be selected' }),
      minLength(schemaPath['lastName'], 3, { message: 'Maximum age is 65' }),
    ];
  }

  buildFormModel(fields: IFormFieldsConfig[]): IFormFields {
    const model: IFormFields = {};
    for (const field of fields) {
      model[field.name] = field.value ?? null;
    }
    return model;
  }

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
    this.dynamicForm().reset(this.emptyFormModel());
  }

  getFieldErrorMessage(fieldName: string): string | null {
    const errors = this.dynamicForm[fieldName]().errors();
    if (!errors || !errors.length) return null;

    return errors[0]?.message ?? null;
  }
}
