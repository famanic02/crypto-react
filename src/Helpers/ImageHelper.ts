export const getIcon = (imageID: string) => {
  return `${process.env.REACT_APP_BASE_URL}/static/img/weather/${imageID}.svg`;
};
