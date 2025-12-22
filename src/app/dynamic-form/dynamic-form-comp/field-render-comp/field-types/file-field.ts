import { Component, input, output } from '@angular/core';

import { FileUpload } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';
import { Field, FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-file-field',
  providers: [MessageService],
  imports: [ToastModule, ButtonModule, FileUpload],
  template: `
    <p-fileupload
      [accept]="field().accept ?? 'image/*'"
      [multiple]="field().multiple ?? true"
      [maxFileSize]="field().maxFileSize ?? 1000000"
      [mode]="field().mode ?? 'advanced'"
      [customUpload]="field().customUpload ?? true"
      [cancelIcon]="field().cancelIcon ?? 'pi pi-times'"
      [chooseIcon]="field().chooseIcon ?? 'pi pi-plus'"
      [fileLimit]="field().fileLimit ?? 5"
      [chooseLabel]="field().chooseLabel ?? 'Browse'"
      [uploadLabel]="field().uploadLabel ?? 'Upload'"
      [cancelLabel]="field().cancelLabel ?? 'Cancel'"
      [showUploadButton]="field().showUploadButton ?? false"
      [showCancelButton]="field().showCancelButton ?? true"
      [cancelStyleClass]="field().cancelStyleClass ?? ''"
      [removeStyleClass]="field().removeStyleClass ?? ''"
      [chooseStyleClass]="field().chooseStyleClass ?? ''"
      (onSelect)="onFileChange($event)"
      [invalidFileLimitMessageSummary]="
        (field().invalidFileLimitMessageSummary ?? 'You can only upload up to ') +
        (field().fileLimit ?? 5) +
        ' files.'
      "
      [invalidFileLimitMessageDetail]="field().invalidFileLimitMessageDetail ?? ''"

      [invalidFileSizeMessageSummary]="
        (field().invalidFileSizeMessageSummary ?? 'File size exceeds maximum limit of ') +
        (field().maxFileSize ?? 1000000) / 1000000 +
        ' MB.'
      "
      [invalidFileSizeMessageDetail]="field().invalidFileSizeMessageDetail ?? ''"
      [invalidFileTypeMessageSummary]="
        (field().invalidFileTypeMessageSummary ??
        'Invalid file type. Please select files of type: ') +
        (field().accept ?? 'image/*')
        "
        [invalidFileTypeMessageDetail]="field().invalidFileTypeMessageDetail ?? ''"
        
    >
      <ng-template #empty>
        <div>Drag and drop files to here to upload.</div>
      </ng-template>
    </p-fileupload>
  `,
})
export class FileField {
  field = input.required<IFormFieldsConfig>();

  sendFilesToFieldRender = output<any>();

  onFileChange(event: any) {
    const files = event.currentFiles;

    this.sendFilesToFieldRender.emit(files);
  }
}
