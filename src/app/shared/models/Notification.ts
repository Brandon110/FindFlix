export class Notification {
  public id: string;
  public type: NotificationType;
  public persistOnNavigation: boolean;
  public timeout: number;
  public message: string;

  constructor(init?: Partial<Notification>) {
    Object.assign(this, init);
  }
}

export enum NotificationType {
  success,
  info,
  error,
  warning
}
