import {Offer} from '../../types/offer';

type EquipmentListProps = {
  offerProperty: Offer;
}

function EquipmentList ({offerProperty}: EquipmentListProps): JSX.Element {
  const equipment: string[] = offerProperty.options;

  return (
    <>
      {equipment.map((option, index) => (
        <li className="property__inside-item" key={String(option) + String(index)}>{option}</li>)
      )}
    </>
  );
}

export default EquipmentList;
