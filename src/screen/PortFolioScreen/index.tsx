import React, { useState } from "react";
import torimastart from "../../images/torimastart.png";
import ryotaroblog from "../../images/ryotaro-blog.png";
import tasumane from "../../images/tasumane-top.png";
import react_portfolio from "../../images/react-portfolio.png";
import PortfolioCard from "../../components/organisms/PortfolioCard";

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
      name: "とりま始める大学生通信",
      text: "台湾留学記",
      date: "2018.9 - 2019.6",
      url: "https://www.torimastart.com/",
      img: torimastart,
      backgroundcolor: "lightpink"
    },
    {
      id: 2,
      name: "個人ブログ",
      text:
        "現在はプログラミング学習情報が中心。自作したWordPressテーマを使用しています。",
      date: "2019.5 - present",
      url: "https://ryotaro-blog.xyz/",
      img: ryotaroblog,
      backgroundcolor: "lightblue"
    },
    {
      id: 3,
      name: "Railsポートフォリオ",
      text: "プログラミング学習やその他",
      date: "2019.5",
      url: "https://tasumane.herokuapp.com/",
      img: tasumane,
      backgroundcolor: "lightgreen"
    },
    {
      id: 4,
      name: "Reactポートフォリオ",
      text: "自己紹介用",
      date: "2019.8",
      url: "https://ryotaro-kitamura.github.io/portfolios",
      img: react_portfolio,
      backgroundcolor: "lightgrey"
    }
  ];

  return (
    <div className='PortFolioScreen'>
      <h2>ポートフォリオ集</h2>
      <div className='PortFolioScreen__CardArea'>
        {portFolios.map(({ text, img, url, name, date }) => (
          <PortfolioCard
            text={text}
            img={img}
            url={url}
            name={name}
            date={date}
          />
        ))}
      </div>
    </div>
  );
};
