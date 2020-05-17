import Action from '../../shared/types/Action';

export type SearchAction = Action<'Search.SetValue', {
  value: string,
}>;

export const searchActions = {
  setValue(value: string): SearchAction {
    return {
      type: 'Search.SetValue',
      payload: {
        value,
      },
    };
  },
};

export default searchActions;
