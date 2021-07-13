import React from "react";
import PropTypes from "prop-types"; // we can set what datatype of props we want to recieve.

const Rating = ({ value, text, color }) => {
  let stars = [],
    val = value;
  for (let i = 5; i > 0; i--) {
    if (val >= 0.5) {
      stars.push(
        <span>
          <i
            style={{ color: color }}
            className={val >= 1 ? "fas fa-star" : "fas fa-star-half-alt"}
          ></i>
        </span>
      );
    } else {
      stars.push(
        <span>
          <i className={"far fa-star"}></i>
        </span>
      );
    }
    val -= 1;
  }

  return (
    <div className="rating">
      {stars.map((star) => {
        return <span>{star}</span>;
      })}
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
/* <span>{text ? text : ""}</span> */
