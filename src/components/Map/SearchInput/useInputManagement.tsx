import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import searchActions from '../../../store/search/actions';
import { useDebouncedCallback } from 'use-debounce';

function useInputManagement() {
  const dispatch = useDispatch();
  const [debouncedCallback] = useDebouncedCallback(
    (value: string) => {
      dispatch(searchActions.setValue(value));
    },
    250,
  );
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      debouncedCallback(event.target.value.toLowerCase());
    },
    [debouncedCallback],
  );
  return {
    handleChange,
  };
}

export default useInputManagement;
