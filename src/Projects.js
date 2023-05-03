import React from "react";

function Projects({ projectsData, colors }) {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12 col-lg-12 mb-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div class="card-body">
              {projectsData.map((value, index) => {
                return (
                  <>
                    <h4 class="small font-weight-bold">
                      {value.projectName}{" "}
                      <span class="float-right">{value.projectProgress}%</span>
                    </h4>
                    <div class="progress mb-4">
                      <div
                        class={`progress-bar ${value.progressColor}`}
                        role="progressbar"
                        style={{ width: `${value.width}%` }}
                        aria-valuenow={`${value.width}`}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div class="row">
            {colors.map((value, index) => {
              return (
                <>
                  <div class="col-lg-6 mb-4">
                    <div class={`card ${value.colorClass} ${value.textClass} shadow`}>
                      <div class="card-body">
                        {value.colorName}
                        <div class={`${value.textClass}-50 small`}>{value.colorText}</div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
      );
}

export default Projects;
