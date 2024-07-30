import './Header.scss';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';
import lightSwitchSound from '/assets/light_switch_sound.mp3';

export default function Header() {
  const { isDark, toggleDark } = useDarkMode();
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const loadedAudio = new Audio(lightSwitchSound);
    loadedAudio.preload = 'auto'; // Load audio
    setAudio(loadedAudio);
  }, []);

  useEffect(() => {
    // Apply the 'dark' class to the body element based on isDark state
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleToggleDark = () => {
    if (audio) {
      audio
        .play() // Play the sound
        .catch((error) => {
          console.error('Error playing sound: ', error);
        });
    }
    toggleDark(); // Toggle light/dark mode
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Second navigation bar */}
      <div className={`secondnav ${isDark ? 'dark' : ''}`}>
        <ul className="secondnav-menu">
          <li className="secondnav-item">
            <a href="#" onClick={scrollToTop}>
              <img src="../assets/home_icon.svg" alt="home icon" />
            </a>
          </li>
          <li className="secondnav-item">
            <a href="#About">
              <img src="../assets/person_icon.svg" alt="person icon" />
            </a>
          </li>
          <li className="secondnav-item">
            <a href="#Work">
              <img src="../assets/work_icon.svg" alt="suitcase icon" />
            </a>
          </li>
          <li className="secondnav-item">
            <a href="#Skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 256 256"
              >
                <path
                  fill={isDark ? '#fff' : '#1d1d1f'}
                  d="M184 112a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m48-88v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h24V48H48Zm160 0V48H88v160z"
                />
              </svg>
            </a>
          </li>
          <li className="secondnav-item">
            <a href="#Contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke={isDark ? '#fff' : '#4b4b4e'}
                  stroke-width="1.95"
                  d="M3 20.29V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z"
                />
              </svg>
            </a>
          </li>
          <li className="secondnav-item">
            <a
              className="mode"
              style={{ cursor: 'pointer' }}
              onClick={handleToggleDark}
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
