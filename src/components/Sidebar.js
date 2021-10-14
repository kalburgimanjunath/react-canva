import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="./">
              <span data-feather="home"></span>
              Recommended for you
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alldesigns">
              <span data-feather="file"></span>
              All your designs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./shared">
              <span data-feather="shopping-cart"></span>
              Shared with you
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./brandkit">
              <span data-feather="users"></span>
              Brand Kit
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./contentplanner">
              <span data-feather="bar-chart-2"></span>
              Content Planner
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./allfolders">
              <span data-feather="layers"></span>
              All your folders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./trash">
              <span data-feather="layers"></span>
              Trash
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Users</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Atahska
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Invite members
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
