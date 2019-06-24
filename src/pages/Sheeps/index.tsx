import React from 'react';

import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";
import i18n from 'i18next';

// local
import { iRootState } from 'store';
import H1 from 'atoms/H1';
import { SheepType } from 'store/models/sheep';

const mapState = (state: iRootState) => ({
  sheeps: state.sheep.sheeps,
  loading: state.loading.effects.sheep.getSheeps,
});

const mapDispatch = (dispatch: any) => ({
  getSheeps: dispatch.sheep.getSheeps,
})

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
type Props = connectedProps & { t: i18n.TFunction }

type State = {
  error: Boolean
}

class Sheeps extends React.PureComponent<Props, State> {

  componentDidMount() {
    this.props.getSheeps();
  }

  render() {
    const { props: { sheeps, loading } } = this;
    return (
      <div>
        <H1 color="000">Sheeps</H1>

        {
          loading ? (
            <div>Chargement des moutons, veuillez patienbééééééééééééé</div>
          ) :
          (
            <ul>
              {sheeps && sheeps.map((sheep: SheepType, key: number) => (
                <li key={key}>{sheep.name}</li>
              ))}
            </ul>
          )
        }
      </div>
    )
  }
}

// @ts-ignore
export default connect(mapState, mapDispatch)(withTranslation()(Sheeps));