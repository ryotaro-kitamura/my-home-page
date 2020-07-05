import React from 'react';
import PortfolioCard from '../../components/molecules/PortfolioCard';
import { PortFolios } from './data';

export const PortFolioScreen = () => {
  return (
    <div className="PortFolioScreen">
      <h2>ポートフォリオ集</h2>
      <div className="PortFolioScreen__CardArea">
        {PortFolios.map(({ text, img, url, name, date }) => (
          <PortfolioCard
            text={text}
            url={url}
            name={name}
            img={img}
            date={date}
          />
        ))}
      </div>
    </div>
  );
};
