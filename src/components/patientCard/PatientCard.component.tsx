import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import styles from './patient-card.module.scss';
import { User } from '../../api/patients';

const CLOSED_CARD = false;
const VIEW_MORE = 'View More';
const VIEW_LESS = 'View Less';

interface PatientCardProps {
  patient: User;
}

export const PatientCard = ({ patient }: PatientCardProps) => {
  const [isCardExpanded, setIsCardExpanded] = useState<boolean>(CLOSED_CARD);

  function onCardDeatilsClick() {
    setIsCardExpanded((current) => !current);
  }

  return (
    <div className={styles['card']}>
      <div className={styles['name']}>{patient.name}</div>
      <img
        className={styles['image']}
        src={patient.avatar}
        alt="Patient Image"
      />
      <a className={styles['website']}>{patient.website}</a>
      <a className={styles['date']}>
        {new Date(patient.createdAt).toDateString()}
      </a>
      <div className={styles['actions']} onClick={onCardDeatilsClick}>
        {isCardExpanded ? VIEW_LESS : VIEW_MORE}
        {isCardExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      {isCardExpanded && (
        <div className={styles['details']}>{patient.description}</div>
      )}
    </div>
  );
};
