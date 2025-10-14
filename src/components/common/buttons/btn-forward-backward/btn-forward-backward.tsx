import { ArrowDropdown, ArrowLeft, ArrowRight } from '@/assets/icons';
import './btn-forward-backward.scss';

interface BtnForwardBackwardProps {
  handleLeftClick?: () => void;
  handleRightClick?: () => void;
  handleDownClick?: () => void;
  showDownClick?: boolean;
}

function BtnForwardBackward({
  handleLeftClick,
  handleRightClick,
  handleDownClick,
  showDownClick = true,
}: BtnForwardBackwardProps) {
  return (
    <div className="btn-forward-backward-container">
      <button onMouseDown={handleLeftClick} className="btn-forward-backward button-left">
        <ArrowLeft />
      </button>
      <button onMouseDown={handleRightClick} className="btn-forward-backward button-right">
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
