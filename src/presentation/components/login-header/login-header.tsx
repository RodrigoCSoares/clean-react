import React, { memo } from 'react';
import Styles from './login-header-styles.scss';
import Logo from '@/presentation/components/logo/logo';

type Props = React.HTMLAttributes<HTMLElement>;

const LoginHeader: React.FC<Props> = (props: Props) => {
  return (
    <header className={[Styles.header, props.className].join(' ')}>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
  );
};

export default memo(LoginHeader);
