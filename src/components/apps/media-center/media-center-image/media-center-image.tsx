import { useState, useEffect } from 'react';
import { AppControllerWidget } from '@/components';
import { controllerItems } from './constants/media-center-image-constants';
import DefaultImage from '@/../public/media-center/Imagens/placeholder.jpg';
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
import { type FileSystemItem, ITEMS_MAP_ALL } from '@/constants';

const defaultItem: FileSystemItem = ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/IMAGENS/FLOWER.JPG'];

function getAssetPath(item: FileSystemItem | undefined): string {
  if (!item) return DefaultImage;
  if (item.uri.startsWith('http')) return item.uri;

  const ssoBasePath = 'C:/USUÁRIOS/FITERMAN/';
  const assetBasePath = '/media-center/';

  if (item.path.toUpperCase().startsWith(ssoBasePath)) {
    const relativePath = item.path.substring(ssoBasePath.length);
    return assetBasePath + relativePath;
  }
  return DefaultImage;
}

interface MediaCenterImageProps {
  initialItem?: FileSystemItem;
  playlist?: FileSystemItem[];

  onClickImageBtn?: (event: React.MouseEvent<HTMLImageElement>) => void;
  onClickNext?: (event: React.MouseEvent<HTMLImageElement>) => void;
  onClickPrevious?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

function MediaCenterImage({
  initialItem = defaultItem,
  playlist = [initialItem],

  onClickImageBtn,
  onClickNext,
  onClickPrevious,
}: MediaCenterImageProps) {
  const [currentIndex, setCurrentIndex] = useState(() => playlist.findIndex((item) => item.path === initialItem.path));

  const [imageSource, setImageSource] = useState(DefaultImage);

  const handleNext = (event: React.MouseEvent<HTMLImageElement>) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    if (onClickNext) onClickNext(event);
  };

  const handlePrevious = (event: React.MouseEvent<HTMLImageElement>) => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
    if (onClickPrevious) onClickPrevious(event);
  };

  useEffect(() => {
    const currentItem = playlist[currentIndex];
    setImageSource(getAssetPath(currentItem));
  }, [currentIndex, playlist]);

  return (
    <div className="media-center-image-container">
      <AppControllerWidget controllerItems={controllerItems} />
      <div className="media-center-image-canvas">
        <img className="media-center-image-main-image" src={imageSource} alt={playlist[currentIndex]?.label} />
      </div>
      <div className="media-center-image-footer-container">
        <div className="media-center-image-footer">
          <img className="media-center-image-footer-icon" src={mediaCenterZoomMore} />
          <img className="media-center-image-footer-icon" src={mediaCenterExpandIcon} />
          <div className="media-center-image-footer-player-container">
            <img
              className="media-center-image-footer-player-icon"
              src={mediaCenterPreviousIcon}
              onClick={(event) => handlePrevious(event)}
            />
            <img
              className="media-center-image-footer-player-icon main"
              src={mediaCenterImageBtnIcon}
              onClick={(event) => onClickImageBtn && onClickImageBtn(event)}
            />
            <img
              className="media-center-image-footer-player-icon"
              src={mediaCenterNextIcon}
              onClick={(event) => handleNext(event)}
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
