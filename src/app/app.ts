import { Component, inject, signal } from '@angular/core';
import { DynamicFormComp } from './dynamic-form/dynamic-form-comp/dynamic-form-comp';
import { FormContext } from './dynamic-form/FormFactoryService/form-context';
import { FieldType, IFormConfig, initFormFields } from './dynamic-form/interfaces/dynamic-form';
import { Login } from './component/login/login';

@Component({
  selector: 'app-root',
  imports: [DynamicFormComp, Login],
  providers: [FormContext],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private _formContext = inject(FormContext);

  constructor() {
    const formFields: initFormFields[] = [
      {
        type: FieldType.CHECKBOX,
        name: 'cats',
        value: null,
        validators: [
          {
            name: 'custom',
            message: 'At least one category must be selected',
            validatorFn: (context) => {
              console.log('Checkbox valid', context.value());
              if (!context.value() || (Array.isArray(context.value()) && context.value().length === 0)) {
                return {
                  kind: 'required',
                  message: 'At least one category must be selected',
                };
              }
              return null;
            },
          },
        ],
        options: [
          { name: 'Accounting', key: 'A' },
          { name: 'Marketing', key: 'M' },
          { name: 'Production', key: 'P' },
          { name: 'Research', key: 'R' },
        ],
      },
      {
        type: FieldType.DATE,
        name: 'dateOfBirth',
        value: '',
        floatlabel: 'on',
        numberOfMonthsForDates: 1,
        showTimeForDates: false,
        label: 'Date of Birth',
      },
      {
        type: FieldType.EMAIL,
        name: 'email',
        value: '',
        label: 'Email',
      },
      {
        type: FieldType.KEYFILTER,
        name: 'keyfilter',
        value: '',
        label: 'Key filter',
      },
      {
        type: FieldType.MULTISELECT,
        name: 'categories',
        value: '',
        options: [
          { name: 'Accounting', key: 'A' },
          { name: 'Marketing', key: 'M' },
          { name: 'Production', key: 'P' },
          { name: 'Research', key: 'R' },
        ],
      },
      {
        type: FieldType.NUMBER,
        name: 'age',
        value: null,
        label: 'Age',
        validators: [
          { name: 'required', message: 'العمر مطلوب' },
          { name: 'min', value: 18, message: 'يجب أن يكون العمر 18 سنة على الأقل' },
          { name: 'max', value: 120, message: 'أدخل عمر صحيح' },
        ],
      },
      {
        type: FieldType.NUMBER,
        name: 'phone',
        value: null,
        label: 'Phone Number',
        validators: [
          {
            name: 'pattern',
            pattern: /^01[0-2,5]\d{8}$/,
            message: 'رقم الهاتف يجب أن يكون بصيغة صحيحة (مثال: 01012345678)',
          },
        ],
      },
      {
        type: FieldType.OTP,
        name: 'otp',
        value: '',
        label: 'OTP',
      },
      {
        type: FieldType.PASSWORD,
        name: 'password',
        value: '',
        label: 'Password',
      },
      {
        type: FieldType.RADIO,
        name: 'radioOptions',
        value: '',
        options: [
          { name: 'Accounting', key: 'A' },
          { name: 'Marketing', key: 'M' },
          { name: 'Production', key: 'P' },
          { name: 'Research', key: 'R' },
        ],
      },
      {
        type: FieldType.SELECT,
        name: 'categos',
        value: null,
        options: [
          { name: 'Accounting', key: 'A' },
          { name: 'Marketing', key: 'M' },
          { name: 'Production', key: 'P' },
          { name: 'Research', key: 'R' },
        ],
      },
      {
        type: FieldType.TEXT,
        name: 'userName',
        value: '',
        label: 'User Name',
        validators: [
          { name: 'required', message: 'اسم المستخدم مطلوب' },
          {
            name: 'custom',
            message: 'اسم المستخدم يجب أن يبدأ بحرف',
            validatorFn: ({ value }) => {
              const val = value();
              if (!/^[a-zA-Z]/.test(val)) {
                return {
                  kind: 'startsWithLetter',
                  message: 'اسم المستخدم يجب أن يبدأ بحرف',
                };
              }
              return null;
            },
          },
        ],
      },
      {
        type: FieldType.TEXTAREA,
        name: 'description',
        value: '',
        label: 'Description',
      },
      {
        type: FieldType.TOGGLE,
        name: 'admin',
        value: '',
        label: 'Is Admin',
      },
      {
        type: FieldType.FILE,
        name: 'fileUpload',
        value: null,
        label: 'File Upload',
      },
    ];

    const formConfig: IFormConfig = {
      displayTitle: true,
      formTitle: 'Dynamic Form',
      hrAfterTitle: true,
      showFormButtons: true,
    };

    this._formContext.formFields.set(formFields);
    this._formContext.updateConfig(formConfig);
    this._formContext.initializeForm(formFields);
  }
}
