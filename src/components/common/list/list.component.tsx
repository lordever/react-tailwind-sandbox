import React, { Children, FC, isValidElement, ReactElement } from 'react';
import ListItem from './list-item/list-item.component';

type ListProps = {
  children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem>[];
};

const List: FC<ListProps> = ({ children }) => {
  Children.forEach(children, (child) => {
    if (!isValidElement(child) || child.type !== ListItem) {
      throw new Error('List can only contain <ListItem> as children');
    }
  });

  return <ul className="flex flex-col gap-2">{children}</ul>;
};

export default List;
