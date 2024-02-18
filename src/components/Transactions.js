import React from "react";

const Transactions = () => {
  return (
    <>
      <div className="row info ">
        <div className="col-md-4">
          <div class="card text-white bg-danger mb-3 info-tab">
            <div class="card-body">
              <h5 class="card-title">Danger card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card text-dark bg-warning mb-3 info-tab">
            <div class="card-body">
              <h5 class="card-title">Warning card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card text-dark bg-info mb-3 info-tab">
            <div class="card-body">
              <h5 class="card-title">Info card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <table class="table pt-2 mx-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Transactions;
