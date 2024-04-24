import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import signature_eng from '../asset/signature_eng.svg';
import banner from '../asset/peru_stock.jpg';
import '../style/Article.css';
import body_md from '../asset/letter_body.md';
import MarkdownRenderer from './MarkdownRenderer';
import SignatureBlock from './SignatureBlock';

function Article() {
  return (
      <div className={"container"}>
        <div className={'row mt-4 mb-4'}>
          <img src={banner} className={'img-responsive banner'}
               alt={'2024 Peru Summer Missions'}/>
        </div>
        <MarkdownRenderer markdownFilePath={body_md} className={"mt-4"}/>
        <SignatureBlock signature_src={signature_eng} end_greetings={"God Bless,"} name={"Yushi Austin Yasuda"} date={"April 24 2024"}></SignatureBlock>
      </div>
  );
}

export default Article;
