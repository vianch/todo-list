import React from 'react';
import PropTypes from 'prop-types';

const List = ({ todoList }) => {
  return (
    <ul>
      {todoList.length === 0 && (
        <li>EMPTY TODO</li>
      )}

      {todoList.map((itemList, key) => (
        <li key={`item_${key}`}>{itemList}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
  todoList: [],
};

export default List;

