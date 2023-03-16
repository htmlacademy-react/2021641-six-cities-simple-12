// const changeRating () => `${Math.round() / 0.05}%`;
function changeRating (item: number) {
  return (
    `${Math.round(item) / 0.05}%`
  );
}

export default changeRating;
