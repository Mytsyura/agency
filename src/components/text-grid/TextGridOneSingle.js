import PropTypes from 'prop-types';
import React from 'react';
import IMG from '../../assets/images/birthday.png';

const TextGridOneSingle = ({data, spaceBottomClass}) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-mission ${spaceBottomClass ? spaceBottomClass : ''}`}
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
        <img src={IMG} alt="d" style={{width: '100px', margin: '10px'}} />
        <h3 style={{textAlign: 'center'}}>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

TextGridOneSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
};

export default TextGridOneSingle;
