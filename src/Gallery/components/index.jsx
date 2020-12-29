import React, { useEffect } from "react";

export const Gallery = (props) => {
  const { imageGallery, imageGalleryActions } = props;
  const { data, loading, error } = imageGallery;

  useEffect(() => {
    imageGalleryActions.imagesFetch();

    return () => {
      imageGalleryActions.imagesReset();
    };
  }, []);

  return (
    <React.Fragment>
      {!data && loading && <div>...loading</div>}
      {!loading &&
        data &&
        data.length > 0 &&
        data.map((details, index) => {
          return (
            <div key={index}>
              <img
                src={details.download_url}
                alt={details.author}
                width="100"
                height="100"
              />
              <div style={{ marginTop: "1rem" }}>{details.author}</div>
            </div>
          );
        })}
      {!loading && error && <div>Error occured</div>}
    </React.Fragment>
  );
};

export default Gallery;
