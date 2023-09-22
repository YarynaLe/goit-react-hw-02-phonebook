import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const ErrMessage = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 10px 0;
  font-size: 10px;
  color: red;
`;

export const FormWrap = styled(Form)`
  padding: 20px 40px 35px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const FormInput = styled(Field)`
  font-size: 20px;
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  font-size: 16px;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 20px;

  cursor: pointer;

  font-size: 26px;
`;
