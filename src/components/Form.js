import React from "react";

const Form = () => {
  return (
    <div className="wrapper wrapper--w960">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 reg-img">
            {/* <img
              src="../images/cover.jpeg"
              class="img-fluid rounded-start reg-img"
              alt="..."
            /> */}
          </div>
          <div class="col-md-8 py-5">
            <div className="card-body px-5">
              <h2 className="card-title mb-4">CREATE USER PROFILE</h2>
              <form method="POST">
                <div class="form-floating mb-4">
                  <input
                    type="text"
                    class="form-control reg-input"
                    id="floatingInput"
                    placeholder="Name"
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-4">
                  <select
                    class="form-select reg-input"
                    id="floatingSelect"
                    aria-label="Role"
                  >
                    <option selected></option>
                    <option value="Farmer">Farmer</option>
                    <option value="Consumer">Consumer</option>
                  </select>
                  <label for="floatingSelect">Role</label>
                </div>
                <div class="form-floating">
                  <input
                    type="number"
                    min={0}
                    class="form-control reg-input"
                    id="floatingInput"
                    placeholder="Stake In DAO"
                  />
                  <label for="floatingInput">Stake In DAO</label>
                </div>
                <div className="pt-4">
                  <button href="" className="btn btn-success">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
