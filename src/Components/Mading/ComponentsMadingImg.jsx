// ComponentsMadingImg.jsx
const ComponentsMadingImg = ({ src }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={src}
        alt="Slide"
        className="w-[90vw] h-fit object-contain rounded-2xl"
      />
    </div>
  );
};

export default ComponentsMadingImg;
