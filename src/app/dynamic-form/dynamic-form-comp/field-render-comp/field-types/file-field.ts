import { Component, input, output } from '@angular/core';

import { FileUpload } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

import { IFormFieldsConfig } from '../../../interfaces/dynamic-form';

@Component({
  selector: 'app-file-field',
  providers: [MessageService],
  imports: [ToastModule, ButtonModule, FileUpload],
  template: `
    <p-fileupload
      name="demo[]"
      [multiple]="false"
      accept="image/*"
      maxFileSize="1000000"
      mode="advanced"
      [customUpload]="true"
      (onSelect)="onFileChange($event)"
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
    console.log(event.currentFiles);
    const files = event.currentFiles;

    this.sendFilesToFieldRender.emit(files);
  }
}
