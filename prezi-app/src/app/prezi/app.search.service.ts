import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Prezi } from './prezi';

@Injectable()
export class SearchService {
    private _searchUrl = '/search/';

    constructor(private _http: HttpClient) { }

    getResults(phrase: string): Observable<Map<string, Prezi>> {
        return this._http.get<Prezi[]>(this._searchUrl + phrase)
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}
