import './Header.scss';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';

export default function Header() {
  const { isDark, toggleDark } = useDarkMode();
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const loadedAudio = new Audio('../assets/light_switch_sound.mp3');
    loadedAudio.preload = 'auto'; // Load audio
    setAudio(loadedAudio);
  }, []);

  const handleToggleDark = () => {
    if (audio) {
      audio
        .play() // Play the sound
        .catch((error) => console.error('Error playing sound: ', error));
    }
    toggleDark(); // Toggle light/dark mode
  };

  return (
    <div className={`nav ${isDark ? 'dark' : ''}`}>
      <div className="nav-header">
        {' '}
        <div className="list">
          <ul className="list-menu text-uppercase">
            <li className="list-item fw-normal">
              <a className="fw-semibold" href="/">
                jarjen
              </a>
            </li>
            <li className="list-item fw-normal">
              <a href="#About">a propos</a>
            </li>
            <li className="list-item fw-normal">
              <a className="bg-purple text-blank rounded" href="#Work">
                projets
              </a>
            </li>
            <li className="list-item fw-normal">
              <a href="#Skill">compétences</a>
            </li>
            <li className="list-item fw-normal">
              <a href="#Contact">contact</a>
            </li>
            <li
              className=" fw-normal"
              style={{ float: 'right', marginTop: '-0.1rem' }}
            >
              <a
                className="mode"
                style={{ cursor: 'pointer' }}
                onClick={handleToggleDark}
              >
                {isDark ? 'light' : 'dark'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
