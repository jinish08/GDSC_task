import React from "react";

function Eventcard(props) {
  return (
    <>
      <div class="card my-2 mx-4">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.content}</p>
        </div>
      </div>
    </>
  );
}

export default Eventcard;
