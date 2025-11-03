import { NotepadController, NotepadCanvas } from './components';

import './notepad.scss';

function Notepad() {
  return (
    <div className="notepad-container">
      <NotepadController />
      <NotepadCanvas />
    </div>
  );
}

export default Notepad;
