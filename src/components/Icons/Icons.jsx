import { ReactComponent as Cloud } from '../../img/cloud.svg';
import { ReactComponent as Rain } from '../../img/rain.svg';
import { ReactComponent as Sun } from '../../img/sun.svg';
import './Icons.scss';

export const Icons = () => {
  const weatherIcon = 'cloud';
  if (weatherIcon === 'cloud') {
    return <Cloud className="svg" />;
  }
  if (weatherIcon === 'sun') {
    return <Sun className="svg2" />;
  }
  if (weatherIcon === 'rain') {
    return <Rain className="svg1" />;
  }
  return null;
};
