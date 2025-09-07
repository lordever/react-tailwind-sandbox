import React, { useState } from 'react';
import Card from '../common/card/card.component';
import TextInput from '../common/text-input/text-input.component';
import { isValidEmail } from '../../utils/email.util';
import Button, { ButtonVariants } from '../common/button/button.component';
import List from '../common/list/list.component';
import ListItem from '../common/list/list-item/list-item.component';

const SubscribeCard = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="flex items-center justify-center w-full h-full">
      <Card>
        <div className="flex flex-row gap-16">
          {/*Left section*/}
          <div className="flex flex-col gap-8">
            <h1 className="text-preset-1">Stay updated!</h1>
            <p className="text-preset-2">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <List>
              <ListItem>Product discovery and building what matters</ListItem>
              <ListItem>Measuring to ensure updates are a success</ListItem>
              <ListItem>And much more!</ListItem>
            </List>

            <TextInput
              value={email}
              label={'Email address'}
              onValueChange={setEmail}
              placeholder="Input your e-mail address"
              inputValidator={isValidEmail}
              errorMessage="Valid email required"
            />

            <Button
              name="Subscribe to monthly newsletter"
              onClick={() => {}}
              variant={ButtonVariants.PRIMARY}
            />
          </div>

          {/*Right section*/}
          <img src="/Banner.png" alt="banner" className="w-[400px] h-[593px]" />
        </div>
      </Card>
    </section>
  );
};

export default SubscribeCard;
