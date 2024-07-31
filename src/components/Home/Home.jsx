import 'animate.css';
import './Home.scss';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';

export default function Home() {
  const { isDark } = useDarkMode();

  return (
    <>
      <div className={`container ${isDark ? 'dark' : ''}`}>
        <div className="content text-center">
          <h1
            className={`content-title fw-extra-bold animate__animated animate__fadeInDown text-animate ${
              isDark ? 'dark-text' : ''
            }`}
          >
            Développeuse
          </h1>
          <h2
            className={`content-subtitle fw-extra-bold animate__animated animate__fadeInDown text-animate ${
              isDark ? 'dark-text' : ''
            }`}
          >
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
        <div className={`animation-container ${isDark ? 'dark' : ''}`}>
          <a href="#About">
            {isDark ? (
              <>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5em' height='5em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23fff' stroke-linejoin='round'%3E%3Cpath d='M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0z'/%3E%3Cpath stroke-linecap='round' d='M12 7v4'/%3E%3C/g%3E%3C/svg%3E"
                  style={{ marginTop: '20rem' }}
                  alt="mouse icon dark mode"
                />
                <p
                  className="scroll-text text-center animate__animated animate__pulse"
                  style={{ color: '#fff' }}
                >
                  Scroll
                </p>
              </>
            ) : (
              <>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5em' height='5em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%231d1d1f' stroke-linejoin='round'%3E%3Cpath d='M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0z'/%3E%3Cpath stroke-linecap='round' d='M12 7v4'/%3E%3C/g%3E%3C/svg%3E"
                  style={{ marginTop: '20rem' }}
                  alt="mouse icon light mode"
                />
                <p className="scroll-text text-center animate__animated animate__pulse">
                  Scroll
                </p>
              </>
            )}
          </a>
        </div>
        <div className="secondary">
          <div className="secondary-icon">
            <a href="#About">
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.3em"
                  height="2.3em"
                  viewBox="0 0 24 24"
                >
                  <g transform="rotate(-90 12 12)">
                    <g
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="14"
                        stroke-dashoffset="14"
                        d="M19 12H5.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.3s"
                          values="14;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="8"
                        stroke-dashoffset="8"
                        d="M5 12L10 17M5 12L10 7"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.3s"
                          dur="0.2s"
                          values="8;0"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.3em"
                  height="2.3em"
                  viewBox="0 0 24 24"
                >
                  <g transform="rotate(-90 12 12)">
                    <g
                      fill="none"
                      stroke="#1d1d1f"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="14"
                        stroke-dashoffset="14"
                        d="M19 12H5.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.3s"
                          values="14;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="8"
                        stroke-dashoffset="8"
                        d="M5 12L10 17M5 12L10 7"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.3s"
                          dur="0.2s"
                          values="8;0"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
