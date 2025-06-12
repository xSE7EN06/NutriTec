import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-files',
  standalone: false,
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.css'
})
export class UploadFilesComponent{
   clienteForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  uploadedFiles: File[] = [];
  isDragOver = false;

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    const files = Array.from(input.files).filter(file => file.name.endsWith('.xlsx'));
    this.uploadedFiles.push(...files);
  }
}

onDragOver(event: DragEvent): void {
  event.preventDefault();
  this.isDragOver = true;
}

onDragLeave(event: DragEvent): void {
  event.preventDefault();
  this.isDragOver = false;
}

onFileDrop(event: DragEvent): void {
  event.preventDefault();
  this.isDragOver = false;
  const files = Array.from(event.dataTransfer?.files || []).filter(file =>
    file.name.endsWith('.xlsx')
  );
  this.uploadedFiles.push(...files);
}
}
