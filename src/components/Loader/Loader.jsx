import './Loader.scss';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';

export default function Loader() {
  const { isDark } = useDarkMode();

  return (
    <div className={`motion ${isDark ? 'dark' : ''}`}>
      <div className="motion-gif">
        <img
          src="./assets/girl_running.gif"
          alt="animation of a girl running"
          className="motion-img"
        />
      </div>
    </div>
  );
}
