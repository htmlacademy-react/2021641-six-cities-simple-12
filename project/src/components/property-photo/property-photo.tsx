import { Offer } from '../../types/offer';

type PropertyPhotoProps = {
  offerProperty: Offer;
}

function PropertyPhoto ({offerProperty}: PropertyPhotoProps): JSX.Element {
  const photos: string[] = offerProperty.src;
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

export default PropertyPhoto;
