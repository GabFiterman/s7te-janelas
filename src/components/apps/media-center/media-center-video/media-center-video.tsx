import { useState, useEffect } from 'react';
import defaultVideo from '@/../public/media-center/Videos/Jimmy_Hendrix.mp4';
import { type FileSystemItem, ITEMS_MAP_ALL } from '@/constants';
import { LoaderCircle } from '@/components';
import './media-center-video.scss';

function getAssetPath(item: FileSystemItem | undefined): string {
  if (!item) return defaultVideo;
  if (item.uri && item.uri.startsWith('http')) return item.uri;

  const ssoBasePath = 'C:/USUÁRIOS/FITERMAN/';
  const assetBasePath = '/media-center/';

  if (item.path.toUpperCase().startsWith(ssoBasePath)) {
    const relativePath = item.path.substring(ssoBasePath.length);
    return assetBasePath + relativePath;
  }
  return defaultVideo;
}

const defaultItem: FileSystemItem = ITEMS_MAP_ALL['C:/USUARIOS/FITERMAN/VIDEOS/JIMMY_HENDRIX.MP4'];

interface MediaCenterVideoProps {
  initialItem?: FileSystemItem;
}

function MediaCenterVideo({ initialItem = defaultItem }: MediaCenterVideoProps) {
  const [videoSource, setVideoSource] = useState(() => getAssetPath(initialItem));

  const [isLoading, setIsLoading] = useState(true);

  const handleVideoCanPlay = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const newSource = getAssetPath(initialItem);

    if (newSource !== videoSource) {
      setIsLoading(true);
      setVideoSource(newSource);
    }
  }, [initialItem, videoSource]);

  return (
    <div className="media-center-video-container">
      {isLoading && (
        <div className="video-loader-overlay">
          <LoaderCircle />
        </div>
      )}

      <video
        className="media-center-video-player"
        controls
        onCanPlay={handleVideoCanPlay}
        onError={handleVideoError}
        style={{ opacity: isLoading ? 0 : 1 }}
      >
        <source src={videoSource} type="video/mp4" />
        Tipo de vídeo não suportado.
      </video>
    </div>
  );
}

export default MediaCenterVideo;
