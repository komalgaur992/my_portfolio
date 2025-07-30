import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function SocialIcons({ className = '' }) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a href="https://github.com/komal-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="hover:text-neon-green text-2xl" />
      </a>
      <a href="https://linkedin.com/in/komal-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="hover:text-neon-blue text-2xl" />
      </a>
      <a href="mailto:komal.email@gmail.com" aria-label="Gmail">
        <FaEnvelope className="hover:text-neon-pink text-2xl" />
      </a>
    </div>
  );
}