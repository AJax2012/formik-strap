# Formik-Strap

This library is intended to be an updated version of tools like [formstrap](https://github.com/pedox/formstrap), which combine [reactstrap](https://github.com/reactstrap/reactstrap) styles and components with the utilities of [formik](https://github.com/jaredpalmer/formik). This library currently uses reactstrap 9.1.4 (bootstrap v5.1.1) and formik v2.2.9. This library is built on TypeScript and carries over all of the properties of formik and reactstrap inputs.

I've created an example [GitHub repo](https://github.com/AJax2012/formik-strap-example), which is linked to a [codesandbox example](https://codesandbox.io/s/formik-strap-example-fj125y).

## Installation

To install the package:

`npm install bootstrap reactstrap formik formik-strap`

OR

`yarn add bootstrap reactstrap formik formik-strap`

## Usage

The basic usage is similar to how you would normally use formik:

```javascript
import React from 'react';
import { Form, Formik } from 'formik';
import { Field, Submit } from 'formik-strap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Formik
    initialValues={{ firstName: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      {*/ this will print the label as First Name */}
      <Field name="firstName" />
      <Submit withSpinner>Submit</Submit>
    </Form>
  <Formik>
);
```

The basic functionality also works for check boxes and radio buttons:

```javascript
import React from 'react';
import { Form, Formik } from 'formik';
import { Field, Submit } from 'formik-strap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Formik
    initialValues={{ terms: false }}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <Field type="checkbox" name="terms" />
      <Submit withSpinner>Submit</Submit>
    </Form>
  <Formik>
);
```

You may also completely customize how your input is displayed by setting the withTemplate property to false:

```javascript
import React from 'react';
import { Form, Formik } from 'formik';
import { Field, Submit } from 'formik-strap';
import { FormGroup, InputGroup, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Formik
    initialValues={{ username: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <FormGroup>
        <Label for="username">Username</Label>
        <InputGroup>
          <span className="input-group-text">@</span>

          {*/ Note: this will remove the label */}
          <Field name="firstName" withTemplate={false} />

        </InputGroup>
      </FormGroup>
      <Submit withSpinner>Submit</Submit>
    </Form>
  <Formik>
);
```
