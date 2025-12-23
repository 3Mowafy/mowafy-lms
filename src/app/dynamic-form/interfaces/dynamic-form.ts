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
  showOnFocusForDates?: boolean; // default: false
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
  passwordMediumRegex?: string;
  passwordStrongRegex?: string;
  searchInMenu?: boolean; // default: true for select
  options?: { name: string; key: string }[]; // for select, multiselect, radio, checkbox
  rows?: number; // for textarea
  cols?: number; // for textarea
  accept?: string; // for type of file
  multiple?: boolean; // default: true
  maxFileSize?: number; // default: 1000000
  mode?: 'advanced' | 'basic' | undefined; // default: 'basic'
  customUpload?: boolean; // default: true
  cancelIcon?: string; // default: 'pi pi-times'
  chooseIcon?: string; // default: 'pi pi-plus'
  fileLimit?: number; // default: 5
  chooseLabel?: string; // default: 'Browse'
  uploadLabel?: string; // default: 'Upload'
  cancelLabel?: string; // default: 'Cancel'
  showUploadButton?: boolean; // default: false
  showCancelButton?: boolean; // default: true
  cancelStyleClass?: string; // default: empty
  removeStyleClass?: string; // default: empty
  chooseStyleClass?: string; // default: empty
  invalidFileLimitMessageSummary?: string; // default: 'You can only upload up to {fileLimit} files.'
  invalidFileSizeMessageSummary?: string; // default: 'File size exceeds maximum limit of {maxFileSize} MB.'
  invalidFileTypeMessageSummary?: string; // default: 'Invalid file type. Please select files of type: {accept}'
  invalidFileLimitMessageDetail?: string; // default: ''
  invalidFileSizeMessageDetail?: string; // default: ''
  invalidFileTypeMessageDetail?: string; // default: ''
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
