import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, caption }) => {
  return (
    <figure>
      <img className="img-fluid" src={src} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

Image.propTypes = {
  caption: PropTypes.node
};

Image.defaultProps = {
  caption: null
};

export default Image;
