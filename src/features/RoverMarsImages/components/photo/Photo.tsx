import { PhotoType } from './Photo.type';
import './Photo.css';

const Photo = ({ image, earthDate, cameraName }: PhotoType) => {
  return (
    <div className="photo-container">
      <h2>{cameraName}</h2>
      <p>{earthDate.toString()}</p>
      <div>
        <img loading="lazy" src={image} alt={cameraName} />
      </div>
    </div>
  );
};

export default Photo;
