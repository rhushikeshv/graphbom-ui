import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {BaseURL} from "../../BaseURL";

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  uploadedFiles: any[] = [];

  fileUploadURL = BaseURL.url+ "/bom/services/partservice/uploadFile";

  constructor(private messageService: MessageService) {

  }
  ngOnInit() {
    console.log('File upload component')
  }
  onBasicUpload(event: any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
