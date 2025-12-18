import { FieldType } from './dynamic-form';

interface BaseField {
  name: string;
  type: FieldType;
  value: any;
  validators: string[];
  inputFluid?: boolean; // default: true
  inputStyleClass?: string;
  label?: string;
  labelStyleClass?: string;
  fieldLabelInputId?: string;
  floatlabel?: 'in' | 'over' | 'on'; // default: 'on'
  fieldStyleClass?: string; // field container style class
}

export interface ICheckboxField extends BaseField {
  type: FieldType.CHECKBOX;
  checkBoxbinary?: boolean; // for checkbox, default: false
  options: { name: string; key: string }[]; // for checkbox
}

export interface ITextField extends BaseField {
  type: FieldType.TEXT;
}

export interface IEmailField extends BaseField {
  type: FieldType.EMAIL;
}

export interface IDateField extends BaseField {
  type: FieldType.DATE;
  showDateIcon?: boolean; // default: true
  iconDateDisplay?: 'button' | 'input'; // default: 'button'
  numberOfMonthsForDates?: number; //  default: 2
  showTimeForDates?: boolean; // default: true
  hourFormatForDates?: '12' | '24'; // default: '12'
  showSecondsForDates?: boolean; // default: false
  showButtonBarForDates?: boolean; // default: true
  selectionModeForDates?: 'single' | 'multiple' | 'range'; // default: 'single'
}

export interface INumberField extends BaseField {
  type: FieldType.NUMBER;
  numberPrefix?: string; // default: empty
  numberSuffix?: string; // default: empty
  numberMode?: 'decimal' | 'currency' | 'percent'; // default: 'decimal'
  minFractionDigits?: number; // default: 0
  maxFractionDigits?: number; // default: 2
  minNumberValue?: number; // default: 1
  maxNumberValue?: number; // default: 99
}

export interface IOtpField extends BaseField {
  type: FieldType.OTP;
  otpIntegerOnly?: boolean; // default: true
  optLength?: number; // default: 4
}

export interface IKeyFilterField extends BaseField {
  type: FieldType.KEYFILTER;
  keyFilterRegex?: RegExp; // default: None space allowed
}

export interface IMultiSelectField extends BaseField {
  type: FieldType.MULTISELECT;
  options: { name: string; key: string }[]; // for multiselect
  maxSelectedLabels?: number; // default: 3 it's displayed number of selected options in multiselect
  multiSelectDisplay?: 'chip' | 'comma'; // default: 'chip'
  virtualScrollItemSize?: number; // default: 34 item height in px for multiselect
  clearSelected?: boolean; // default: true show clear all icon in multiselect
}

export interface IPasswordField extends BaseField {
  type: FieldType.PASSWORD;
  passwordFeedback?: boolean; // default: true
  passwordToggleMask?: boolean; // default: true
  passwordPromptLabel?: string; // default: 'Enter a password'
  passwordWeakLabel?: string; // default: 'Weak'
  passwordMediumLabel?: string; // default: 'Medium'
  passwordStrongLabel?: string; // default: 'Strong'
}

export interface IRadioField extends BaseField {
  type: FieldType.RADIO;
  options: { name: string; key: string }[]; // for radio
}

export interface ISelectField extends BaseField {
  type: FieldType.SELECT;
  options: { name: string; key: string }[]; // for select
  searchInMenu?: boolean; // default: true for select
}

export interface ITextareaField extends BaseField {
  type: FieldType.TEXTAREA;
  rows?: number;
  cols?: number;
}

export interface IToggleField extends BaseField {
  type: FieldType.TOGGLE;
}

export interface IFileField extends BaseField {
  type: FieldType.FILE;
}
