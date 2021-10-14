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
            <a className="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              Recommended for you
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alldesigns">
              <span data-feather="file"></span>
              All your designs
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Shared with you
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users"></span>
              Brand Kit
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Content Planner
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers"></span>
              All your folders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers"></span>
              Trash
            </a>
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
