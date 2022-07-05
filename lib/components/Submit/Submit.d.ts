import React from 'react';
import { ButtonProps } from 'reactstrap';
declare type SubmitProps = ButtonProps & {
    withLoading?: boolean;
    withSpinner?: boolean;
};
declare const Submit: React.FC<SubmitProps>;
export default Submit;
