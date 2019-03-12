import React from 'react';
import { connect } from 'react-redux';
import { pullPlayerData } from '../actions/pgaTourPlayerAction';
import ReactTable from 'react-table';

const Promise = global.Promise;

const mapStateToProps = state => ({
  dustinJohnson: state.pgaTourPlayerReducer.dustinJohnson
});

const mapDispatchToProps = dispatch => ({
  pullPlayerData: (id) => {
    dispatch(pullPlayerData(id))
  }
});

class Home extends React.Component {
  componentWillMount() {
    this.props.pullPlayerData('30925');
  }

  render() {
    const data = [{
      name: 'Tanner Linsley',
      age: 26
    }];
   
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age'
    }];
   
    return (
      <ReactTable
      data={data}
      columns={columns}
    />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
