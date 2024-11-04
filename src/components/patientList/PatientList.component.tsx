import styles from './patient-list.module.scss';
import { PatientCard } from '../patientCard/PatientCard.component';
import { usePatientsStore } from '../../stores/Patients.store';
import { strings } from '../../dictionary/strings';

export const PatientList = () => {
  const { patients } = usePatientsStore();

  return (
    <div className={styles['list']}>
      {patients && patients.length > 0 ? (
        patients?.map((patient) => <PatientCard patient={patient} />)
      ) : (
        <div>{strings.noPatientsFound}</div>
      )}
    </div>
  );
};
