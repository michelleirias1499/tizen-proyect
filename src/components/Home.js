import React from 'react';
import Row from './Row';
import requests from '../api/requests';
import Banner from '../components/Banner';

function Home() {
  return (
    <div className="Home">
      {/* NAV */}
      {/* BANNER */}
      <Banner />
      {/* VIDEO ROWS */}
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}
export default Home;
