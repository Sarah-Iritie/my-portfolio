import './Header.scss';

export default function Header() {
  return (
    <div className="nav">
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
              <a className="mode" href="#">
                dark
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
