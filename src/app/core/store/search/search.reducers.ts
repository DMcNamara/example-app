// this should prolly be a subfolder inside book -d

import { createSelector } from 'reselect';
import * as book from '../books/book.actions';


export interface State {
  ids: string[];
  loading: boolean;
  query: string;
};

const initialState = {
  ids: <string[]>[],
  loading: false,
  query: ''
};

export function reducer(state = initialState, action: book.Actions): State {
  switch (action.type) {
    case book.SEARCH: {
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          loading: false,
          query
        };
      }

      return Object.assign({}, state, {
        query,
        loading: true
      });
    }

    case book.SEARCH_COMPLETE: {
      const books = action.payload;

      return {
        ids: books.map(book => book.id),
        loading: false,
        query: state.query
      };
    }

    default: {
      return state;
    }
  }
}


export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;
