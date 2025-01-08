
import { FaTwitter, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <div className="text-center py-16 px-4">
    <h1 className="text-5xl font-bold text-gray-300 mb-8">Contact Me</h1>
    <p className="text-lg text-gray-300 mb-6">
      Thank you for visiting my portfolio! I'm always open to exciting job opportunities, collaborations, and discussions on technology. Feel free to reach out to me through any of the following channels:
    </p>
    
    <div className="flex justify-center space-x-8">
      {/* Email */}
      <a
        href="mailto:sandyjasper922@gmail.com"
        className="text-4xl text-gray-300 hover:text-blue-500 transition-colors"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/NationCurdy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-gray-300 hover:text-blue-500 transition-colors"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/233545404916"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-gray-300 hover:text-green-500 transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/jasper-tech"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-gray-300 hover:text-gray-500 transition-colors"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>

    <p className="mt-8 text-lg text-gray-400">
      I look forward to connecting with you and discussing potential opportunities. Let’s build something amazing together!
    </p>
  </div>
);

export default Contact;
