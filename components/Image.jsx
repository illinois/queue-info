import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Image = ({ src, caption, shadow }) => {
  const imgClassnames = classNames({
    "img-fluid": true,
    rounded: true,
    "shadow-img": shadow
  });
  return (
    <figure>
      <img className={imgClassnames} src={src} />
      {caption && <figcaption className="figure-caption mt-2 text-center">{caption}</figcaption>}
      <style jsx>{`
        .shadow-img {
          box-shadow: 0 3px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
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
