import React from 'react';
import {
  Label as ReactstrapLabel,
  LabelProps as ReactstrapLabelProps,
} from 'reactstrap';
import cn from 'classnames';
import './label.css';

type LabelProps = ReactstrapLabelProps & {
  children: JSX.Element | JSX.Element[] | string;
};

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => (
  <ReactstrapLabel className={cn('text-capitalize', className)} {...props}>
    {children}
  </ReactstrapLabel>
);

export default Label;
