import React from 'react';
import './App.css';
import { Header, Sidebar, Feed } from './components/index';

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
