import { Component, inject } from '@angular/core';
import { DynamicFormComp } from '../../dynamic-form/dynamic-form-comp/dynamic-form-comp';
import { FormContext } from '../../dynamic-form/FormFactoryService/form-context';
import { FieldType, IFormConfig, initFormFields } from '../../dynamic-form/interfaces/dynamic-form';

@Component({
  selector: 'app-login',
  imports: [DynamicFormComp],
  providers: [FormContext],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  _FormContext = inject(FormContext);

  constructor() {
    const form1Fields: initFormFields[] = [
      {
        type: FieldType.TEXT,
        name: 'username',
        value: '',
        label: 'Username',
        validators: [
          { name: 'required', message: 'البريد الإلكتروني مطلوب' },
          { name: 'email', message: 'أدخل بريد إلكتروني صحيح' },
        ],
      },
      {
        type: FieldType.PASSWORD,
        name: 'loginPassword',
        value: '',
        label: 'Password',
        validators: [
          { name: 'required', message: 'كلمة المرور مطلوبة' },
          { name: 'minLength', length: 8, message: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل' },
        ],
      },

      {
        type: FieldType.CHECKBOX,
        name: 'Cats',
        value: null,
        validators: [{ name: 'required', message: 'At least one category must be selected' }],
        options: [{ name: 'still Login', key: 's' }],
      },
    ];

    const form1Config: IFormConfig = {
      displayTitle: true,
      formTitle: 'Dynamic Form',
      hrAfterTitle: true,
      showFormButtons: true,
    };

    this._FormContext.formFields.set(form1Fields);
    this._FormContext.formConfig.update((config) => ({ ...config, ...form1Config }));
    this._FormContext.initializeForm(form1Fields);
  }
}
