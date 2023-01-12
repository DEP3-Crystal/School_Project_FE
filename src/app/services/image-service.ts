import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private defaultUrl = 'http://localhost:8080/images';
  private allowedImageTypes = ['image/png', 'image/jpeg', 'image/gif'];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
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

  public getImageUrlById(id: number, url: string = this.defaultUrl) {
    let imageUrl;
    this.getImage(id).subscribe(data => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        imageUrl = reader.result as string;
      }, false);

      if (data) {
        reader.readAsDataURL(data);
      }
    })
    return imageUrl;
  }

  public getImageUrl(byteArray: Uint8Array): SafeUrl {
    const blob = new Blob([byteArray], {type: 'image/png'});
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  }
}
