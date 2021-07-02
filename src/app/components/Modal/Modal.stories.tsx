import React from 'react';
import Modal from './Modal';

export default {
  title: 'Component/Modal',
  component: Modal,
};

export const ModalComponent = (): JSX.Element => (
  <Modal open={true} onClose={console.log} />
);
