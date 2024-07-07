import './Contact.scss';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';

export default function Contact() {
  const { isDark } = useDarkMode();

  return (
    <div id="Contact" className={`contact text-center ${isDark ? 'dark' : ''}`}>
      <h2
        className={`contact-title fw-bold text-uppercase ${
          isDark ? 'dark-text' : ''
        }`}
      >
        Contact
      </h2>
      <p className={`contact-text ${isDark ? 'dark-text' : ''}`}>
        Si vous souhaitez discuter d'opportunités ou de collaborations
        potentielles, n’hésitez pas à me contacter.
      </p>
      <a
        className={`contact-address fw-semibold ${isDark ? 'dark-text' : ''}`}
        href="mailto:iritie.sarah@gmail.com"
      >
        iritie.sarah@gmail.com
      </a>
    </div>
  );
}
