import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const AddList = ({ onAddList }) => {
  const [listItem, setListItem] = useState('');
  const inputHandler = event => {
    const inputValue = get(event, 'target.value', '');
    setListItem(inputValue);
  };

  const enterHandler = event => {
    if (event.key === 'Enter') {
      addHandler();
    }
  };

  const addHandler = () => {
    onAddList(listItem);
    setListItem('');
  }

  return (
    <div>

      <input type="text" value={listItem} onChange={inputHandler} onKeyUp={enterHandler} />
      <button type="button" onClick={addHandler}> Add </button>
    </div>
  );
};

AddList.propTypes = {
  onAddList: PropTypes.func.isRequired,
};

export default AddList;
