import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import { User } from '../../api/patients';

import styles from './patient-card.module.scss';
import { strings } from '../../dictionary/strings';
import { PatientModal } from '../modals/patientModal/PatientModal.component';

const CLOSED = false;
const OPEN_MODAL = true;

interface PatientCardProps {
  patient: User;
}

export const PatientCard = ({ patient }: PatientCardProps) => {
  const [isCardExpanded, setIsCardExpanded] = useState<boolean>(CLOSED);
  const [isModalOpen, setModalOpen] = useState<boolean>(CLOSED);

  function onOpenModal(): void {
    setModalOpen(OPEN_MODAL);
  }

  function onCloseModal(): void {
    setModalOpen(CLOSED);
  }

  function onCardDeatilsClick() {
    setIsCardExpanded((current) => !current);
  }

  return (
    <div className={styles['card']} key={patient.id}>
      <PatientModal
        patient={patient}
        isOpen={isModalOpen}
        onClose={onCloseModal}
      />
      <div className={styles['name-actions-container']}>
        <div className={styles['name']}>{patient.name}</div>
        <EditIcon
          onClick={onOpenModal}
          className={styles['edit-icon']}
          titleAccess={strings.editPatient}
        />
      </div>
      <img
        className={styles['image']}
        src={patient.avatar}
        alt={strings.patientImage}
      />
      <a className={styles['website']}>{patient.website}</a>
      <a className={styles['date']}>
        {new Date(patient.createdAt).toDateString()}
      </a>
      <div className={styles['actions']} onClick={onCardDeatilsClick}>
        {isCardExpanded ? strings.viewLess : strings.viewMore}
        {isCardExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      {isCardExpanded && (
        <div className={styles['details']}>{patient.description}</div>
      )}
    </div>
  );
};
