import React from "react";
import ryotaro from "../../images/ryotaro_kitamura.jpg";
import Icon from "../../components/atoms/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillCard from "../../components/molecules/SkillCard";
import Card from "../../components/atoms/Card";

//Skill Icons
const ReactIcon = <FontAwesomeIcon icon={["fab", "react"]} />;
const JSIcon = <FontAwesomeIcon icon={["fab", "js-square"]} />;
const HTMLIcon = <FontAwesomeIcon icon={["fab", "html5"]} />;
const CSSIcon = <FontAwesomeIcon icon={["fab", "css3-alt"]} />;
const RubyOnRailsIcon = require("../../images/ruby_on_rails.svg");

const skills = [
  {
    name: "React.Js",
    icon: ReactIcon,
    description:
      "個人的な興味が一番強い言語。開発経験も一番多い。本サイトもReactを使用。可能であればReactの開発にはぜひ参加したい。"
  },
  {
    name: "JavaScript",
    icon: JSIcon,
    description:
      "Reactを学ぶ上で基礎となるので合わせて学習。業務経験などは少ないが、コードを読んで理解することは徐々にできるようになっている"
  },
  {
    name: "HTML",
    icon: HTMLIcon,
    description: "読んで理解することは可能。上級レベルについてはこれから"
  },
  {
    name: "CSS",
    icon: CSSIcon,
    description:
      "得意ではないが、本サイトくらいのデザインが実装できるレベルはある"
  },
  {
    name: "Ruby",
    image: RubyOnRailsIcon,
    description: "バックエンド開発で多少触る。まだまだ勉強中"
  }
];

//hobby Icons
const BaseBallImage = require("../../images/hobby/baseball.svg");
const TravelImage = require("../../images/hobby/travel.svg");
const BoxingImage = require("../../images/hobby/boxing.svg");
const CodingImage = require("../../images/hobby/coding.svg");

const hobby = [
  {
    name: "野球",
    image: BaseBallImage,
    description: "中高6年間野球部に所属。現在は観戦オンリー。"
  },
  {
    name: "格闘技観戦",
    image: BoxingImage,
    description:
      "格闘技系全般の観戦もする。k-1、ボクシング、総合格闘技などをループ。プロレスは見ない。"
  },
  {
    name: "プログラミング",
    image: CodingImage,
    description: "雑魚は黙ってコードを書く精神で空き時間はだいたいコーディング"
  },
  {
    name: "旅行",
    image: TravelImage,
    description: "海外旅行が好き。アジアが多い。台湾での一年間の留学経験あり。"
  }
];

const AboutScreen = () => {
  return (
    <div className='AboutScreen'>
      <div className='AboutScreen__Container'>
        <div className='AboutScreen__Contents'>
          <h2 className='AboutScreen__Title'>
            <span>About me</span>
          </h2>
          <div className='AboutScreen__MyData'>
            <div className='AboutScreen__MyIconArea'>
              <Icon className='AboutScreen__MyIcon' url={ryotaro} />
            </div>
            <div className='AboutScreen__Description'>
              <p>こんにちは、北村瞭太郎です。</p>
              <p>
                21卒エンジニア志望で、現在はエンジニアインターンをしながら技術を磨いています。
              </p>
              <p>
                Reactを使った開発経験が一番多く、個人的にもReactが大好きです。
              </p>
              <p>
                今後はバックエンドも含めて開発経験を多く積み、まずは「表現したいものはなんでも表現できる」状態を目指します。
              </p>
            </div>
          </div>
        </div>
        <div className='AboutScreen__Contents'>
          <h2 className='AboutScreen__Title'>
            <span>My Skills</span>
          </h2>
          <div className='AboutScreen__Description'>
            <p>現在使用している技術は以下の通りです。</p>
            <p>
              尚、ここに無い技術でも、興味のある技術に関してはしっかりキャッチアップしていく所存です。
            </p>
          </div>
          <div className='AboutScreen__MySkillsArea'>
            {skills.map(({ name, icon, description, image }) => (
              <div className='AboutScreen__SkillCard'>
                <SkillCard
                  image={image}
                  name={name}
                  icon={icon}
                  description={description}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='AboutScreen__Contents'>
          <h2 className='AboutScreen__Title'>
            <span>My Hobby</span>
          </h2>
          <div className='AboutScreen__MySkillsArea'>
            {hobby.map(({ name, image, description }) => (
              <div className='AboutScreen__SkillCard'>
                <SkillCard
                  image={image}
                  name={name}
                  description={description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
