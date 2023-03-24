import { Offer } from '../../types/offer';

type RoomPhotoProps = {
  offerProperty: Offer;
}

function RoomPhoto ({offerProperty}: RoomPhotoProps): JSX.Element {
  const photos: string[] = offerProperty.previewImage;
  return (
    <>
      {photos.map((photo, index) => (
        <div className="property__image-wrapper" key={String(photo) + String(index)}>
          <img className="property__image" src={photo} alt="Room" />
        </div>)
      )}
    </>
  );
}

export default RoomPhoto;
