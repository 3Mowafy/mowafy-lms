import { Component, signal } from '@angular/core';
import { DynamicFormComp } from './dynamic-form/dynamic-form-comp/dynamic-form-comp';
import { FieldType, IFormConfig, initFormFields } from './dynamic-form/interfaces/dynamic-form';

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
      name: 'categories',
      value: '',
      validators: ['required'],
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
      label: 'Date of Birth',
      validators: ['required'],
    },
    {
      type: FieldType.EMAIL,
      name: 'email',
      value: '',
      label: 'Email',
      validators: ['required'],
    },
    {
      type: FieldType.KEYFILTER,
      name: 'keyfilter',
      value: '',
      label: 'Key filter',
      validators: ['required'],
    },
    {
      type: FieldType.MULTISELECT,
      name: 'categories',
      value: '',
      validators: ['required'],
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
      validators: ['required'],
    },
    {
      type: FieldType.OTP,
      name: 'otp',
      value: '',
      label: 'OTP',
      validators: ['required'],
    },
    {
      type: FieldType.PASSWORD,
      name: 'password',
      value: '',
      label: 'Password',
      validators: ['required'],
    },
    {
      type: FieldType.RADIO,
      name: 'radioOptions',
      value: '',
      validators: ['required'],
      options: [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' },
      ],
    },
    {
      type: FieldType.SELECT,
      name: 'categories',
      value: null,
      validators: ['required'],
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
      validators: ['required'],
    },
    {
      type: FieldType.TEXTAREA,
      name: 'description',
      value: '',
      label: 'Description',
      validators: ['required'],
    },
    {
      type: FieldType.TOGGLE,
      name: 'admin',
      value: '',
      label: 'Is Admin',
      validators: ['required'],
    },
    {
      type: FieldType.FILE,
      name: 'fileUpload',
      value: null,
      label: 'File Upload',
      validators: ['required'],
    },
  ]);

  readonly formConfig = signal<IFormConfig>({
    formTitle: 'Dynamic Form',
    displayTitle: true,
    hrAfterTitle: true,
    showFormButtons: true,
  });
}
