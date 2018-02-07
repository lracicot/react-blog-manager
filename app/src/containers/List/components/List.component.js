import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { List as ImmutableList, Map } from 'immutable';
import { default as UIList } from './List.component';
import { default as UIRow } from './Row.component';
import { default as UICell } from './Cell.component';
import Header from './Header.component';
import style from './List.component.scss';
import { listTypes } from '../../../consts';

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

  buildList(data, columns, order) {
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

      return (
        <UIRow
          key={item.get('id')}
        >
          {cells}
        </UIRow>
      );
    });

    return (
      <div className="backendui__list">
        <UIRow>
          {headers}
        </UIRow>
        {list}
      </div>
    );
  }

  render() {
    const { data, columns } = this.props;
    const { order } = this.state;

    return this.buildList(data, columns, order);
  }
}

List.propTypes = {
  data: PropTypes.instanceOf(ImmutableList).isRequired,
  columns: PropTypes.instanceOf(ImmutableList).isRequired,
  order: PropTypes.instanceOf(Map).isRequired,
};

List.defaultProps = {
};

export default List;
