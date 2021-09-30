import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [bool, setBool] = useState(false);

  function handleClick() {
    setBool(true);
  }
  return (
    <>
      <div className="container-fluid contact mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="danger-btn mx-auto">
              <Link
                onClick={handleClick}
                to="/"
                className="join-btn my-5 btn btn-lg btn-danger"
              >
                Have some queries ?
              </Link>
            </div>
            <div className="form mx-auto">
              <form style={!bool ? { display: "none" } : null}>
                <div class="mb-3">
                  <label for="exampleInputName1" class="form-label">
                    Full Name
                  </label>
                  <input
                    style={{ width: "300px" }}
                    type="name"
                    class="form-control"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email
                  </label>
                  <input
                    style={{ width: "300px" }}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputMessage1" class="form-label">
                    Message
                  </label>
                  <textarea
                    style={{ width: "300px" }}
                    type="message"
                    class="form-control"
                    id="exampleInputMessage1"
                  />
                </div>
                <button type="submit" class="mb-5 btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
