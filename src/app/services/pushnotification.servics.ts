import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators'

@Injectable()
export class PushNotificationService {
    private url: string = 'https://onesignal.com/api/v1/notifications';

    constructor(private http: HttpClient) {}

    sendNotification(message) {
        const body = JSON.stringify(message);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic NTI5YmRkMTItYzBiNy00OTBlLTllYzYtY2E4Y2NkN2VjNWM0');
        return this.http.post(this.url, body, { headers: headers })
            .pipe(map((data: Response) => data.json()))
            // .catch(this.handleError);
    }

    private handleError (error: any) {
        return Observable.throw(error.json());
    }
}