import React from 'react';

import Header from './Header';
import Nav from './nav/Nav';

import styles from './Page.module.scss';

export default function Page(Component: React.ComponentType)  {
  const component = () => {
    return (
      <div className={styles.Page}>
        <Header />
        <div className={styles.navWrapper}>
          <Nav />
          <Component />
        </div>
      </div>
    );
  };

  return component;
}