import './WindHumidity.scss';
import { PropTypes } from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  inform: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export const WindHumidity = ({ title, inform, icon }) => {
  return (
    <div className="humidity">
      {icon}
      <div className="infohumid">
        <p className="humid">{title}</p>
        <p className="procent">{inform}</p>
      </div>
    </div>
  );
};

WindHumidity.propTypes = propTypes;
