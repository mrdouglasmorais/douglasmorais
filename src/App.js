import React from 'react';
import Home from './components/Pages/Home';
import AsideLeft from './components/AsideLeft';
import TopMenu from './components/TopMenu';


function App() {
  return (
    <div className="bgimg">
    <TopMenu />
    <AsideLeft />
      <Home />
    </div>
  );
}

export default App;
