import styles from './LightMode.module.css';
import { useEffect, useState } from 'react';

const LightMode = () => {
    const [isChecked, setIsChecked] = useState(true);

    const toggleTheme = (event) => {
      setIsChecked(event.target.checked);
      if (event.target.checked) {
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
      }
    };

  return (
    <label>
      <input className={styles.slider} type="checkbox" onChange={toggleTheme} checked={isChecked}/>
      <div className={styles.switch}>
        <div className={styles.suns} />
        <div className={styles.moons}>
          <div className={`${styles.star} ${styles['star-1']}`} />
          <div className={`${styles.star} ${styles['star-2']}`} />
          <div className={`${styles.star} ${styles['star-3']}`} />
          <div className={`${styles.star} ${styles['star-4']}`} />
          <div className={`${styles.star} ${styles['star-5']}`} />
          <div className={styles['first-moon']} />
        </div>
        <div className={styles.sand} />
        <div className={styles.bb8}>
          <div className={styles.antennas}>
            <div className={`${styles.antenna} ${styles['short']}`} />
            <div className={`${styles.antenna} ${styles['long']}`} />
          </div>
          <div className={styles.head}>
            <div className={`${styles.stripe} ${styles['one']}`} />
            <div className={`${styles.stripe} ${styles['two']}`} />
            <div className={styles.eyes}>
              <div className={`${styles.eye} ${styles['one']}`} />
              <div className={`${styles.eye} ${styles['two']}`} />
            </div>
            <div className={`${styles.stripe} ${styles['detail']}`}>
              <div className={`${styles.detail} ${styles['zero']}`} />
              <div className={`${styles.detail} ${styles['zero']}`} />
              <div className={`${styles.detail} ${styles['one']}`} />
              <div className={`${styles.detail} ${styles['two']}`} />
              <div className={`${styles.detail} ${styles['three']}`} />
              <div className={`${styles.detail} ${styles['four']}`} />
              <div className={`${styles.detail} ${styles['five']}`} />
              <div className={`${styles.detail} ${styles['five']}`} />
            </div>
            <div className={`${styles.stripe} ${styles['three']}`} />
          </div>
          <div className={styles.ball}>
            <div className={`${styles.lines} ${styles['one']}`} />
            <div className={`${styles.lines} ${styles['two']}`} />
            <div className={`${styles.ring} ${styles['one']}`} />
            <div className={`${styles.ring} ${styles['two']}`} />
            <div className={`${styles.ring} ${styles['three']}`} />
          </div>
          <div className={styles.shadow} />
        </div>
      </div>
    </label>
  );
};

export default LightMode;
