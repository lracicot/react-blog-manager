import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { List as ImmutableList, Map } from 'immutable';
import { default as UIRow } from './Row.component';
import { default as UICell } from './Cell.component';
import Header from './Header.component';
import style from './List.component.scss';
import { listTypes } from '../../consts';

/**
  * List - A component that show a list
  * @extends Component
  */
@autobind
class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { order: this.props.order };
  }

  sortAction(column, order) {
    this.setState({ order: Map({ column, order }) });
  }

  buildList(data, columns, order, handleDelete) {
    const headers = columns.map((col) => {
      let currentOrder = listTypes.sortedOrder.NONE;
      if (col.field === order.get('column')) {
        currentOrder = order.get('order');
      }

      return (
        <Header
          key={`header_${col.header}`}
          sortAction={this.sortAction}
          sortable
          sorted={currentOrder}
          columnName={col.field}
        >
          {col.header}
        </Header>
      );
    });

    const list = data.sort((a, b) => {
      if (a.get(order.get('column')) < b.get(order.get('column'))) {
        return order.get('order') === 'ASC' ? -1 : 1;
      }
      if (a.get(order.get('column')) > b.get(order.get('column'))) {
        return order.get('order') === 'ASC' ? 1 : -1;
      }
      return 0;
    }).map((item) => {
      const cells = columns.map(col => (
        <UICell key={`cell_${item.get('id')}_${col.field}`}>
          {item.get(col.field)}
        </UICell>
      ));

      const id = item.has('id') ? item.get('id') : 0;

      return (
        <UIRow
          key={id}
        >
          {cells}
          <UICell key={`cell_${id}_actions`}>
            <button className="btn btn-danger" onClick={() => { handleDelete(item.get('id')); }}>Delete</button>
            <a className="btn btn btn-default" href={`/posts/${item.get('id')}/edit`}>Edit</a>
          </UICell>
        </UIRow>
      );
    });

    return (
      <div className="backendui__list">
        <UIRow>
          {headers}
          <Header key="header_action">
            Actions
          </Header>
        </UIRow>
        {list}
      </div>
    );
  }

  render() {
    const { data, columns, handleDelete } = this.props;
    const { order } = this.state;

    return this.buildList(data, columns, order, handleDelete);
  }
}

List.propTypes = {
  data: PropTypes.instanceOf(ImmutableList).isRequired,
  columns: PropTypes.instanceOf(ImmutableList).isRequired,
  order: PropTypes.instanceOf(Map).isRequired,
  handleDelete: PropTypes.func,
};

List.defaultProps = {
  handleDelete: () => {},
};

export default List;
