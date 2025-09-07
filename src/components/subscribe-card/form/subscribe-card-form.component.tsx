import React, { FC, useState } from 'react';
import EmailTextInput from '../../common/text-input/text-input.component';
import { isValidEmail } from '../../../utils/email.util';
import Button, { ButtonVariants } from '../../common/button/button.component';

type SubscribeCardFormProps = {
  onSuccess: (email: string) => void;
};

const SubscribeCardForm: FC<SubscribeCardFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState<string>("");
  const [formValid, setFormValid] = useState(true);

  const handleChange = (value: string) => {
    setEmail(value);
    setFormValid(isValidEmail(value));
  };

  const handleSubmit = () => {
    if (formValid && email) {
      onSuccess(email);
      setEmail('');
    } else {
      setFormValid(isValidEmail(email));
    }
  };

  return (
    <>
      <EmailTextInput
        value={email || ''}
        label="Email address"
        onValueChange={handleChange}
        placeholder="Input your e-mail address"
        valid={formValid}
        errorMessage="Valid email required"
      />

      <Button
        name="Subscribe to monthly newsletter"
        onClick={handleSubmit}
        variant={formValid ? ButtonVariants.PRIMARY : ButtonVariants.SECONDARY}
      />
    </>
  );
};

export default SubscribeCardForm;
