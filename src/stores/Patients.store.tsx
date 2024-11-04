import { create } from 'zustand';
import { User } from '../api/patients';

interface PatientsStore {
  patients: User[];
  onPatientsChange: (users: User[]) => void;
  onAddPatient: (user: User) => void;
  onUpdatePatient: (updatedUser: User) => void;
}

export const usePatientsStore = create<PatientsStore>((set) => ({
  patients: [],
  onPatientsChange: (patients: User[]) => set({ patients }),
  onAddPatient: (patient: User) =>
    set((state) => ({
      patients: [patient, ...state.patients],
    })),
    onUpdatePatient: (updatedPatient: User) =>
    set((state) => ({
      patients: state.patients.map((patient) =>
        patient.id === updatedPatient.id ? { ...patient, ...updatedPatient } : patient
      ),
    })),
}));
