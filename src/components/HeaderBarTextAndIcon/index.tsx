import React, {FC, ReactNode} from 'react';
import {HeaderBarContainer} from '../HeaderBarContainer';

import LargeTitle from '../LargeTitle';

type THeaderBarBackTextAndIcon = {
  text: string;
  children: ReactNode;
};

export const HeaderBarTextAndIcon: FC<THeaderBarBackTextAndIcon> = ({
  text,
  children,
}) => {
  return (
    <HeaderBarContainer>
      <LargeTitle text={text} />
      {children}
    </HeaderBarContainer>
  );
};
