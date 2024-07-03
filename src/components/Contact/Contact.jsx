import './Contact.scss';

export default function Contact() {
  return (
    <div id="Contact" className="contact text-center">
      <h2 className="contact-title fw-bold text-uppercase">Contact</h2>
      <p className="contact-text">
        Si vous souhaitez discuter d'opportunités ou de collaborations
        potentielles, n’hésitez pas à me contacter.
      </p>
      <a
        className="contact-address fw-semibold"
        href="mailto:iritie.sarah@gmail.com"
      >
        iritie.sarah@gmail.com
      </a>
    </div>
  );
}
