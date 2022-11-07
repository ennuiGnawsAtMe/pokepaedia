'use client';

import Select from 'react-select'
import { goToTop, sortByRating } from '../../lib/funcs.js'

const SearchBy = ({ setDropdown }) => {
  const options = [
    {Value: 'ability', label: 'Ability'},
    {Value: 'colour', label: 'Colour'},
    {Value: 'habitat', label: 'habitat'},
    {Value: 'name', label: 'Name'},
    {Value: 'ranking', label: 'Ranking'},
    {Value: 'shape', label: 'Shape'},
    {Value: 'status', label: 'Status'},
    {Value: 'type', label: 'Type'}
  ]

  const customStyles = {
    container: (styles, state) => ({ 
      ...styles,
      width: '100%', 
      height: '70px',
    }),
    input: (styles, state) => ({
      ...styles,
      color: 'green'
    }),
    placeholder: (styles, state) => ({
      ...styles,
      textAlign: 'right',
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '1.8rem'
    }),
    control: (styles, state) => ({
       ...styles, 
       height: '100%',
       border: state.isFocussed ? 'none' : 'none'
      })
  }

  const changeHandler = (value) => {
    goToTop()
    setDropdown(value)
  }

return (
  <>
    <Select
          placeholder={`Search Pokémon By ...`}
          maxMenuHeight={600}
          styles={customStyles}
          options={options}
          instanceId="search-by"
          onChange={event => changeHandler(event.value)}
          // blurInputOnClear={true}
          // focusInputOnMenuOpen={false}
        />
  </>
)
}

export default SearchBy