import React from 'react';
import '../style/SupportForm.css';
import { MdMarkunreadMailbox } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";

function printForm() {
  let printWindow = window.open('', '_blank');
  let formNode = document.querySelector('.form-to-print');
  let formClone = formNode.cloneNode(true);
  let checkboxes = formNode.querySelectorAll('input[type=checkbox]');
  let cloneCheckboxes = formClone.querySelectorAll('input[type=checkbox]');

  checkboxes.forEach((checkbox, index) => {
      cloneCheckboxes[index].checked = checkbox.checked;
  });

  let form = formClone.outerHTML;
  let styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map(link => link.outerHTML)
      .join('');
  printWindow.document.write('<html><head><title>Print Form</title>');
  printWindow.document.write(styles);
  printWindow.document.write('</head><body>');
  printWindow.document.write(form);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.onload = function() {
      printWindow.print();
  };
}


function SupportForm() {
  return (
      <div className="container">
        {/* <div className="row"> */}
        <h5>You may give financially online or through mail-in checks:</h5>
        <hr style={{'border-top': '3px dotted'}}/>
        <div className="container">
          <div className="row align-items-center">
            <h4 style={{ display: 'flex', alignItems: 'center', paddingLeft: 0 }}>
              <IoIosGlobe/>
              Online
            </h4>
          </div>
        </div>
        <p style={{'margin-bottom': 0}}>Electronic giving is available
          <a href={'https://app.managedmissions.com/Donations/Donate/77439'}
             className="link-offset-2 link-offset-3-hover link-underline  mx-1 my-1">via this site</a>, but please note there is an additional administrative fee.</p>
        <hr style={{'border-top': '3px dotted'}}/>
        <div className='form-to-print'>
        <div className="row">
        <div className="container">
          <div className="row align-items-center">
            <h4 style={{ display: 'flex', alignItems: 'center' }}>
              <MdMarkunreadMailbox/>
              Mail-in Checks
            </h4>
          </div>
        </div>
          <div className="form-group">
            <p>You may print and attach the following printable form and make checks payable to
              "<strong>HMI-P</strong>" and include the
              <strong>"Peru Yushi Austin Yasuda"</strong> in the memo. <br/> You may mail
              contributions to: <i>HMCC, 928 E Ann St, Ann Arbor, MI 48104.</i></p>
          </div>
          <form>
            <div className={'row'}>
              <div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <label htmlFor="name">Name</label>
                <input type="email" className="form-control" id="name"/>
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="form-control" id="Address"/>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email"/>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <label htmlFor="name">Address</label>
                <textarea className="form-control" id="name"
                          style={{height: '87%'}}/>
              </div>
            </div>
          </form>
        </div>
        <div className={'row mt-3'}>
          <form>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       id="supportPrayer"/>
                <label className="form-check-label" htmlFor="supportPrayer">
                  I would like to support Yushi Austin Yasuda through prayer
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       id="supportFinancial"/>
                <label className="form-check-label" htmlFor="supportFinancial">
                  I would like to support Yushi Austin Yasuda through financial support
                  in the amount of $
                </label>
                <input type="text" className="form-control inline-input ml-1"
                       placeholder=""/>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       id="taxStatement"/>
                <label className="form-check-label" htmlFor="taxStatement">
                  Please check here if you would like a giving statement for tax
                  purposes.
                </label>
              </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <button type="button" className="btn btn-outline-primary no-print" onClick={printForm}>Print Form</button>
            </div>
          </form>
        </div>
      </div>
      </div>
  );
}

export default SupportForm;
