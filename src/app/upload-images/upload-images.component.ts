import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImageService} from "../services/image-service";
import {catchError, throwError} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent {
  name: string = "";
  file!: File;
  imageUrl: string | undefined;
  id!: number;

  constructor(private imageService: ImageService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files != null)
      this.file = fileInput.files[0];
  }

  uploadImage() {
    if (this.file == null) {
      alert("No file selected");
      return;
    }
    this.imageService.uploadImage(this.name, this.file)
      .pipe(
        catchError((error) => {
          alert("Error uploading" + error.message)
          return throwError(error);
        })
      )
      .subscribe(response => {
        alert("image uploaded successfully")
      })
  }

  showImage() {
    console.log("id is " + this.id);
    if(this.id === undefined){
      alert("please set image id");
      return;
    }
    this.imageService.getImage(this.id).subscribe(data => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.imageUrl = reader.result as string;
      }, false);

      if (data) {
        reader.readAsDataURL(data);
      }
    })
  }

  setId({$event}: { $event: any }) {
    console.log($event)
    this.id = $event;
  }
}
