import React from "react";

function Errors({ errors }) {
  const renderErrors = errors.map((error) => {
    return (
      <li>
        <small>
          <i class="fa-solid fa-triangle-exclamation"></i> {error}
        </small>
      </li>
    );
  });
  return <ul className="errorList">{renderErrors}</ul>;
}

export default Errors;
