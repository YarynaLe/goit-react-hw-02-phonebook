import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 10px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;

  margin-bottom: 8px;

  color: #efefef;

  :nth-of-type(2n) {
    background-color: #ecf1f4;
  }
`;

export const ContactItem = styled.p`
  font-size: 20px;
  color: #4e4e4e;
`;

export const DeleteContactItem = styled.div`
  margin-left: 10px;
  cursor: pointer;

  color: #4e4e4e;
`;
