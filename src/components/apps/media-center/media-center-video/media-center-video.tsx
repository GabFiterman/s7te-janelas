import { useState, useEffect } from 'react';
import defaultVideo from '@/../public/media-center/Videos/Jimmy_Hendrix.mp4';
import { type FileSystemItem, ITEMS_MAP_ALL } from '@/constants';
import './media-center-video.scss';

const defaultItem: FileSystemItem = ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VIDEOS/JIMMY_HENDRIX.MP4'];

function getAssetPath(item: FileSystemItem | undefined): string {
  if (!item) return defaultVideo;
  if (item.uri.startsWith('http')) return item.uri;

  const ssoBasePath = 'C:/USUÁRIOS/FITERMAN/';
  const assetBasePath = '/media-center/';

  if (item.path.toUpperCase().startsWith(ssoBasePath)) {
    const relativePath = item.path.substring(ssoBasePath.length);
    return assetBasePath + relativePath;
  }
  return defaultVideo;
}

interface MediaCenterVideoProps {
  initialItem?: FileSystemItem;
}

function MediaCenterVideo({ initialItem = defaultItem }: MediaCenterVideoProps) {
  const [videoSource, setVideoSource] = useState(initialItem?.path ? getAssetPath(initialItem) : defaultVideo);

  useEffect(() => {
    setVideoSource(getAssetPath(initialItem));
  }, [initialItem]);

  return (
    <div className="media-center-video-container">
      <video className="media-center-video-player" controls>
        <source src={videoSource} type="video/mp4" />
        Tipo de vídeo não suportado.
      </video>
    </div>
  );
}

export default MediaCenterVideo;
