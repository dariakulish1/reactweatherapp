import './BottomBar.scss';
import { PropTypes } from 'prop-types';
import { Icons } from '../Icons';

const propTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }),
    weather: PropTypes.shape({
      main: PropTypes.string,
    }),
  }).isRequired,
};
export const BottomBar = ({ city, data }) => {
  const kelvinCalc = (kelvin) => kelvin - 273.15;
  const celsius = kelvinCalc(data?.main?.temp).toFixed(0);
  return (
    <div className="bottom">
      <h2 className="city">{city}</h2>
      <div className="weatherdata">
        <div className="iconimg">
          <Icons data={data} />
        </div>
        <p className="temperature">{`${isNaN(celsius) ? '~ ' : celsius}°C`}</p>
        <p className="clouds">{data?.weather?.[0]?.main}</p>
      </div>
    </div>
  );
};

BottomBar.propTypes = propTypes;
