import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';

import './Widgets.css';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkUp News</h2>
        <Info />
      </div>
      {newsArticle('Tesla hits new highs', 'Cars & auto - 646 readers')}
      {newsArticle('Bitcoin Breaks $22K', 'Crypto  - 8,091 readers')}
      {newsArticle('Python, The Best Language', 'Code - 1,000 readers')}
      {newsArticle('Snow Everywhere', 'Weather - 537 readers')}
      {newsArticle('Java !== JavaScript', 'Code - 537 readers')}
    </div>
  );
};

export default Widgets;
