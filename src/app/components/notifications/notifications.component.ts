import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NotificationsService } from '@app/core';
import { Notification, NotificationType } from '@app/shared/models/Notification';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';

  private notificationSubscription: Subscription;
  private routeSubscription: Subscription;
  notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService, private router: Router) {}

  ngOnInit(): void {
    this.notificationSubscription = this.notificationsService.notificationInit(this.id).subscribe((notification: Notification) => {
      this.addNotification(notification);
    });

    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.notifications = this.notifications.filter((x) => x.persistOnNavigation);
      }
    });
  }

  private addNotification(notification: Notification): void {
    this.notifications.push(notification);
  }

  ngOnDestroy(): void {
    this.notificationSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  close(notification: Notification): void {
    this.notifications = this.notifications.filter((x) => x !== notification);
  }

  useClasses(notification: Notification): string {
    let classes = '';

    const cssClasses = {
      [NotificationType.success]: 'notification success',
      [NotificationType.error]: 'notification error',
      [NotificationType.warning]: 'notification warning',
      [NotificationType.info]: 'notification info'
    };

    classes = cssClasses[notification.type];

    return classes;
  }
}
