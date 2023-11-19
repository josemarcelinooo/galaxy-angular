import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicApiListService {
	private _env = environment;

	constructor(private http: HttpClient) { }

	getPublicApiList(): Observable<any> {
	const url = `${this._env.djangoApi.url}api/fetch-public-api-list/`;
	return this.http.get(url);
	}
}