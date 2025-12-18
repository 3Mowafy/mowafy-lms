import { Component, inject, input } from '@angular/core';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';
import { FileUpload } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-file-field',
  providers: [MessageService],
  imports: [ToastModule, ButtonModule, FileUpload],
  template: `
    <p-fileupload
      name="demo[]"
      url="https://www.primefaces.org/cdn/api/upload.php"
      (onUpload)="onUpload($event)"
      [multiple]="true"
      accept="image/*"
      maxFileSize="1000000"
      mode="advanced"
    >
      <ng-template #empty>
        <div>Drag and drop files to here to upload.</div>
      </ng-template>
    </p-fileupload>
  `,
})
export class FileField {
  private messageService = inject(MessageService);

  field = input.required<IFormFieldsConfig>();
  fieldName = input.required<any>();

  uploadedFiles: any[] = [];

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
