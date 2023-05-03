import React from "react";

function DashboardCards({ cardData }) {
  return (
    <div>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
          </a>
        </div>

        <div class="row">
          {cardData.map((value, index) => {
            return (
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class={`text-xs font-weight-bold ${value.textColor} text-uppercase mb-1`}
                        >
                          {value.cardName}
                        </div>
                        <div class="row no-gutters align-items-center">
                          <div class="col-auto">
                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                              {value.cardValue}
                            </div>
                          </div>
                          {value.cardName === "Tasks" && (
                            <div class="col">
                              <div class="progress progress-sm mr-2">
                                <div
                                  class="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class={value.symbol}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
