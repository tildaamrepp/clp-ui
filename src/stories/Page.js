import React from "react";
import PropTypes from "prop-types";
import { HomeOutlined, BusinessOutlined, Menu } from "@material-ui/icons";
import imageFile from "./assets/Cloudplanning.svg";
const image = {
  src: imageFile,
  alt: "my image",
};
export const Page = () => (
  <div class="wrapper fullheight-side  ">
    <div>
      <div class="logo-header position-fixed d-none d-md-flex justify-content-center">
        <a href="/" class="logo">
          <img src={image.src} alt={image.alt} class="navbar-brand" />
        </a>
        <span class="p-2 d-flex align-items-center ml-4" role="button">
          <Menu />
        </span>
      </div>
      <div class="sidebar " bg="light" variant="light" expand="md">
        <ul class="navbar-nav flex-column w-100 pt-2">
          <li class="nav-item">
            <span class="nav-link px-3 d-flex align-items-center ">
              <HomeOutlined />

              <span class="ml-2">Översikt</span>
            </span>
          </li>
          <div class="dropdown-divider" role="separator"></div>
          <li class="nav-item">
            <span class="nav-link px-3 d-flex align-items-center  active">
              <BusinessOutlined />
              <span class="ml-2">Kunder</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel full-height">
      <nav class="top-navbar sticky-top shadow-sm navbar navbar-expand-md navbar-dark bg-dark">
        <div class="d-flex w-100">
          <div class="p-0">
            <span class="d-md-none navbar-brand">
              <img
                src="assets/Cloudplanning-logotyp-inverterad.png"
                alt="logo"
              />
            </span>
          </div>
          <div class="ml-auto p-0">
            <div class="d-none d-md-block">
              <div class="ovveride-navbar-make-white-please-fix dropdown nav-item">
                <span>tilda.amre@portalplus.se</span>
              </div>
            </div>
            <div class="d-md-none">
              <div class="ovveride-navbar-make-white-please-fix dropdown nav-item">
                <span>
                  <span
                    class="material-icons MuiIcon-root MuiIcon-fontSizeInherit"
                    aria-hidden="true"
                  >
                    account_circle
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="p-0 d-md-none">
            <span
              class="p-2 d-flex align-items-center ml-4 text-white"
              role="button"
            >
              <span class="material-icons MuiIcon-root" aria-hidden="true">
                menu
              </span>
            </span>
          </div>
        </div>
      </nav>
      <div>
        <nav class="navbar shadow-sm mb-4">
          <h5 class="mb-0">Skapa kund</h5>
          <div class="float-right"></div>
        </nav>
        <div class="container-fluid"></div>
      </div>
    </div>
  </div>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
