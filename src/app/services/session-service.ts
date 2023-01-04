import {HttpClient} from "@angular/common/http";
import {Session} from "../model/session.model";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private hostUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  getSessions(id: number) {
    return this.http.get<Session[]>(`${this.hostUrl}/sessions/${id}/student`)
  }
}
