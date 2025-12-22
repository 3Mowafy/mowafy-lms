import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
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
  receivedFields = input.required<IFormFieldsConfig[]>();
  formConfig = input.required<IFormConfig>();

  readonly formFields = signal<IFormFields>({});
  readonly formFieldsForReset = signal<IFormFields>({});

  readonly dynamicForm = form<IFormFields>(this.formFields, this.validationFn);

  validationFn(schemaPath: SchemaPathTree<IFormFields>) {
    console.log('Schema Path:', schemaPath); // هنا الـ keys موجودة بس مش نافع نأكسس عليها
    return [
      required(schemaPath['cats'], { message: 'At least one category must be selected' }),
      required(schemaPath['email'], { message: 'Email is required' }),
      email(schemaPath['email'], { message: 'Invalid email format' }),
      minLength(schemaPath['keyfilter'], 5, { message: 'Minimum length is 5 characters' }),
      maxLength(schemaPath['keyfilter'], 10, { message: 'Maximum length is 10 characters' }),
      min(schemaPath['age'], 18, { message: 'Minimum age is 18' }),
      max(schemaPath['age'], 65, { message: 'Maximum age is 65' }),
      pattern(schemaPath['username'], /^[a-zA-Z0-9_]+$/, {
        message: 'Username can only contain letters, numbers, and underscores',
      }),
      required(schemaPath['dateOfBirth'], { message: 'Date of Birth is required' }),
      required(schemaPath['categories'], { message: 'At least one category must be selected' }),
    ];
  }

  readonly fieldType = FieldType;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    const initailValues: IFormFields = {};

    this.receivedFields().forEach((field) => {
      initailValues[field.name] = field.value ?? null;
    });
    this.formFields.set(initailValues);
    this.formFieldsForReset.set(initailValues);
  }

  onReceivedFilesFromFieldRender(event: any, fieldName: string) {
    this.dynamicForm[fieldName]().value.update(() => event);
  }

  onSubmit() {
    console.log('Dynamic Form Value:', this.dynamicForm().value());
    console.log('Dynamic Form Errors:', this.dynamicForm());
  }

  onCancel() {
    console.log('Dynamic Form Cancelled');
  }

  onReset() {
    this.dynamicForm()['reset'](this.formFieldsForReset());
  }
}
