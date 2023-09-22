import { FilterInput } from 'components/Filter/Filter.styled';

export const Filter = ({ value, onChange }) => (
  <label>
    <FilterInput type="text" value={value} onChange={onChange} />
  </label>
);
