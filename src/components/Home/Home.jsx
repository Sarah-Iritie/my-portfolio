import 'animate.css';
import './Home.scss';
import Lottie from 'lottie-react';
import dropdownMouseAnimation from '../../Animation_1719847561966.json';

export default function Home() {
  return (
    <>
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
      </div>
      <div className="animation">
        <a href="#About">
          <div className="animation-container">
            <Lottie
              animationData={dropdownMouseAnimation}
              style={{ width: 80, height: 100, marginTop: '18rem' }}
            />
          </div>
        </a>
      </div>
    </>
  );
}
