import { PatientList } from '../../components';

import styles from './home-page.module.scss';

export const HomePage = () => {
  return (
    <div className={styles['home-container']}>
      <h1 className={styles['title']}>Patients</h1>
      <PatientList />
    </div>
  );
};
