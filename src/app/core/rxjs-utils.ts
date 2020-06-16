import { Observable, throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export type shouldRetryFn = (error) => boolean;

interface RetryStrategyOptions {
  maxRetryAttempts?: number;
  scalingDuration?: number;
  shouldRetry?: shouldRetryFn;
}

const retryStrategyOptions: RetryStrategyOptions = {
  maxRetryAttempts: 3,
  scalingDuration: 1000,
  shouldRetry: (error) => error.error instanceof ErrorEvent
};

export const genericRetryStartegy = (params: RetryStrategyOptions = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const { maxRetryAttempts, scalingDuration, shouldRetry } = { ...params, ...retryStrategyOptions };
      const retryAttempt = i + 1;

      if (retryAttempt > maxRetryAttempts || !shouldRetry(error)) {
        return throwError(error);
      }

      return timer(retryAttempt * scalingDuration);
    })
  );
};
