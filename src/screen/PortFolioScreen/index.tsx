import React from 'react';
import tasumane from '../../images/tasumane-top.png';
import PortfolioCard from '../../components/molecules/PortfolioCard';

export interface PortFolio {
  id: number;
  name: string;
  text: string;
  date: string;
  url: string;
  img: string;
  backgroundcolor: string;
}

export const PortFolioScreen = () => {
  const portFolios = [
    {
      id: 1,
      name: '個人ブログ',
      text:
        '現在はプログラミング学習情報が中心。自作したWordPressテーマを使用しています。',
      date: '2019.5 - present',
      url: 'https://ryotaro-blog.xyz/',
      backgroundcolor: 'lightblue'
    },
    {
      id: 2,
      name: 'Railsポートフォリオ',
      text: 'プログラミング学習やその他',
      date: '2019.5',
      url: 'https://tasumane.herokuapp.com/',
      img: tasumane,
      backgroundcolor: 'lightgreen'
    },
    {
      id: 3,
      name: 'Reactポートフォリオ',
      text: '自己紹介用',
      date: '2019.8',
      url: 'https://ryotaro-kitamura.github.io/portfolios',
      backgroundcolor: 'lightgrey'
    }
  ];

  return (
    <div className="PortFolioScreen">
      <h2>ポートフォリオ集</h2>
      <div className="PortFolioScreen__CardArea">
        {portFolios.map(({ text, img, url, name, date }) => (
          <PortfolioCard
            text={text}
            url={url}
            name={name}
            date={date}
          />
        ))}
      </div>
    </div>
  );
};
