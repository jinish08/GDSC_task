import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 text-muted">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 text-muted">
                Join
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 text-muted">
                Team
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 text-muted">
                Contact Us
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
