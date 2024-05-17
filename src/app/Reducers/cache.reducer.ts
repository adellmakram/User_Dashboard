import { createReducer, on } from '@ngrx/store';
import { addToCache } from './cache.actions';

export interface CacheState {
  [key: string]: any;
}

const initialState: CacheState = {};

export const cacheReducer = createReducer(
  initialState,
  on(addToCache, (state, { key, value }) => ({
    ...state,
    [key]: value
  }))
);
