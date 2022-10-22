import { Photo } from '../../../../models/rovers';
import { Photo as CardPhoto } from '../index';
import './ListOfPhotos.css';

const ListOfPhotos = ({ photos }: { photos: Photo[] }) => {
  return (
    <section className="photos-container">
      {photos.map((current: Photo, index: number) => (
        <CardPhoto
          image={current.img_src}
          key={`${current.id}-${index}`}
          earthDate={current.earth_date}
          cameraName={current.camera.full_name}
        />
      ))}
    </section>
  );
};

export default ListOfPhotos;
