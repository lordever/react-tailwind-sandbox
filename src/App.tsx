import React, { useCallback, useState } from 'react';
import './App.css';
import SubscribeCard from './components/subscribe-card/subscribe-card.component';
import Modal from './components/common/modal/modal.component';
import { ButtonVariants } from './components/common/button/button.component';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleSuccessForm = useCallback((email: string) => {
    setShowModal(true);
    setEmail(email);
  }, [setShowModal]);

  return (
    <>
      <SubscribeCard onSuccessForm={handleSuccessForm} />

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Thanks for subscribing!"
        description={`A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.`}
        buttonText="Dismiss message"
        buttonVariant={ButtonVariants.PRIMARY}
        onButtonClick={() => {
          setShowModal(false);
        }}
      />
    </>
  );
}

export default App;
