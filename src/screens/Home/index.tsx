import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { withTranslation } from "react-i18next";
import i18n from 'i18next';

// local
import { iRootState } from '../../store'

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
type Props = connectedProps & { t: i18n.TFunction }

class Home extends React.PureComponent<Props> {
  render() {
    const { props: { increment, counter, t } } = this;

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1>{t('Welcome')}</h1>
            <Button type="primary" onClick={() => increment(1)}>{counter}</Button>
            
            <Link to="/about">{t('Go to about page')}</Link>
          </header>
        </div>
      </div>
    )
  }
}

// @ts-ignore
export default connect(mapState, mapDispatch)(withTranslation()(Home));