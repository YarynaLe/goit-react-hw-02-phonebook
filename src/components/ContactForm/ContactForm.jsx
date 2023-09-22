import React, { Component } from 'react';

import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  ErrMessage,
  FormWrap,
  FormInput,
  InputName,
  SubmitBtn,
} from 'components/ContactForm/ContactForm.styled';

const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberPattern =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = object().shape({
  name: string()
    .max(20)
    .matches(namePattern, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
    })
    .required(),
  number: string()
    .min(3)
    .matches(numberPattern, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
    })
    .required(),
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);

    resetForm();
  };

  render() {
    const { name, number } = this.state;

    return (
      <Formik
        initialValues={{ name, number }}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormWrap>
          <InputName>
            Name
            <FormInput autoComplete="off" type="text" name="name" />
          </InputName>

          <ErrMessage>
            <ErrorMessage name="name" />
          </ErrMessage>
          <InputName>
            Number
            <FormInput autoComplete="off" type="tel" name="number" />
          </InputName>

          <ErrMessage>
            <ErrorMessage name="number" component="div" />
          </ErrMessage>

          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </FormWrap>
      </Formik>
    );
  }
}

export default ContactForm;
