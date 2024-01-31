import { PropTypes } from 'prop-types';
import { WindHumidity } from '../WindHumidity';
import { ReactComponent as Humidity } from '../../img/humidity.svg';
import { ReactComponent as Wind } from '../../img/wind.svg';
import './Infobar.scss';

const propTypes = {
  data: PropTypes.shape({
    main: PropTypes.shape({
      humidity: PropTypes.number.isRequired,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
export const Infobar = ({ data }) => {
  return (
    <div className="inforow">
      <WindHumidity
        icon={<Humidity />}
        title="Humidity"
        inform={`${data?.main?.humidity ?? '~~ '}%`}
      />
      <WindHumidity
        icon={<Wind />}
        title="Wind"
        inform={`${data?.wind?.speed ?? '~~ '} m/s`}
      />
    </div>
  );
};

Infobar.propTypes = propTypes;
