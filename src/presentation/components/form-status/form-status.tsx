import React, { useContext } from 'react';
import Styles from './form-status-styles.scss';
import Spinner from '@/presentation/components/spinner/spinner';
import Context from '@/presentation/contexts/form/form-context';

const Footer: React.FC = () => {
  const { contextState } = useContext(Context);
  const { mainErrorMessage, isLoading } = contextState;

  return (
    <div className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainErrorMessage && (
        <span role="error-message" className={Styles.error}>
          {mainErrorMessage}
        </span>
      )}
    </div>
  );
};

export default Footer;
