import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Observer } from 'rxjs';
import { Message } from '../model/message';
import { Event } from '../model/event';

const SERVER_URL = 'wss://localhost:5001/ws';

@Injectable()
export class SocketService {
    private socket;

    public initSocket(): void {
        this.socket = new WebSocket(SERVER_URL);
    }

    public send(message: Message): void {
        console.log("send: " + message.content)
        this.socket.send(message.content);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.addEventListener('message', function (event) {
                console.log('Message from server ', event.data);
                observer.next({
                    from: {},
                    content: event.data
                } as Message);
            });
        });
    }

    public onEvent(event: Event): Observable<any> {
        console.log("onEvent");
        return of(null);
        // return new Observable<Event>(observer => {
        //     this.socket.on(event, () => observer.next());
        // });
    }
}