import React from 'react'
import { BasicInfoDiv } from '../styles' 

export const BasicInfo = () => {
  return(
    <BasicInfoDiv>
      <h3 style={{textAlign: 'center'}}>基本情報</h3>
      <div>
        <dl>年齢: 22</dl>
        <dl>職業: 大学生</dl>
        <dl>専攻: 中国語/中国歴史/台湾歴史</dl>
        <dl>趣味: ①プログラミング ②ブログ執筆 ③プロ野球、格闘技の試合観戦 ④海外旅行</dl>
      </div>
    </BasicInfoDiv>
  )
}