import React from "react";
import RevenueChart from "./charts/RevenueChart";

function Revenue({ revenueData }) {
  return (
    <div class="container-fluid">
      <div>
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
              <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                <RevenueChart />
              </div>
              <div class="mt-4 text-center small">
                {revenueData.map((value, index) => {
                  return (
                    <>
                      <span class="mr-2">
                        <i class={`fas fa-circle ${value.textClass}`}></i> {value.revenueName}
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
