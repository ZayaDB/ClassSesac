import React from "react";

export default function PracProps(props) {
  const { food } = props;
  return (
    <div>
      좋아하는 음식:
      <p className="food">{food}</p>
    </div>
  );
}

PracProps.defaultProps = {
  food: "닭토리탕",
};
