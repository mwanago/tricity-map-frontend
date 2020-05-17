import React from 'react';
import useInputManagement from './useInputManagement';
import styles from './styles.module.scss';

const SearchInput = () => {
  const { handleChange } = useInputManagement();
  return (
    <div className={styles.wrapper}>
      <input
        onChange={handleChange}
        placeholder="Name"
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
