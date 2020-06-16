import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Notification, NotificationType } from '@app/shared/models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private subject = new Subject<Notification>();
  private defaultId = 'default-alert';

  constructor() {}

  notificationInit(id: string = this.defaultId): Observable<Notification> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  }

  sendSuccess(message: string, options?: any) {
    this.notify(new Notification({ ...options, type: NotificationType.success, message }));
  }

  sendInfo(message: string, options?: any) {
    this.notify(new Notification({ ...options, type: NotificationType.info, message }));
  }

  sendError(message: string, options?: any) {
    this.notify(new Notification({ ...options, type: NotificationType.error, message }));
  }

  sendWarning(message: string, options?: any) {
    this.notify(new Notification({ ...options, type: NotificationType.warning, message }));
  }

  notify(notification: Notification) {
    notification.id = notification.id || this.defaultId;

    this.subject.next(notification);
  }
}
