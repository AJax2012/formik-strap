import React from 'react';
import { LabelProps as ReactstrapLabelProps } from 'reactstrap';
import './label.css';
declare type LabelProps = ReactstrapLabelProps & {
    children: JSX.Element | JSX.Element[] | string;
};
declare const Label: React.FC<LabelProps>;
export default Label;
