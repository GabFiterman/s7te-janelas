import { ArrowDropdown, ArrowLeft, ArrowRight } from '@/assets';
import './btn-forward-backward.scss';

interface BtnForwardBackwardProps {
  disableLeftClick?: boolean;
  disableRightClick?: boolean;
  showDownClick?: boolean;

  handleDownClick?: () => void;
  handleLeftClick?: () => void;
  handleRightClick?: () => void;
}

function BtnForwardBackward({
  disableLeftClick = false,
  disableRightClick = false,
  showDownClick = true,

  handleDownClick,
  handleLeftClick,
  handleRightClick,
}: BtnForwardBackwardProps) {
  return (
    <div className="btn-forward-backward-container">
      <button onMouseDown={handleLeftClick} className="btn-forward-backward button-left" disabled={disableLeftClick}>
        <ArrowLeft />
      </button>
      <button onMouseDown={handleRightClick} className="btn-forward-backward button-right" disabled={disableRightClick}>
        <ArrowRight />
      </button>
      {showDownClick && (
        <button onMouseDown={handleDownClick} className="btn-forward-backward button-dropdown">
          <ArrowDropdown color="#3791CB" size={22} />
        </button>
      )}
    </div>
  );
}

export default BtnForwardBackward;
