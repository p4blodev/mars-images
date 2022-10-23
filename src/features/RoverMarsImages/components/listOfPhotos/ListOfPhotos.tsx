import { Photo } from '../../../../models/rovers';
import { CardImage } from '../index';
import './ListOfPhotos.css';

const ListOfPhotos = ({ photos }: { photos: Photo[] }) => {
  return (
    <section className="list-photos-container">
      {photos.map((current: Photo, index: number) => (
        <CardImage
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
