import React, { useState, useEffect } from 'react';
import Styles from './login-styles.scss';
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components';
import Context from '@/presentation/contexts/form/form-context';
import { Validation } from '@/presentation/pages/protocols/validation';

type Props = {
  validation: Validation;
};

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [contextState, setContextState] = useState({
    isLoading: false,
    email: '',
    emailErrorMessage: 'Campo obrigatório',
    passwordErrorMessage: 'Campo obrigatório',
    mainErrorMessage: '',
  });

  useEffect(() => {
    validation.validate({ email: contextState.email });
  }, [contextState.email]);

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ contextState, setContextState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button className={Styles.submit} type="submit" disabled>
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
