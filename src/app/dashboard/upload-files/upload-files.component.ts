import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-files',
  standalone: false,
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.css'
})
export class UploadFilesComponent {
  clienteForm!: FormGroup;
  pruebas: string[] = [
    'Humedad',
    'Cenizas',
    'Proteínas',
    'Fibra dietética',
    'Carbohidratos (Hidratos de Carbono disponibles)',
    'Sodio',
    'Perfil de ácidos grasos',
    'Contenido energético'
  ];

  constructor(private fb: FormBuilder) { }

  archivosPorPrueba = new Map<string, File>();

  // Mapa para saber qué prueba ya tiene archivo cargado
  estadoPruebas = new Map<string, boolean>();

  // Control del panel expandido
  panelAbiertoIndex = 0;

  async onFilesReceived(event: { testName: string, file: File }) {
    this.archivosPorPrueba.set(event.testName, event.file);
    this.estadoPruebas.set(event.testName, true);

    // Espera 1.5 segundos para que el spinner se vea
    await new Promise(resolve => setTimeout(resolve, 1500));


    const nextIndex = this.pruebas.findIndex(p => p === event.testName) + 1;
    if (nextIndex < this.pruebas.length) {
      this.panelAbiertoIndex = nextIndex;
    }
  }

  onFileRemoved(testName: string) {
    // Elimina el archivo de la colección
    this.archivosPorPrueba.delete(testName);

    // Cambia el ícono al estado de "no subido"
    this.estadoPruebas.set(testName, false);

    // Si no hay ningún archivo cargado, colapsa todos los paneles
    const archivosCargados = Array.from(this.estadoPruebas.values()).some(val => val === true);
    if (!archivosCargados) {
      this.panelAbiertoIndex = -1; // Cierra todos
    }
  }

  canActivatePanel(index: number): boolean {
    if (index === 0) return true;
    const anterior = this.pruebas[index - 1];
    return this.estadoPruebas.get(anterior) === true;
  }


  //crear funcion para avanzar al siguiente step si todos los archivos estan cargados.
  allFilesUploaded(): boolean {
    return this.pruebas.every(p => this.estadoPruebas.get(p) === true);
  }
}
