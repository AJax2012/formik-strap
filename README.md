# Formik-Strap

This library is intended to be an updated version of tools like formstrap, which combine reactstrap styles and components with the utilities of formik. This library currently uses reactstrap 9.1.1 (bootstrap v5.1.1) and formik v2.2.9. This library is built on TypeScript and carries over all of the properties of formik and reactstrap inputs.

## Installation

To install the package:

`npm install bootstrap reactstrap formik formik-strap`

OR

`yarn add bootstrap reactstrap formik formik-strap`

## Usage

The basic usage is similar to how you would normally use formik:

```javascript
import React from 'react';
import { Formik } from 'formik';
import { Field } from 'formik-strap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Formik
    initialValues={{ firstName: '' }}
    onSubmit={(values) => console.log(values)}
  >
    {*/ this will print the label as First Name */}
    <Field name="firstName" />
    <Submit withSpinner>Submit</Submit>
  <Formik>
);
```

The basic functionality also works for check boxes and radio buttons:

```javascript
import React from 'react';
import { Formik } from 'formik';
import { Field } from 'formik-strap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Formik
    initialValues={{ firstName: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <Field type='checkbox' name="firstName" />
    <Submit withSpinner>Submit</Submit>
  <Formik>
);
```

You may also completely customize how your input is displayed by setting the withTemplate property to false:

```javascript
import React from 'react';
import { Formik } from 'formik';
import { Field } from 'formik-strap';
import { FormGroup, InputGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Formik
    initialValues={{ username: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <FormGroup>
      <Label for="username">Username</Label>
      <InputGroup>
        <span className="input-group-text">@</span>

        {*/ Note: this will remove the label */}
        <Field name="firstName" withTemplate={false} />

      </InputGroup>
    </FormGroup>
    <Submit withSpinner>Submit</Submit>
  <Formik>
);
```
