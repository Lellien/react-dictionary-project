import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map((photo, index) => {
            let photoAlt = photo.alt;
            let photographer = photo.photographer;
            return (
              <div className="col-6 col-sm-4" key={index}>
                <a href={photo.src.original} target="/blank">
                  <img
                    className="img-fluid"
                    src={photo.src.landscape}
                    alt={`${index + 1}. ${photoAlt} by ${photographer}`}
                    title={`${photoAlt} by ${photographer}`}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
