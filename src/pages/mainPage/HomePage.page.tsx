import { Loader, PatientList, PatientModal } from '../../components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { strings } from '../../dictionary/strings';
import { useHomeController } from './hooks/useHomeController.hook';
import { Toaster } from 'react-hot-toast';

import styles from './home-page.module.scss';

export const HomePage = () => {
  const { isModalOpen, onModalClose, onModalOpen, error, isLoading } =
    useHomeController();

  return (
    <div className={styles['home-container']}>
      <Toaster />
      <PatientModal isOpen={isModalOpen} onClose={onModalClose} />
      <div className={styles['title-actions-container']}>
        <h1 className={styles['title']}>{strings.patients}</h1>
        <button
          className={styles['add-container']}
          title={strings.addPatient}
          onClick={onModalOpen}
        >
          {strings.addPatient}
          <AddCircleOutlineIcon
            fontSize="large"
            className={styles['add-icon']}
          />
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{strings.errorFetching}</div>
      ) : (
        <PatientList />
      )}
    </div>
  );
};
