import React from 'react';

import { connect } from 'react-redux';
import { iRootState, Dispatch } from '../../store'
import { Link } from 'react-router-dom';


const mapState = (state: iRootState) => ({
  counter: state.counter,
});

const mapDispatch = (dispatch: any) => ({
  increment: dispatch.counter.increment,
  testingPurpose: dispatch.counter.testingPurpose,
})

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
// to include additional typings
// use `type Props = connectedProps & { ...additionalTypings }
type Props = connectedProps


class Home extends React.PureComponent<Props> {
  render() {
    const { props: { increment, counter, testingPurpose } } = this;

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <button onClick={() => increment(1)} style={{color: 'white', background: 'black'}}>{counter}</button>
            
            <Link to="/about">Go to about page</Link>
          </header>
        </div>
      </div>
    )
  }
}
export default connect(mapState, mapDispatch)(Home);