import { FieldType } from './dynamic-form';

interface BaseField {
  name: string;
  type: FieldType;
  value: any;
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
  passwordMediumRegex?: string;
  passwordStrongRegex?: string;
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
