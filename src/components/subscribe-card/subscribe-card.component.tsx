import React, {FC} from 'react';
import Card from '../common/card/card.component';
import List from '../common/list/list.component';
import ListItem from '../common/list/list-item/list-item.component';
import SubscribeCardForm from './form/subscribe-card-form.component';

type SubscribeCardProps = {
  onSuccessForm: (email: string) => void;
}

const SubscribeCard: FC<SubscribeCardProps> = ({onSuccessForm}) => {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <Card>
        <div className="flex flex-col-reverse lg:flex-row gap-16">
          {/*Content section*/}
          <div className="flex flex-col gap-8 px-6 py-8 md:px-0 md:py-0">
            <h1 className="text-preset-1">Stay updated!</h1>
            <p className="text-preset-2">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <List>
              <ListItem>Product discovery and building what matters</ListItem>
              <ListItem>Measuring to ensure updates are a success</ListItem>
              <ListItem>And much more!</ListItem>
            </List>

            <SubscribeCardForm onSuccess={onSuccessForm} />
          </div>

          {/*Banner section*/}
          <img
            src="/Banner.png"
            alt="banner"
            className="hidden lg:block w-[400px] h-[593px]"
          />
          <img
            src="/Banner-tablet.png"
            alt="banner"
            className="hidden md:block lg:hidden w-[528px] h-[358px]"
          />
          <img
            src="/Banner-mobile.png"
            alt="banner"
            className="block md:hidden w-full h-[284px]"
          />
        </div>
      </Card>
    </section>
  );
};

export default SubscribeCard;
