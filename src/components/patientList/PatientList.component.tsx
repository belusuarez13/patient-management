import styles from './patient-list.module.scss';
import { PatientCard } from '../patientCard/PatientCard.component';
import { User } from '../../api/patients';

interface PatientsListProps {
  patients?: User[];
}

export const PatientList = ({ patients }: PatientsListProps) => {
  return (
    <div className={styles['list']}>
      {patients ? (
        patients?.map((patient) => <PatientCard patient={patient} />)
      ) : (
        <div>No Patients found</div>
      )}
    </div>
  );
};
