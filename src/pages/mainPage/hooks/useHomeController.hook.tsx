import { useEffect, useState } from "react";
import { usePatientsStore } from "../../../stores/Patients.store";
import { getPatientsList, User } from "../../../api/patients";
import { useQuery } from "@tanstack/react-query";

const CLOSED_MODAL = false;
const OPEN_MODAL = true;

interface HomeControllerInterface {
    isModalOpen: boolean;
    onModalOpen: () => void;
    onModalClose: () => void;
    isLoading: boolean;
    error: Error | null;
}

export const useHomeController: () => HomeControllerInterface = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(CLOSED_MODAL);
    const { onPatientsChange } = usePatientsStore();
    const {
        data: patients,
        error,
        isLoading,
      } = useQuery<User[], Error>({
        queryKey: ['patient-data'],
        queryFn: getPatientsList,
      });

    function onModalOpen(): void {
        setModalOpen(OPEN_MODAL)
      }
    
      function onModalClose(): void {
        setModalOpen(CLOSED_MODAL)
      }

      useEffect(() => {
        patients && onPatientsChange(patients);
      }, [patients])
    
    return {
        isModalOpen,
        onModalClose,
        onModalOpen,
        isLoading,
        error
    }
}