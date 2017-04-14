import React from "react";
import "./Client.styl";

const Client = ({name, image, children}) =>
  <div className="col-md-4 client">
    <img
      alt={`${name} Logo`}
      className="img-circle image"
      src={image}
    />
    <h4>{name}</h4>
    <p>{children}</p>
  </div>;

export default Client;
