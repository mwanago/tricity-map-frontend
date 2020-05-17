import React from 'react';
import List from './components/List';
import styles from './styles.module.scss';
import Map from './components/Map';

function App() {
  return (
    <div className={styles.wrapper}>
      <List/>
      <Map/>
    </div>
  );
}

export default App;
