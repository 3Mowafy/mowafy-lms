import { FieldContext } from '@angular/forms/signals';

type ValidatorType =
  | 'required'
  | 'email'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'pattern'
  | 'custom';

interface BaseValidator {
  name: ValidatorType;
  message: string;
  when?: (context: { valueOf: any }) => boolean;
}

export interface MinMaxValidator extends BaseValidator {
  name: 'min' | 'max';
  value: number | (() => number);
}

export interface LengthValidator extends BaseValidator {
  name: 'minLength' | 'maxLength';
  length: number;
}

export interface PatternValidator extends BaseValidator {
  name: 'pattern';
  pattern: string | RegExp;
}

export interface CustomValidator extends BaseValidator {
  name: 'custom';
  validatorFn: (context: FieldContext<any>) => { kind: string; message: string } | null;
}

export type FieldValidator =
  | BaseValidator
  | MinMaxValidator
  | LengthValidator
  | PatternValidator
  | CustomValidator;
