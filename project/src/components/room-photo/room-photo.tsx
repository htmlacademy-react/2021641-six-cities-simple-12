type PhotoProps = {
  image: string;
}

function RoomPhoto ({image}: PhotoProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Room" />
    </div>
  );
}

export default RoomPhoto;
