
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// RubyIcon のみ fonawsome にないので svg を使用
import RubyIcon from '../../images/ruby_on_rails.svg';
import { AboutPageCardProps } from './aboutScreen';

//Skill Icons
const ReactIcon = <FontAwesomeIcon icon={['fab', 'react']} />;
const JSIcon = <FontAwesomeIcon icon={['fab', 'js-square']} />;
const HTMLIcon = <FontAwesomeIcon icon={['fab', 'html5']} />;
const CSSIcon = <FontAwesomeIcon icon={['fab', 'css3-alt']} />;
const AngularIcon = <FontAwesomeIcon icon={['fab', 'angular']} />;

//Hobby Icons
const BaseBallIcon = <FontAwesomeIcon icon={['fas', 'baseball-ball']} />;
const CodingIcon = <FontAwesomeIcon icon={['fas', 'code']} />;
const TravelIcon = <FontAwesomeIcon icon={['fas', 'plane-departure']} />;
const StudyIcon = <FontAwesomeIcon icon={['fab', 'leanpub']} />;


export const Skills:AboutPageCardProps[] = [
  {
    name: 'Angular',
    icon: AngularIcon,
    period: '6ヶ月',
    description:
      '今個人的な興味が一番強い言語です。開発経験は実務経験が6ヶ月ほどあります。「責務」をものすごく重視している感じが好きです。'
  },
  {
    name: 'React.Js',
    icon: ReactIcon,
    period: '5ヶ月',
    description:
      '開発経験が Angular の次に多いです。本サイトもReactを使用しています。Reactってなんかかっこいいですよね。'
  },
  {
    name: 'TypeScript',
    icon: JSIcon,
    period: '6ヶ月',
    description:
      'React も Angular も開発は基本的に TypeScript を使用。型定義しないとリアルにコード書けません。。'
  },
  {
    name: 'JavaScript',
    icon: JSIcon,
    period: '約1年ほど',
    description:
      'React, Angular, TypeScript を学ぶ上で基礎となるので一番大切にしています。そんなに難しくないコードなら読んである程度は理解することができます'
  },
  {
    name: 'HTML',
    icon: HTMLIcon,
    period: '約1年ほど',
    description: '読んで理解することは可能です。上級レベルについてはこれからです。'
  },
  {
    name: 'CSS',
    icon: CSSIcon,
    period: '約1年ほど',
    description:
      '得意ではないですが、本サイトくらいのデザインが実装できるレベルはあります。'
  },
  {
    name: 'Ruby',
    icon: RubyIcon,
    period: '5ヶ月ほど',
    description: 'バックエンド開発で多少触っていました。実務での使用頻度が少なかったこともありまだまだ勉強中です'
  }
];

// hobby Icons

export const Hobbies: Partial<AboutPageCardProps>[] = [
  {
    name: '野球',
    icon: BaseBallIcon,
    description: '中高6年間野球部に所属してました。現在は観戦オンリーです。'
  },
  {
    name: 'プログラミング',
    icon: CodingIcon,
    description: '空き時間はだいたいコーディングしています。最近は Rails を勉強しています。'
  },
  {
    name: '言語学習',
    icon: StudyIcon,
    description:
      '中国語や英語を学んでます。習った言語で海外のドラマや映画を見るのが好きです。台湾に長期留学の経験もあります'
  },
  {
    name: '旅行',
    icon: TravelIcon,
    description:
      '海外旅行が好きです。もっぱらアジアが多いです。'
  }
];