import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
let PushNotificationService = class PushNotificationService {
    constructor(http) {
        this.http = http;
        this.url = 'https://onesignal.com/api/v1/notifications';
    }
    sendNotification(message) {
        const body = JSON.stringify(message);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic NTI5YmRkMTItYzBiNy00OTBlLTllYzYtY2E4Y2NkN2VjNWM0');
        return this.http.post(this.url, body, { headers: headers })
            .pipe(map((data) => data.json()));
        // .catch(this.handleError);
    }
    handleError(error) {
        return Observable.throw(error.json());
    }
};
PushNotificationService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], PushNotificationService);
export { PushNotificationService };
//# sourceMappingURL=pushnotification.servics.js.map