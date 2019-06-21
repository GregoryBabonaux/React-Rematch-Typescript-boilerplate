import React from 'react';
import * as Sentry from '@sentry/browser';


type Props = {

}

type State = {

}

/**
 * ErrorBoundary
 */
class ErrorBoundary extends React.Component<Props, State> {
  state = { error: null };

  componentDidCatch(error:any) {
    this.setState({ error });
    Sentry.captureException(error);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          className="snap"
          onClick={() => Sentry.lastEventId() && Sentry.showReportDialog()}
        >
          <p>Quelqu'un a fait une boulette quelque part</p>
          <p>Des investigations sont en cours pour retrouver les coupables</p>
        </div>
      );
    } else {
      //when there's not an error, render children untouched
      return this.props.children;
    }
  }
}

export default ErrorBoundary;