import { useState } from 'react';

const useModalHook = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  return [modalVisible, handleModal];
};

export default useModalHook;
