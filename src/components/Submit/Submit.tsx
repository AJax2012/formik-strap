import { useFormikContext } from 'formik';
import React from 'react';
import { Button, ButtonProps, Spinner } from 'reactstrap';

type SubmitProps = ButtonProps & {
  withLoading?: boolean;
  withSpinner?: boolean;
};

const Submit: React.FC<SubmitProps> = ({
  withLoading,
  withSpinner,
  ...props
}) => {
  const { isSubmitting } = useFormikContext();
  let disabled = withLoading && isSubmitting;

  if (props.disabled) {
    disabled = true;
  }

  return (
    <Button type="submit" {...props} disabled={disabled}>
      {withSpinner && isSubmitting && <Spinner size="sm" className="me-2" />}
      {props.children}
    </Button>
  );
};

Submit.defaultProps = {
  color: 'primary',
  withLoading: true,
};

export default Submit;
