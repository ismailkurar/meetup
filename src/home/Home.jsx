import React from 'react';

import Page from '../components/Page';

const Home = ({ history }) => (
  <Page title="React Hooks">
    <button onClick={() => { history.push('hooks') }}>Start</button>
  </Page>
);

export default Home;
