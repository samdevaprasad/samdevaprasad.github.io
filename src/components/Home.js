import React from 'react';
import { connect } from 'react-redux';
import LazyHero from 'react-lazy-hero';
import { pullPlayerData } from '../actions/pgaTourPlayerAction';
import '../main.css';
import Footer from './Footer';

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
    return(<div>
      <LazyHero opacity={0} minHeight='60vh' parallaxOffset={100} imageSrc="https://www.golfchannel.com/sites/default/files/styles/lede/public/2016/02/16/gilmore_1920.jpg?itok=NmVu23OU">
      <div className="fancy-label">Cream Jacket Leaderboard</div>
      </LazyHero>
      <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3>
      <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3>
      <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3>
      <h3>asddsam</h3>
      <h3>asddsam</h3> <h3>asddsam</h3>
      <h3>asddsam</h3> <h3>asddsam</h3>
      <h3>asddsam</h3> <h3>asddsam</h3>
      <h3>asddsam</h3> <h3>asddsam</h3>
      <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3> <h3>asddsam</h3>
      <h3>asddsam</h3>
      <h3>asddsam</h3>
      <h3>asddsam</h3>
      <h3>asddsam</h3>
      <h3>asddsam</h3>
      <h3>asddsam</h3>
      <h3>asddsam</h3>
      <Footer />
  </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
