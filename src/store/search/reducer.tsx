import { defaultSearchState, SearchState } from './state';
import { SearchAction } from './actions';

const searchReducer = (
  state: SearchState = defaultSearchState,
  action: SearchAction,
) => {
  switch (action.type) {
    case 'Search.SetValue':
      const { value } = action.payload;
      return {
        ...state,
        value,
      };
    default:
      return state;
  }
};

export default searchReducer;
