import React from 'react';
import Home from './components/Pages/Home';
import AsideLeft from './components/AsideLeft';
import TopMenu from './components/TopMenu';



function App() {
  return (
    <div className="bgimg">
      <Home/>
        <TopMenu />
      <AsideLeft />
    </div>
  );
}

export default App;
