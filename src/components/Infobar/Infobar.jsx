import { WindHumidity } from '../WindHumidity';
import { ReactComponent as Humidity } from '../../img/humidity.svg';
import { ReactComponent as Wind } from '../../img/wind.svg';
import './Infobar.scss';

const Infobar = () => {
  return (
    <div className="inforow">
      <WindHumidity icon={<Humidity />} title="Humidity" inform="75%" />
      <WindHumidity icon={<Wind />} title="Wind" inform="3 m/s" />
    </div>
  );
};

export { Infobar };
