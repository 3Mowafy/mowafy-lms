import { Component, signal } from '@angular/core';
import { DynamicFormComp } from './dynamic-form/dynamic-form-comp/dynamic-form-comp';
import {
  FieldType,
  IFormConfig,
  IFormFields,
  initFormFields,
} from './dynamic-form/interfaces/dynamic-form';

@Component({
  selector: 'app-root',
  imports: [DynamicFormComp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mowafy-lms');

  readonly formFields = signal<initFormFields[]>([
    {
      type: FieldType.CHECKBOX,
      name: 'cats',
      value: null,
      validators: [{ name: 'required', message: 'At least one category must be selected' }],
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
      name: 'lastName',
      value: '',
      label: 'Last Name',
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
  ]);

  readonly formConfig = signal<IFormConfig>({
    formTitle: 'Dynamic Form',
    displayTitle: true,
    hrAfterTitle: true,
    showFormButtons: true,
  });
}
