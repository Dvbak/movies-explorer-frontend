function convertTime(duration) {
  const minutes = duration % 60;
  const hours = Math.floor(duration / 60);
  return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
}

export default convertTime;
