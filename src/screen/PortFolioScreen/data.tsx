import tasumane from '../../images/tasumane-top.png';
import seize_the_day from '../../images/seize-the-day.png';
import portfolio from '../../images/portfolio.png';
import { Portfolio } from './types';

export const PortFolios: Portfolio[] = [
  {
    id: 1,
    name: 'Seize The Day(個人ブログ)',
    text: 'Angular × Firebase で作成。Admin 機能なども作成しました',
    date: '2020.2 - 2020.5',
    url: 'https://seize-the-day-e7257.firebaseapp.com/',
    img: seize_the_day
  },
  {
    id: 2,
    name: '自己紹介用ポートフォリオ',
    text: '本サイト。React(Typescript)で作成しています。',
    date: '2019.8',
    url: 'https://ryotaro-kitamura.github.io/my-home-page',
    img: portfolio
  },
  {
    id: 3,
    name: 'Railsポートフォリオ',
    text: '初めて作成した WebApp です。精度は低いですが一通りの機能を揃えています',
    date: '2019.5',
    url: 'https://tasumane.herokuapp.com/',
    img: tasumane
  },
];
