import React from 'react';

import HomeNav from "../components/home/HomeNav";

const Home = (props) => {
  return (
    <main role="main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <HomeNav />
            <div>Promotions</div>
            <div className="hidden-sm-down">About</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;