import { createAction, props } from '@ngrx/store';

export const addToCache = createAction('[Cache] Add to Cache', props<{ key: string, value: any }>());
