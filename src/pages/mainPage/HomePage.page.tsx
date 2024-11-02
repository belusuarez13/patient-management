import { useQuery } from '@tanstack/react-query';
import { Loader, PatientList } from '../../components';

import styles from './home-page.module.scss';
import { getPatientsList, User } from '../../api/patients';

export const HomePage = () => {
  const {
    data: patients,
    error,
    isLoading,
  } = useQuery<User[], Error>({
    queryKey: ['patient-data'],
    queryFn: getPatientsList,
  });

  return (
    <div className={styles['home-container']}>
      <h1 className={styles['title']}>Patients</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>An error occurred fetching information</div>
      ) : (
        <PatientList patients={patients} />
      )}
    </div>
  );
};
