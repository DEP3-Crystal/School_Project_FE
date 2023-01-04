import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {jsonHelpUsage} from "@angular/cli/src/command-builder/utilities/json-help";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private defaultUrl = 'http://localhost:8080/images';
  private allowedImageTypes = ['image/png', 'image/jpeg', 'image/gif'];

  constructor(private http: HttpClient) {
  }

  public uploadImage(imageName: string, imageFile: File, url: string = this.defaultUrl) {
    if (imageFile.size > 5000000) {
      throw new Error('Image file is too large');
    }
    if (!this.allowedImageTypes.includes(imageFile.type)) {
      throw new Error('Invalid image file type');
    }
    const formData = new FormData();
    formData.append('name', imageName);
    formData.append('file', imageFile);
    console.log(formData);
    return this.http.post(url, formData);
  }

  public getImage(id: number, url: string = this.defaultUrl): Observable<Blob> {
    return this.http.get<Blob>(`${url}/${id}`, {responseType: 'blob' as 'json'});
  }
}
