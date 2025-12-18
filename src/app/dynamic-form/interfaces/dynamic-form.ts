import {
  ICheckboxField,
  ITextField,
  IDateField,
  IEmailField,
  IKeyFilterField,
  IMultiSelectField,
  INumberField,
  IOtpField,
  IPasswordField,
  IRadioField,
  ISelectField,
  IToggleField,
  ITextareaField,
  IFileField,
} from './dynamic-form-fields.interfaces';

export enum FieldType {
  CHECKBOX,
  TEXT,
  EMAIL,
  DATE,
  NUMBER,
  OTP,
  KEYFILTER,
  MULTISELECT,
  PASSWORD,
  RADIO,
  SELECT,
  TEXTAREA,
  TOGGLE,
  FILE,
}

export interface IFormFieldsConfig {
  name: string;
  type: FieldType;
  value: any;
  inputFluid?: boolean; // default: true
  fieldStyleClass?: string; // field container style class
  inputStyleClass?: string; // input style class
  checkBoxbinary?: boolean; // for checkbox, default: false
  labelStyleClass?: string;
  floatlabel?: 'in' | 'over' | 'on'; // default: 'on'
  label?: string;
  fieldLabelInputId?: string;
  keyFilterRegex?: RegExp; // default: None space allowed
  showDateIcon?: boolean; // default: true
  iconDateDisplay?: 'button' | 'input'; // default: 'button'
  numberOfMonthsForDates?: number; //  default: 2
  showTimeForDates?: boolean; // default: true
  hourFormatForDates?: '12' | '24'; // default: '12'
  showSecondsForDates?: boolean; // default: false
  showButtonBarForDates?: boolean; // default: true
  selectionModeForDates?: 'single' | 'multiple' | 'range'; // default: 'single'
  numberPrefix?: string; // default: empty
  numberSuffix?: string; // default: empty
  numberMode?: 'decimal' | 'currency' | 'percent'; // default: 'decimal'
  minFractionDigits?: number; // default: 0
  maxFractionDigits?: number; // default: 2
  minNumberValue?: number; // default: 1
  maxNumberValue?: number; // default: 99
  otpIntegerOnly?: boolean; // default: true
  optLength?: number; // default: 4
  maxSelectedLabels?: number; // default: 3 it's displayed number of selected options in multiselect
  multiSelectDisplay?: 'chip' | 'comma'; // default: 'chip'
  virtualScrollItemSize?: number; // default: 34 item height in px for multiselect
  clearSelected?: boolean; // default: true show clear all icon in multiselect
  passwordFeedback?: boolean; // default: true
  passwordToggleMask?: boolean; // default: true
  passwordPromptLabel?: string; // default: 'Enter a password'
  passwordWeakLabel?: string; // default: 'Weak'
  passwordMediumLabel?: string; // default: 'Medium'
  passwordStrongLabel?: string; // default: 'Strong'
  searchInMenu?: boolean; // default: true for select
  options?: { name: string; key: string }[]; // for select, multiselect, radio, checkbox
  rows?: number; // for textarea
  cols?: number; // for textarea
  validators: string[];
}

export interface IFormConfig {
  formTitle: string;
  displayTitle: boolean;
  formTitleStyleClass?: string;
  hrAfterTitle: boolean;
  hrAfterTitleStyleClass?: string;
  formStyleClass?: string;
  showFormButtons: boolean;
}

export interface IFormFields {
  [key: string]: any;
}

export type initFormFields =
  | ICheckboxField
  | ITextField
  | IDateField
  | IEmailField
  | IKeyFilterField
  | IMultiSelectField
  | INumberField
  | IOtpField
  | IPasswordField
  | IRadioField
  | ISelectField
  | IToggleField
  | ITextareaField
  | IFileField;
