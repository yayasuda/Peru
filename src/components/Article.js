import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import signature_eng from '../asset/signature_eng.png';
import banner from '../asset/peru_stock.jpg';
import '../style/Article.css';
import body_md from '../asset/letter_body.md';
import MarkdownRenderer from './MarkdownRenderer';

function Article() {
  return (
      <div className="container">
        <div className={'row mt-4 mb-4'}>
          <img src={banner} className={'img-responsive signature'}
               alt={'2024 Peru Summer Missions'}/>
        </div>
        <MarkdownRenderer markdownFilePath={body_md} className={"mt-4"}/>
        <div className={'col-lg-4 col-md-5 col-sm-7 col-xs-7'}>
          <img src={signature_eng} className={'img-responsive signature'}
               alt={'Austin Yushi Yasuda'}/>
        </div>
        <div class={'row'}>
          <p>24 April 2024</p>
        </div>

      </div>
  );
}

export default Article;
