type EquipmentListProps = {
  item: string;
}

function EquipmentList ({item}: EquipmentListProps): JSX.Element {
  return (
    <li className="property__inside-item">{item}</li>
  );
}

export default EquipmentList;
