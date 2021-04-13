import React from 'react';
import Row from './Row';
import requests from './api/requests';

function Home() {
  return (
    <div className="Home">
      <h1>Tizen Proyect</h1>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}
export default Home;
