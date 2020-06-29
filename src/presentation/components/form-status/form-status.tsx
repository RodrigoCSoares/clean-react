import React, { useContext } from 'react';
import Styles from './form-status-styles.scss';
import Spinner from '@/presentation/components/spinner/spinner';
import Context from '@/presentation/contexts/form/form-context';

const Footer: React.FC = () => {
  const { state, errorState } = useContext(Context);

  return (
    <div className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && (
        <span role="error-message" className={Styles.error}>
          {errorState.main}
        </span>
      )}
    </div>
  );
};

export default Footer;
