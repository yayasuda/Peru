import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/SignatureBlock.css"

function SignatureBlock({signature_src, end_greetings, name, date, max_width}) {
  return (
      <div>
        <p>{end_greetings}</p>
        <div className={'row'}>
          <div className={'col-lg-3 col-md-4 col-sm-5 col-xs-7'}>
            <img src={signature_src} className={'img-responsive signature'}
                 alt={name}
                  style={{maxWidth: max_width}}
            />
          </div>
        </div>
          <p>{name}</p>
          <p>{date}</p>
      </div>
  );
}

export default SignatureBlock;