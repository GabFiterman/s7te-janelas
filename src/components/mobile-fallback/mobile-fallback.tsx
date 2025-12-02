import { GithubExternalLogo, LinkedinExternalLogo } from '@/assets';
import './mobile-fallback.scss';

function MobileFallback() {
  return (
    <div className="mobile-fallback">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">SYSTEM_BOOT_LOG</span>
        </div>

        <div className="terminal-content">
          <p className="line">
            <span className="prompt">{'>'}</span> SYSTEM CHECK... <span className="ok">OK</span>
          </p>
          <p className="line">
            <span className="prompt">{'>'}</span> LOADING KERNEL... <span className="ok">OK</span>
          </p>
          <p className="line">
            <span className="prompt">{'>'}</span> DETECTING RESOLUTION... <span className="warn">MOBILE DETECTED</span>
          </p>
          <p className="line">
            <span className="prompt">{'>'}</span> ERROR: GUI_DRIVER_INCOMPATIBLE
          </p>
          <p className="line">
            <span className="prompt">{'>'}</span> <span className="blink">_SYSTEM HALTED</span>
          </p>

          <div className="message-box">
            <h3>MOBILE UNDER CONSTRUCTION</h3>
            <p>
              A experiência completa do <strong>Sete Janelas OS</strong> foi projetada para Desktop. A versão mobile
              está sendo compilada neste momento.
            </p>
          </div>

          <div className="actions">
            <p>Enquanto isso, acesse via Desktop ou conecte-se:</p>
            <div className="buttons">
              <a href="https://linkedin.com/in/GabFiterman" target="_blank" rel="noreferrer" className="btn-retro">
                <img src={LinkedinExternalLogo} alt="LinkedIn" /> LinkedIn
              </a>
              <a href="https://github.com/GabFiterman" target="_blank" rel="noreferrer" className="btn-retro">
                <img src={GithubExternalLogo} alt="GitHub" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFallback;

//
