import styles from './patient-list.module.scss';
import { PatientCard } from '../patientCard/PatientCard.component';

export const PatientList = () => {
  return (
    <div className={styles['list']}>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1, 1,
        1, 1, 1, 1, 1, 1,
      ].map(() => (
        <PatientCard />
      ))}
    </div>
  );
};
