import { GoXCircle } from 'react-icons/go';

import {
  ListItem,
  DeleteContactItem,
  ContactItem,
} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem key={id}>
      <ContactItem>
        {name}: {number}
      </ContactItem>

      <DeleteContactItem onClick={() => onDelete(id)}>
        <GoXCircle size={20} color={'red'} />
      </DeleteContactItem>
    </ListItem>
  );
};
