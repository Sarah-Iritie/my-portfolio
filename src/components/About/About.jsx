import './About.scss';

export default function About() {
  return (
    <div id="About" className="about">
      <div className="about-content">
        {' '}
        <h2 className="about-title text-center fw-bold text-uppercase">
          A propos
        </h2>
        <p className="about-text text-center">
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
