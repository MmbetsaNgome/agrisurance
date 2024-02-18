import React from "react";
import Transactions from "../components/Transactions";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar justify-content-md-between">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span class="fs-4">Agrisurance-DAO</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <img
                src="../images/home.svg"
                alt="home"
                className="bi me-2"
                width={16}
                height={16}
              />
              Transaction Record
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <img
                src="../images/govern.svg"
                alt="home"
                className="bi me-2"
                width={16}
                height={16}
              />
              Governance Proposal
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <img
                src="../images/claim.svg"
                alt="home"
                className="bi me-2"
                width={16}
                height={16}
              />
              Insuarance Claim
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <img
                src="../images/dispute.svg"
                alt="home"
                className="bi me-2"
                width={16}
                height={16}
              />
              Dispute Management
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <img
                src="../images/contract.svg"
                alt="home"
                className="bi me-2"
                width={16}
                height={16}
              />
              Insuarance Contract
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <img
                src="../images/stake.svg"
                alt="home"
                className="bi me-2"
                width={16}
                height={16}
              />
              Stake Adjustment
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <img
                src="../images/dao.svg"
                alt="home"
                className="bi me-2"
                width={16}
                height={16}
              />
              DAO Management
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <div className="content-wrapper">
        <nav className="d-flex navbar navbar-dark bg-main shadow navbar-expand-lg py-2">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="d-lg-inline text-gray-600 small">
                  Signed In User
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="../images/cover.jpeg"
                />
              </a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-left-danger h-100 py-2">
                <div className="card-body">create</div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-left-warning h-100 py-2">
                <div className="card-body">update</div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-left-info h-100 py-2">
                <div className="card-body">delete</div>
              </div>
            </div>
          </div>
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
