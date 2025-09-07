import React, { FC, useState } from 'react';
import TextInput from '../../common/text-input/text-input.component';
import { isValidEmail } from '../../../utils/email.util';
import Button, { ButtonVariants } from '../../common/button/button.component';

type SubscribeCardFormProps = {
  onSuccess: (email: string) => void;
};

const SubscribeCardForm: FC<SubscribeCardFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      onSuccess(email);
    }
  };

  return (
    <>
      <TextInput
        value={email}
        label="Email address"
        onValueChange={setEmail}
        placeholder="Input your e-mail address"
        inputValidator={isValidEmail}
        errorMessage="Valid email required"
      />

      <Button
        name="Subscribe to monthly newsletter"
        onClick={handleSubmit}
        variant={ButtonVariants.PRIMARY}
      />
    </>
  );
};

export default SubscribeCardForm;
