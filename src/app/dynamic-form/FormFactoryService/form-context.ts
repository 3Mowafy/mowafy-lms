import { signal } from '@angular/core';
import { IFormConfig, IFormFields, initFormFields } from '../interfaces/dynamic-form';
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
  validate,
} from '@angular/forms/signals';
import {
  CustomValidator,
  LengthValidator,
  MinMaxValidator,
  PatternValidator,
} from '../interfaces/validators-types';

export class FormContext {
  formFields = signal<initFormFields[]>([]);
  formConfig = signal<IFormConfig>(null!);
  formInstance: any = null;
  private readonly _formId = crypto.randomUUID();

  constructor() {
    this.formConfig.set({
      formId: this._formId,
      formTitle: '',
      displayTitle: false,
      hrAfterTitle: false,
      showFormButtons: false,
    });
  }

  getDefaultMessage(validator: any): string {
    switch (validator.name) {
      case 'min':
        return `القيمة يجب أن تكون ${(validator as MinMaxValidator).value} على الأقل`;

      case 'max':
        return `القيمة يجب ألا تتجاوز ${(validator as MinMaxValidator).value}`;

      case 'minLength':
        return `يجب إدخال ${(validator as LengthValidator).length} أحرف على الأقل`;

      case 'maxLength':
        return `الحد الأقصى ${(validator as LengthValidator).length} حرف`;

      case 'pattern':
        return 'الصيغة المدخلة غير صحيحة';

      default:
        return validator.name + 'خطأ في التحقق من الحقل';
    }
  }

  initializeForm(fields: initFormFields[]) {
    const model: IFormFields = {};
    fields.forEach((field) => {
      model[field.name] = field.value ?? null;
    });

    this.formInstance = form<IFormFields>(
      signal(model),
      (schemaPath: SchemaPathTree<IFormFields>) => {
        fields.forEach((field) => {
          const fieldPath = schemaPath[field.name];

          if (!field.validators) return;
          field.validators.forEach((validator) => {
            const options = {
              message: validator.message || this.getDefaultMessage(validator),
              ...(validator.when && { when: validator.when }),
            };

            switch (validator.name) {
              case 'required':
                required(fieldPath, options);
                break;

              case 'email':
                email(fieldPath, options);
                break;

              case 'min':
                const minVal = (validator as MinMaxValidator).value;
                min(fieldPath, minVal, options);
                break;

              case 'max':
                const maxVal = (validator as MinMaxValidator).value;
                max(fieldPath, maxVal, options);
                break;

              case 'minLength':
                const minLen = (validator as LengthValidator).length;
                minLength(fieldPath, minLen, options);
                break;

              case 'maxLength':
                const maxLen = (validator as LengthValidator).length;
                maxLength(fieldPath, maxLen, options);
                break;

              case 'pattern':
                const patternVal = (validator as PatternValidator).pattern;
                const regex = typeof patternVal === 'string' ? new RegExp(patternVal) : patternVal;
                pattern(fieldPath, regex, options);
                break;

              case 'custom':
                const customVal = validator as CustomValidator;
                validate(fieldPath, customVal.validatorFn);
                break;

              default:
                console.warn(`Unknown validator type: ${validator['name']}`);
            }
          });
        });
      }
    );
  }

  updateConfig(config: Omit<IFormConfig, 'formId'>) {
    this.formConfig.update((current) => ({
      ...current,
      ...config,
      formId: this._formId,
    }));
  }
}
