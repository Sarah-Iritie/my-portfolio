import 'animate.css';
import './Home.scss';

export default function Home() {
  return (
    <div className="container">
      <div className="content text-center">
        <h1 className="content-title fw-extra-bold animate__animated animate__fadeInDown text-animate">
          Développeuse
        </h1>
        <h2 className="content-subtitle fw-extra-bold animate__animated animate__fadeInDown text-animate">
          Web
        </h2>
        <img
          className="content-img"
          src="../assets/flat_character_self.png"
          alt="illustration of myself holding a computer"
        />
      </div>
      {/* Unused CSS animation */}
      <div class="down-arrow"></div>
    </div>
  );
}
