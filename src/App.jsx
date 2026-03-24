import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';
import profileImg from './assets/profile.jpg';
import './index.css';

function App() {
  return (
    <div className="box">
      <img src={profileImg} alt="David Kim Profile Picture" className="box-img" />
      <h1>David Kim</h1>
      <h5>Full Stack Software Developer</h5>
      <p>
        I am a <strong>Full Stack Software Developer</strong> with a <strong>Bachelor of Applied Science in Software Systems Engineering (Distinction) </strong> 
        from the University of Regina.
        <br /><br />
        Transitioning from a background in configuration and systems analysis, I now focus on building 
        scalable, end-to-end applications. I specialize in designing robust back-end architectures 
        and crafting intuitive front-end experiences to solve complex technical challenges.
        <br /><br />
        With a strong foundation in <strong>software systems engineering</strong> and <strong>workflow automation</strong>, 
        I am dedicated to delivering high-quality, efficient code and optimizing the full 
        software development lifecycle.
      </p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/dav1dk1m" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/dav1dk1m" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/sseboys/ense375-project" target="_blank" rel="noopener noreferrer" aria-label="GitLab Projects">
            <FaGitlab />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
