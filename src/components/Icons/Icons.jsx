import { PropTypes } from 'prop-types';
import './Icons.scss';
import d01 from '../../img/01d.png';
import n01 from '../../img/01n.png';
import d02 from '../../img/02d.png';
import n02 from '../../img/02n.png';
import d03 from '../../img/03d.png';
import d04 from '../../img/04d.png';
import d09 from '../../img/09d.png';
import d10 from '../../img/10d.png';
import n10 from '../../img/10n.png';
import d11 from '../../img/11d.png';
import d13 from '../../img/13d.png';
import n50 from '../../img/50n.png';

const propTypes = {
  data: PropTypes.shape({
    weather: PropTypes.shape({
      icon: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};

export const Icons = ({ data }) => {
  const icon = data?.weather?.[0]?.icon;
  const description = data?.weather?.[0]?.description;
  const imgMap = {
    '01d': d01,
    '01n': n01,
    '02d': d02,
    '02n': n02,
    '03d': d03,
    '03n': d03,
    '04d': d04,
    '04n': d04,
    '09d': d09,
    '09n': d09,
    '10d': d10,
    '10n': n10,
    '11d': d11,
    '11n': d11,
    '13d': d13,
    '13n': d13,
    '50d': n50,
    '50n': n50,
  };
  if (!icon) {
    return null;
  }
  const imgarray = imgMap[icon];
  if (imgarray) {
    return <img src={imgarray} alt={description} />;
  }
};

Icons.propTypes = propTypes;
