import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';

@Component({
  selector: 'app-excel-uploader',
  standalone: false,
  templateUrl: './excel-uploader.component.html',
  styleUrl: './excel-uploader.component.css'
})
export class ExcelUploaderComponent {
  isDragOver = false;
  uploadedFile: File | null = null;
  private snackBar = inject(MatSnackBar);

  constructor(private dialog: MatDialog) {

  }

  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  isLoading = false;


  @Output() fileUploaded = new EventEmitter<{ testName: string, file: File }>();
  @Input() testName!: string;
  @Output() fileRemoved = new EventEmitter<string>();

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.addFile(event.dataTransfer.files[0]); // solo 1 archivo
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.addFile(input.files[0]); // solo 1 archivo
    }
  }

  private async addFile(file: File) {
    this.isLoading = true;

    const minLoadingTime = 1500; // ms
    const startTime = Date.now();

    try {
      const fileName = file.name.toLowerCase();
      const expectedKeyword = this.testName.toLowerCase();

      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });

      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];

      const flatData = data.flat().map(cell =>
        typeof cell === 'string' ? cell.toLowerCase().trim() : ''
      );

      const validacionPorContenido = this.validateContentExcels(flatData, expectedKeyword);

      // Validar que el nombre del archivo contenga la palabra clave esperada
      if (!fileName.includes(expectedKeyword) || !validacionPorContenido) {
        this.snackBar.open(
          `⚠️ Archivo incorrecto: "${file.name}" no coincide con la prueba requerida.`,
          'Entendido',
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: ['custom-snackbar'],
          }
        );
        return;
      } else {

        this.snackBar.open(
          `Archivo subido correctamente.`,
          undefined,
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 1500,
            panelClass: ['custom-snackbar'],
          }
        );
        this.uploadedFile = file;
        this.fileUploaded.emit({ testName: this.testName, file });
      }
    } catch (error) {

    } finally {
      // Calcular cuánto tiempo pasó desde que inició
      const elapsed = Date.now() - startTime;

      if (elapsed < minLoadingTime) {
        // Esperar el tiempo restante para que el spinner se muestre mínimo 1.5 segundos
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsed));
      }

      this.isLoading = false;
    }
  }

  removeFile() {
    this.dialog.open(DeleteUserDialogComponent, {
      width: '800px',
      data: {
        name: this.uploadedFile?.name,
        action: "delete-file"
      }
    }).afterClosed().subscribe(result => {
      if (result === 'confirm') {
        //Se eliminara porque el usuario lo confirmo
        this.uploadedFile = null;
        //this.fileUploaded.emit({ testName: this.testName, file: null as any });
        this.fileRemoved.emit(this.testName); // ← Emitimos el nombre de la prueba eliminada

        // Limpiar el input para que se pueda volver a seleccionar el mismo archivo
        if (this.fileInputRef?.nativeElement) {
          this.fileInputRef.nativeElement.value = '';
        }
      }else{
      }
    });
  }

  private validateContentExcels(flatData: string[], testName: string): boolean {
    const palabrasClave: Record<string, string[]> = {
      humedad: [
        'peso constante de la cápsula',
        'muestra seca',
        'temperatura de secado',
        'tiempo de secado',
        'preparación de las cápsulas y secado de la muestra'
      ],
      proteinas: [
        'digestión con ácido sulfúrico',
        'nitrógeno total',
        'valor de f kjeldahl',
        'catalizador'
      ],
      cenizas: [
        'materia inorgánica',
        'temperatura de incineración',
        'residuo inorgánico',
        'cenizas totales'
      ]
      // Puedes agregar más pruebas aquí
    };

    const claves = palabrasClave[testName.toLowerCase()];
    if (!claves) return false;

    return claves.some(clave =>
      flatData.some(cell => cell.includes(clave))
    );
  }
}
