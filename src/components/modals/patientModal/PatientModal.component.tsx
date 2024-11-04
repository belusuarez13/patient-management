import React, { useState } from 'react';
import styles from './patient-modal.module.scss';
import { User } from '../../../api/patients';
import { usePatientsStore } from '../../../stores/Patients.store';
import { strings } from './strings';
import { LabelInput } from '../../index';
import { TEXTAREA_TYPE } from '../../input/LabelInput.component';
import toast from 'react-hot-toast';

const emptyUser: User = {
  name: '',
  website: '',
  description: '',
  avatar: '',
  id: '',
  createdAt: new Date().toISOString()
}

interface ModalProps {
  patient?: User;
  isOpen: boolean;
  onClose: () => void;
}

export const PatientModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  patient
}) => {
  const [formData, setFormData] = useState<User>(patient || emptyUser);
  const { onAddPatient, onUpdatePatient} = usePatientsStore();

  function onValueChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (patient) {
      onUpdatePatient(formData);
      toast.success(strings.patientUpdated)
    } else {
      onAddPatient(formData);
      toast.success(strings.patientAdded)
    }
    onClose();
  }

  return isOpen ? (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <button className={styles['close-button']} onClick={onClose}>
          &times;
        </button>
        <h2>{patient ? strings.updatePatient : strings.addPatient}</h2>
        <form onSubmit={onSubmit}>
          <LabelInput label={strings.name} type="text" value={formData.name} name='name' onValueChange={onValueChange} />
          <LabelInput label={strings.website} type="url" value={formData.website} name='website' onValueChange={onValueChange} />
          <LabelInput label={strings.description} type={TEXTAREA_TYPE} value={formData.description} name='description' onValueChange={onValueChange} />
          <LabelInput label={strings.avatar} type="url" value={formData.avatar} name='avatar' onValueChange={onValueChange} />
          <button type="button" className={styles['cancel-button']} onClick={onClose}>{strings.cancel}</button>
          <button type="submit" className={styles['button']}>{strings.save}</button>
        </form>
      </div>
    </div>
  ) : (
    null
  );
};
