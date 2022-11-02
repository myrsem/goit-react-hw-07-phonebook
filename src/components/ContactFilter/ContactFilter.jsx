import { useSelector, useDispatch } from 'react-redux';
import { filter } from 'redux/filter';
import { FilterContainer, FilterText, FilterInput } from './ContactFilter.styled';

const ContactFilter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
      <FilterContainer>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          value={filterValue}
          onChange={e => dispatch(filter(e.currentTarget.value.trim()))}
        />
      </FilterContainer>
  );
};

export default ContactFilter;