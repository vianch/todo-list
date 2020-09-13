import React from 'react';
import PropTypes from 'prop-types';

const List = ({ todoList }) => {
  return (
    <ul>
      {todoList.length === 0 && (
        <li>EMPTY TODO</li>
      )}

      {todoList.map(itemList => (
        <li key={`item_${itemList.id}`}>{itemList.task}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    task: PropTypes.string,
  })),
};

List.defaultProps = {
  todoList: [],
};

export default List;

