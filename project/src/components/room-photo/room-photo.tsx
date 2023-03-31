import { Offer } from '../../types/offer';

type RoomPhotoProps = {
  offer: Offer;
}

function RoomPhoto ({offer}: RoomPhotoProps): JSX.Element {
  const photos: string[] = offer.previewImage;
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
