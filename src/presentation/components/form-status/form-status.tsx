import React, { useContext } from 'react';
import Styles from './form-status-styles.scss';
import Spinner from '@/presentation/components/spinner/spinner';
import Context from '@/presentation/contexts/form/form-context';

const Footer: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context);

  return (
    <div className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && (
        <span role="error-message" className={Styles.error}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Footer;
