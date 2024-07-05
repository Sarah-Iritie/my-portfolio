import './About.scss';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';

export default function About() {
  const { isDark } = useDarkMode();

  return (
    <div id="About" className={`about ${isDark ? 'dark' : ''}`}>
      <div className="about-content">
        {' '}
        <h2
          className={`about-title text-center fw-bold text-uppercase ${
            isDark ? 'dark-text' : ''
          }`}
        >
          A propos
        </h2>
        <p className={`about-text text-center ${isDark ? 'dark-text' : ''}`}>
          Je suis <span className="text-highlight">Sarah</span>, développeuse{' '}
          <span className="text-highlight">front-end </span>
          avec 3 ans d’expérience en traduction marketing et passionnée par les{' '}
          <span className="text-highlight">nouvelles technologies.</span> J’ai
          intégré l’école O’clock afin de suivre une formation de développeur
          <span className="text-highlight"> web full stack</span>. Par la suite,
          j'ai effectué un stage de 2 mois en tant que développeuse{' '}
          <span className="text-highlight">front-end</span> au sein de
          l’entreprise Digishop.
        </p>
      </div>
    </div>
  );
}
