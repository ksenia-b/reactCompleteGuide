import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './ExpenseFilter.css';

const ExpenseFilter = ( props ) => {
  const [year1, setYear] = useState('2022');

  const onHandleSeyYear = (event) => {
    console.log(event.target.value)
    props.onAddFilter(event.target.value)
    setYear();
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={onHandleSeyYear} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
    
      </div>
    </div>
  );
};

ExpenseFilter.props = {
  onAddFilter: PropTypes.func,
}

export default ExpenseFilter;