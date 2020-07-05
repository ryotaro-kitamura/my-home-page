import React from 'react';
import Icon from '../../components/atoms/Icon';
import Card from '../../components/molecules/SkillCard';
import myIcon from '../../images/IMG20190117173225.jpg';
import { Hobbies, Skills } from './data';

const AboutScreen = () => {
  return (
    <div className="AboutScreen">
      <div className="AboutScreen__Container">
        <div className="AboutScreen__Content">
          <h2 className="AboutScreen__Title">
            <span>About me</span>
          </h2>
          <div className="AboutScreen__MyData">
            <div className="AboutScreen__MyIconArea">
              <Icon className="AboutScreen__MyIcon" url={myIcon} />
            </div>
            <div className="AboutScreen__Description">
              <p>こんにちは、Ryotaro です。</p>
              <p>
                21卒エンジニア志望で、現在は長期インターンでWeb開発をしています。
              </p>
              <p>
                フロントエンド周りの開発経験が一番多く、個人的にも大好きです。
              </p>
              <p>
                サーバーサイド周りの開発経験は少ないですがロジックを考えるのは好きで、フロント側にデータ渡してそれをきれいに表示できたときの喜びが好きです笑
              </p>
            </div>
          </div>
        </div>
        <div className="AboutScreen__Content">
          <h2 className="AboutScreen__Title">
            <span>My Skills</span>
          </h2>
          <div className="AboutScreen__Description">
            <p>現在使用している技術は以下の通りです。</p>
            <p>
              尚、ここに無い技術でも、興味のある技術に関してはしっかりキャッチアップしていく所存です。
            </p>
          </div>
          <div className="AboutScreen__CardsArea">
            {Skills.map(({ name, icon, period, description }) => (
              <div className="AboutScreen__SkillCard">
                <Card
                  name={name}
                  icon={icon}
                  period={period}
                  description={description}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="AboutScreen__Content">
          <h2 className="AboutScreen__Title">
            <span>My Hobby</span>
          </h2>
          <div className="AboutScreen__Description">
            <p>趣味はそんなに多くなくて、強いてあげるならというのが以下の4つです。</p>
            <p>
              ハマれる趣味を探し求めています
            </p>
          </div>
          <div className="AboutScreen__CardsArea">
            {Hobbies.map(({ name, icon, description }) => (
              <div className="AboutScreen__SkillCard">
                <Card name={name} icon={icon} description={description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
