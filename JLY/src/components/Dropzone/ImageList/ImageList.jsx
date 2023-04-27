import "./ImageList.css";
const ImageList = ({ images }) => {
  // render each image by calling Image component
  const renderImage = (image, index) => {
    return <img className={""} src={image.src} key={`${image.name}-image`} />;
  };

  // Return the list of files
  return <section className="file-list">{images.map(renderImage)}</section>;
};

export default ImageList;
