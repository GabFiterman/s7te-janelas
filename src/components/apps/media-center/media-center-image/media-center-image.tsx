import { AppControllerWidget } from '@/components';
import { controllerItems } from './constants/media-center-image-constants';
import DefaultImage from '@/assets/media-center/flower.jpg';
import {
  excludeIcon,
  mediaCenterExpandIcon,
  mediaCenterImageBtnIcon,
  mediaCenterNextIcon,
  mediaCenterPreviousIcon,
  mediaCenterRedoIcon,
  mediaCenterUndoIcon,
  mediaCenterZoomMore,
} from '@/assets/icons';
import './media-center-image.scss';

interface MediaCenterImageProps {
  imageSource?: string;
  onClickImageBtn?: (event: React.MouseEvent<HTMLImageElement>) => void;
  onClickNext?: (event: React.MouseEvent<HTMLImageElement>) => void;
  onClickPrevious?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

function MediaCenterImage({
  imageSource = DefaultImage,
  onClickImageBtn,
  onClickNext,
  onClickPrevious,
}: MediaCenterImageProps) {
  return (
    <div className="media-center-image-container">
      <AppControllerWidget controllerItems={controllerItems} />
      <div className="media-center-image-canvas">
        <img className="media-center-image-main-image" src={imageSource} />
      </div>
      <div className="media-center-image-footer-container">
        <div className="media-center-image-footer">
          <img className="media-center-image-footer-icon" src={mediaCenterZoomMore} />
          <img className="media-center-image-footer-icon" src={mediaCenterExpandIcon} />
          <div className="media-center-image-footer-player-container">
            <img
              className="media-center-image-footer-player-icon"
              src={mediaCenterPreviousIcon}
              onClick={(event) => onClickPrevious && onClickPrevious(event)}
            />
            <img
              className="media-center-image-footer-player-icon main"
              src={mediaCenterImageBtnIcon}
              onClick={(event) => onClickImageBtn && onClickImageBtn(event)}
            />
            <img
              className="media-center-image-footer-player-icon"
              src={mediaCenterNextIcon}
              onClick={(event) => onClickNext && onClickNext(event)}
            />
          </div>
          <img className="media-center-image-footer-icon" src={mediaCenterUndoIcon} />
          <img className="media-center-image-footer-icon" src={mediaCenterRedoIcon} />
          <div className="vertical-line" />
          <img className="media-center-image-footer-icon" src={excludeIcon} />
        </div>
      </div>
    </div>
  );
}

export default MediaCenterImage;
