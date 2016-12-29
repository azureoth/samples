// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment } from '../model/comment';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChatService {
    // private instance variable to hold base url
    private url = 'http://azureothrestfuldbsample.azurewebsites.net/api/apps/demoapp/';

    // Resolve HTTP using the constructor
    constructor(private http: Http) { }

    getChannels(): Observable<any[]> {
        return this.http.get(this.url + 'channels')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    createChannel(channel) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url + 'channels/', channel, options).toPromise();
    }

    getMessages(channelId): Observable<any[]> {
        return this.http.get(this.url + 'channels/' + channelId + '/messages')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    sendMessage(message) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url + 'messages/', message, options).toPromise();
    }
}