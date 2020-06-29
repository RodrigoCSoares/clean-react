import React, { memo, useContext } from 'react';
import Styles from './input-styles.scss';
import Context from '@/presentation/contexts/form/form-context';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<Props> = (props: Props) => {
  const { contextState, setContextState } = useContext(Context);
  const error = contextState[`${props.name}ErrorMessage`];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setContextState({
      ...contextState,
      [event.target.name]: event.target.value,
    });
  };
  const getStatus = (): string => {
    return '🔴';
  };
  const getTitle = (): string => {
    return error;
  };

  return (
    <div className={Styles.inputWrap}>
      <input {...props} onChange={handleChange} />
      <span title={getTitle()} className={Styles.status}>
        {getStatus()}
      </span>
    </div>
  );
};

export default memo(Input);
