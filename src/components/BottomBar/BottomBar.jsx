import './BottomBar.scss';
import { PropTypes } from 'prop-types';
import { Icons } from '../Icons';

const propTypes = {
  city: PropTypes.string.isRequired,
};
export const BottomBar = ({ city }) => (
  <div className="bottom">
    <h2 className="city">{city}</h2>
    <div className="weatherdata">
      <Icons />
      <p className="temperature">22°C</p>
      <p className="clouds">Clouds</p>
    </div>
  </div>
);

BottomBar.propTypes = propTypes;
