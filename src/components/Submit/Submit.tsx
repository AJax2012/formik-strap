import { useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import { Button, ButtonProps, Spinner } from 'reactstrap';

type SubmitProps = ButtonProps & {
  withLoading?: boolean;
  withSpinner?: boolean;
};

const Submit: React.FC<SubmitProps> = ({
  disabled,
  withLoading,
  withSpinner,
  ...props
}) => {
  const { isSubmitting } = useFormikContext();

  const isDisabled = useMemo(() => {
    if (disabled) {
      return true;
    }

    return withLoading && isSubmitting;
  }, [disabled, withLoading, isSubmitting]);

  return (
    <Button type="submit" {...props} disabled={isDisabled}>
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
