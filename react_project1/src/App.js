import { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from '../src/Store/store';
import CounterRedex from './components/CounterRedex';

class App extends Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <CounterRedex />
        </Provider>
      </>
    )
  }
}

export default App;




// import { connect } from 'react-redux';
// import { Component } from 'react';
// import { incCounter } from './Store/actions';

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <>
//         <div>{this.props.count}</div>
//         <button onClick={() => this.props.incCount(this.props.count + 1)}>Inc</button>
//         <button onClick={() => this.props.incCount(this.props.count - 1)}>Dec</button>
//       </>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return { count: state.count };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     incCount: (payload) => dispatch(incCounter(payload)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
