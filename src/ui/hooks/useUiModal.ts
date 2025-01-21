import { store } from '@/store/store';
import { useStore } from '@tanstack/react-store';
import React from 'react'

const useUiModal = () => {

    let isDateModalOpen = useStore(store, (state) => state['isDateModalOpen']);


    const openDateModal = () => {
        store.setState((state) => {
            return { ...state, isDateModalOpen: true };
        });
    }


    const closeDateModal = () => {
        store.setState((state) => {
            return { ...state, isDateModalOpen: false };
        });
    }

    const toggleDateModal = () => ( isDateModalOpen ) ? closeDateModal() : openDateModal();

    return {
        //Propiedades
        isDateModalOpen,

        //Metodos
        openDateModal,
        closeDateModal,
        toggleDateModal
    }
}

export default useUiModal