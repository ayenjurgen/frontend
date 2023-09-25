<>

  <div className="header">
    <div className="header-left">
      <div className="menu-icon bi bi-list" />
    </div>
  </div>
  <div className="left-side-bar sidebar-light">
    <div className="profile">
      <div className="prof-top">
        <img src="../assets/TAU logo.png" />
        <p className="studname">greenhills escandor-mariano callanta-peligro</p>
      </div>
      <div className="close-sidebar" data-toggle="left-sidebar-close">
        <i className="ion-close-round" />
      </div>
    </div>
    <div className="menu-block customscroll">
      <div className="sidebar-menu">
        <ul id="accordion-menu">
          <li>
            <a href="#" className="dropdown-toggle no-arrow">
              <span className="micon bi bi bi-house" />
              <span className="mtext">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-toggle no-arrow">
              <span className="micon bi bi-person-check" />
              <span className="mtext">My Profile</span>
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-toggle no-arrow">
              <span className="micon bi bi-arrow-left" />
              <span className="mtext">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="mobile-menu-overlay" />
  <div className="main-container">
    <div className="xs-pd-20-10 pd-ltr-20">
      <div className="title pb-20">
        <h2 className="h3 mb-0">My Profile</h2>
      </div>
      <form action="post">
        <div className="row">
          <div className="col-md-9">
            <div className="pd-20 card-box mb-30">
              <section>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>First Name :</label>
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Middle Name :</label>
                      <input
                        type="text"
                        name="middlename"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div
            className="col-md-3"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <button
              type="submit"
              name="register"
              className="btn"
              id="submit-button"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="main-container">
    <div class="pd-ltr-20 xs-pd-20-10">
      <>
 
        <div className="main-container">
          <div className="xs-pd-20-10 pd-ltr-20">
            <div className="title pb-20">
              <h2 className="h3 mb-0">Hospital Overview</h2>
            </div>
            <div className="row pb-10">
              <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
                <div className="card-box height-100-p widget-style3">
                  <div className="d-flex flex-wrap">
                    <div className="widget-data">
                      <div className="weight-700 font-24 text-dark">75</div>
                      <div className="font-14 text-secondary weight-500">
                        Appointment
                      </div>
                    </div>
                    <div className="widget-icon">
                      <div className="icon" data-color="#00eccf">
                        <i className="icon-copy dw dw-calendar1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
                <div className="card-box height-100-p widget-style3">
                  <div className="d-flex flex-wrap">
                    <div className="widget-data">
                      <div className="weight-700 font-24 text-dark">124,551</div>
                      <div className="font-14 text-secondary weight-500">
                        Total Patient
                      </div>
                    </div>
                    <div className="widget-icon">
                      <div className="icon" data-color="#ff5b5b">
                        <span className="icon-copy ti-heart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
                <div className="card-box height-100-p widget-style3">
                  <div className="d-flex flex-wrap">
                    <div className="widget-data">
                      <div className="weight-700 font-24 text-dark">400+</div>
                      <div className="font-14 text-secondary weight-500">
                        Total Doctor
                      </div>
                    </div>
                    <div className="widget-icon">
                      <div className="icon">
                        <i
                          className="icon-copy fa fa-stethoscope"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
                <div className="card-box height-100-p widget-style3">
                  <div className="d-flex flex-wrap">
                    <div className="widget-data">
                      <div className="weight-700 font-24 text-dark">$50,000</div>
                      <div className="font-14 text-secondary weight-500">Earning</div>
                    </div>
                    <div className="widget-icon">
                      <div className="icon" data-color="#09cc06">
                        <i className="icon-copy fa fa-money" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-10">
              <div className="col-md-8 mb-20">
                <div className="card-box height-100-p pd-20">
                  <div className="d-flex flex-wrap justify-content-between align-items-center pb-0 pb-md-3">
                    <div className="h5 mb-md-0">Hospital Activities</div>
                    <div className="form-group mb-md-0">
                      <select className="form-control form-control-sm selectpicker">
                        <option value="">Last Week</option>
                        <option value="">Last Month</option>
                        <option value="">Last 6 Month</option>
                        <option value="">Last 1 year</option>
                      </select>
                    </div>
                  </div>
                  <div id="activities-chart" />
                </div>
              </div>
              <div className="col-md-4 mb-20">
                <div
                  className="card-box min-height-200px pd-20 mb-20"
                  data-bgcolor="#455a64"
                >
                  <div className="d-flex justify-content-between pb-20 text-white">
                    <div className="icon h1 text-white">
                      <i className="fa fa-calendar" aria-hidden="true" />
                      {/* <i class="icon-copy fa fa-stethoscope" aria-hidden="true"></i> */}
                    </div>
                    <div className="font-14 text-right">
                      <div>
                        <i className="icon-copy ion-arrow-up-c" /> 2.69%
                      </div>
                      <div className="font-12">Since last month</div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="text-white">
                      <div className="font-14">Appointment</div>
                      <div className="font-24 weight-500">1865</div>
                    </div>
                    <div className="max-width-150">
                      <div id="appointment-chart" />
                    </div>
                  </div>
                </div>
                <div
                  className="card-box min-height-200px pd-20"
                  data-bgcolor="#265ed7"
                >
                  <div className="d-flex justify-content-between pb-20 text-white">
                    <div className="icon h1 text-white">
                      <i className="fa fa-stethoscope" aria-hidden="true" />
                    </div>
                    <div className="font-14 text-right">
                      <div>
                        <i className="icon-copy ion-arrow-down-c" /> 3.69%
                      </div>
                      <div className="font-12">Since last month</div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="text-white">
                      <div className="font-14">Surgery</div>
                      <div className="font-24 weight-500">250</div>
                    </div>
                    <div className="max-width-150">
                      <div id="surgery-chart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-20">
                <div className="card-box height-100-p pd-20 min-height-200px">
                  <div className="d-flex justify-content-between pb-10">
                    <div className="h5 mb-0">Top Doctors</div>
                    <div className="dropdown">
                      <a
                        className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                        data-color="#1b3133"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                      >
                        <i className="dw dw-more" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                        <a className="dropdown-item" href="#">
                          <i className="dw dw-eye" /> View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="dw dw-edit2" /> Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="dw dw-delete-3" /> Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="user-list">
                    <ul>
                      <li className="d-flex align-items-center justify-content-between">
                        <div className="name-avatar d-flex align-items-center pr-2">
                          <div className="avatar mr-2 flex-shrink-0">
                            <img
                              src="vendors/images/photo1.jpg"
                              className="border-radius-100 box-shadow"
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                          <div className="txt">
                            <span
                              className="badge badge-pill badge-sm"
                              data-bgcolor="#e7ebf5"
                              data-color="#265ed7"
                            >
                              4.9
                            </span>
                            <div className="font-14 weight-600">Dr. Neil Wagner</div>
                            <div className="font-12 weight-500" data-color="#b2b1b6">
                              Pediatrician
                            </div>
                          </div>
                        </div>
                        <div className="cta flex-shrink-0">
                          <a href="#" className="btn btn-sm btn-outline-primary">
                            Schedule
                          </a>
                        </div>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <div className="name-avatar d-flex align-items-center pr-2">
                          <div className="avatar mr-2 flex-shrink-0">
                            <img
                              src="vendors/images/photo2.jpg"
                              className="border-radius-100 box-shadow"
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                          <div className="txt">
                            <span
                              className="badge badge-pill badge-sm"
                              data-bgcolor="#e7ebf5"
                              data-color="#265ed7"
                            >
                              4.9
                            </span>
                            <div className="font-14 weight-600">Dr. Ren Delan</div>
                            <div className="font-12 weight-500" data-color="#b2b1b6">
                              Pediatrician
                            </div>
                          </div>
                        </div>
                        <div className="cta flex-shrink-0">
                          <a href="#" className="btn btn-sm btn-outline-primary">
                            Schedule
                          </a>
                        </div>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <div className="name-avatar d-flex align-items-center pr-2">
                          <div className="avatar mr-2 flex-shrink-0">
                            <img
                              src="vendors/images/photo3.jpg"
                              className="border-radius-100 box-shadow"
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                          <div className="txt">
                            <span
                              className="badge badge-pill badge-sm"
                              data-bgcolor="#e7ebf5"
                              data-color="#265ed7"
                            >
                              4.9
                            </span>
                            <div className="font-14 weight-600">
                              Dr. Garrett Kincy
                            </div>
                            <div className="font-12 weight-500" data-color="#b2b1b6">
                              Pediatrician
                            </div>
                          </div>
                        </div>
                        <div className="cta flex-shrink-0">
                          <a href="#" className="btn btn-sm btn-outline-primary">
                            Schedule
                          </a>
                        </div>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <div className="name-avatar d-flex align-items-center pr-2">
                          <div className="avatar mr-2 flex-shrink-0">
                            <img
                              src="vendors/images/photo4.jpg"
                              className="border-radius-100 box-shadow"
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                          <div className="txt">
                            <span
                              className="badge badge-pill badge-sm"
                              data-bgcolor="#e7ebf5"
                              data-color="#265ed7"
                            >
                              4.9
                            </span>
                            <div className="font-14 weight-600">Dr. Callie Reed</div>
                            <div className="font-12 weight-500" data-color="#b2b1b6">
                              Pediatrician
                            </div>
                          </div>
                        </div>
                        <div className="cta flex-shrink-0">
                          <a href="#" className="btn btn-sm btn-outline-primary">
                            Schedule
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <div className="card-box height-100-p pd-20 min-height-200px">
                  <div className="d-flex justify-content-between">
                    <div className="h5 mb-0">Diseases Report</div>
                    <div className="dropdown">
                      <a
                        className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                        data-color="#1b3133"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                      >
                        <i className="dw dw-more" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                        <a className="dropdown-item" href="#">
                          <i className="dw dw-eye" /> View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="dw dw-edit2" /> Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="dw dw-delete-3" /> Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="diseases-chart" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-20">
                <div className="card-box height-100-p pd-20 min-height-200px">
                  <div className="max-width-300 mx-auto">
                    <img src="vendors/images/upgrade.svg" alt="" />
                  </div>
                  <div className="text-center">
                    <div className="h5 mb-1">Upgrade to Pro</div>
                    <div
                      className="font-14 weight-500 max-width-200 mx-auto pb-20"
                      data-color="#a6a6a7"
                    >
                      You can enjoy all our features by upgrading to pro.
                    </div>
                    <a href="#" className="btn btn-primary btn-lg">
                      Upgrade
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-box pb-10">
              <div className="h5 pd-20 mb-0">Recent Patient</div>
              <table className="data-table table nowrap">
                <thead>
                  <tr>
                    <th className="table-plus">Name</th>
                    <th>Gender</th>
                    <th>Weight</th>
                    <th>Assigned Doctor</th>
                    <th>Admit Date</th>
                    <th>Disease</th>
                    <th className="datatable-nosort">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-plus">
                      <div className="name-avatar d-flex align-items-center">
                        <div className="avatar mr-2 flex-shrink-0">
                          <img
                            src="vendors/images/photo4.jpg"
                            className="border-radius-100 shadow"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                        <div className="txt">
                          <div className="weight-600">Jennifer O. Oster</div>
                        </div>
                      </div>
                    </td>
                    <td>Female</td>
                    <td>45 kg</td>
                    <td>Dr. Callie Reed</td>
                    <td>19 Oct 2020</td>
                    <td>
                      <span
                        className="badge badge-pill"
                        data-bgcolor="#e7ebf5"
                        data-color="#265ed7"
                      >
                        Typhoid
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <a href="#" data-color="#265ed7">
                          <i className="icon-copy dw dw-edit2" />
                        </a>
                        <a href="#" data-color="#e95959">
                          <i className="icon-copy dw dw-delete-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-plus">
                      <div className="name-avatar d-flex align-items-center">
                        <div className="avatar mr-2 flex-shrink-0">
                          <img
                            src="vendors/images/photo5.jpg"
                            className="border-radius-100 shadow"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                        <div className="txt">
                          <div className="weight-600">Doris L. Larson</div>
                        </div>
                      </div>
                    </td>
                    <td>Male</td>
                    <td>76 kg</td>
                    <td>Dr. Ren Delan</td>
                    <td>22 Jul 2020</td>
                    <td>
                      <span
                        className="badge badge-pill"
                        data-bgcolor="#e7ebf5"
                        data-color="#265ed7"
                      >
                        Dengue
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <a href="#" data-color="#265ed7">
                          <i className="icon-copy dw dw-edit2" />
                        </a>
                        <a href="#" data-color="#e95959">
                          <i className="icon-copy dw dw-delete-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-plus">
                      <div className="name-avatar d-flex align-items-center">
                        <div className="avatar mr-2 flex-shrink-0">
                          <img
                            src="vendors/images/photo6.jpg"
                            className="border-radius-100 shadow"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                        <div className="txt">
                          <div className="weight-600">Joseph Powell</div>
                        </div>
                      </div>
                    </td>
                    <td>Male</td>
                    <td>90 kg</td>
                    <td>Dr. Allen Hannagan</td>
                    <td>15 Nov 2020</td>
                    <td>
                      <span
                        className="badge badge-pill"
                        data-bgcolor="#e7ebf5"
                        data-color="#265ed7"
                      >
                        Infection
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <a href="#" data-color="#265ed7">
                          <i className="icon-copy dw dw-edit2" />
                        </a>
                        <a href="#" data-color="#e95959">
                          <i className="icon-copy dw dw-delete-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-plus">
                      <div className="name-avatar d-flex align-items-center">
                        <div className="avatar mr-2 flex-shrink-0">
                          <img
                            src="vendors/images/photo9.jpg"
                            className="border-radius-100 shadow"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                        <div className="txt">
                          <div className="weight-600">Jake Springer</div>
                        </div>
                      </div>
                    </td>
                    <td>Female</td>
                    <td>45 kg</td>
                    <td>Dr. Garrett Kincy</td>
                    <td>08 Oct 2020</td>
                    <td>
                      <span
                        className="badge badge-pill"
                        data-bgcolor="#e7ebf5"
                        data-color="#265ed7"
                      >
                        Covid 19
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <a href="#" data-color="#265ed7">
                          <i className="icon-copy dw dw-edit2" />
                        </a>
                        <a href="#" data-color="#e95959">
                          <i className="icon-copy dw dw-delete-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-plus">
                      <div className="name-avatar d-flex align-items-center">
                        <div className="avatar mr-2 flex-shrink-0">
                          <img
                            src="vendors/images/photo1.jpg"
                            className="border-radius-100 shadow"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                        <div className="txt">
                          <div className="weight-600">Paul Buckland</div>
                        </div>
                      </div>
                    </td>
                    <td>Male</td>
                    <td>76 kg</td>
                    <td>Dr. Maxwell Soltes</td>
                    <td>12 Dec 2020</td>
                    <td>
                      <span
                        className="badge badge-pill"
                        data-bgcolor="#e7ebf5"
                        data-color="#265ed7"
                      >
                        Asthma
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <a href="#" data-color="#265ed7">
                          <i className="icon-copy dw dw-edit2" />
                        </a>
                        <a href="#" data-color="#e95959">
                          <i className="icon-copy dw dw-delete-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-plus">
                      <div className="name-avatar d-flex align-items-center">
                        <div className="avatar mr-2 flex-shrink-0">
                          <img
                            src="vendors/images/photo2.jpg"
                            className="border-radius-100 shadow"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                        <div className="txt">
                          <div className="weight-600">Neil Arnold</div>
                        </div>
                      </div>
                    </td>
                    <td>Male</td>
                    <td>60 kg</td>
                    <td>Dr. Sebastian Tandon</td>
                    <td>30 Oct 2020</td>
                    <td>
                      <span
                        className="badge badge-pill"
                        data-bgcolor="#e7ebf5"
                        data-color="#265ed7"
                      >
                        Diabetes
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <a href="#" data-color="#265ed7">
                          <i className="icon-copy dw dw-edit2" />
                        </a>
                        <a href="#" data-color="#e95959">
                          <i className="icon-copy dw dw-delete-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-plus">
                      <div className="name-avatar d-flex align-items-center">
                        <div className="avatar mr-2 flex-shrink-0">
                          <img
                            src="vendors/images/photo8.jpg"
                            className="border-radius-100 shadow"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                        <div className="txt">
                          <div className="weight-600">Christian Dyer</div>
                        </div>
                      </div>
                    </td>
                    <td>Male</td>
                    <td>80 kg</td>
                    <td>Dr. Sebastian Tandon</td>
                    <td>15 Jun 2020</td>
                    <td>
                      <span
                        className="badge badge-pill"
                        data-bgcolor="#e7ebf5"
                        data-color="#265ed7"
                      >
                        Diabetes
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <a href="#" data-color="#265ed7">
                          <i className="icon-copy dw dw-edit2" />
                        </a>
                        <a href="#" data-color="#e95959">
                          <i className="icon-copy dw dw-delete-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-plus">
                      <div className="name-avatar d-flex align-items-center">
                        <div className="avatar mr-2 flex-shrink-0">
                          <img
                            src="vendors/images/photo1.jpg"
                            className="border-radius-100 shadow"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                        <div className="txt">
                          <div className="weight-600">Doris L. Larson</div>
                        </div>
                      </div>
                    </td>
                    <td>Male</td>
                    <td>76 kg</td>
                    <td>Dr. Ren Delan</td>
                    <td>22 Jul 2020</td>
                    <td>
                      <span
                        className="badge badge-pill"
                        data-bgcolor="#e7ebf5"
                        data-color="#265ed7"
                      >
                        Dengue
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <a href="#" data-color="#265ed7">
                          <i className="icon-copy dw dw-edit2" />
                        </a>
                        <a href="#" data-color="#e95959">
                          <i className="icon-copy dw dw-delete-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="title pb-20 pt-20">
              <h2 className="h3 mb-0">Quick Start</h2>
            </div>
            <div className="row">
              <div className="col-md-4 mb-20">
                <a href="#" className="card-box d-block mx-auto pd-20 text-secondary">
                  <div className="img pb-30">
                    <img src="vendors/images/medicine-bro.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="h4">Services</h3>
                    <p className="max-width-200">
                      We provide superior health care in a compassionate maner
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 mb-20">
                <a href="#" className="card-box d-block mx-auto pd-20 text-secondary">
                  <div className="img pb-30">
                    <img src="vendors/images/remedy-amico.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="h4">Medications</h3>
                    <p className="max-width-200">
                      Look for prescription and over-the-counter drug information.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 mb-20">
                <a href="#" className="card-box d-block mx-auto pd-20 text-secondary">
                  <div className="img pb-30">
                    <img src="vendors/images/paper-map-cuate.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="h4">Locations</h3>
                    <p className="max-width-200">
                      Convenient locations when and where you need them.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-wrap pd-20 mb-20 card-box">
              DeskApp - Bootstrap 4 Admin Template By
              <a href="https://github.com/dropways" target="_blank">
                Ankit Hingarajiya
              </a>
            </div>
          </div>
        </div>

      </>


    </div>
  </div>

  <>
    <h2>Product View {id}</h2>
    <p>
      <label>
        Product Name <strong>{product.product_name}</strong>
      </label>
    </p>
    <p>
      <label>
        Quantity <strong>{product.quantity}</strong>
      </label>
    </p>
    {/* <p>
                <label>
                    Rate <strong>{product.rate}</strong>
                </label>
            </p> */}
    <p>
      <label>
        Price <strong>{product.price}</strong>
      </label>
    </p>
    {/* <p>
                <label>
                    Active <strong>{product.active}</strong>
                </label>
            </p> */}
    <p>
      <label>
        Status <strong>{product.status == 1 ? "available" : "Not available"}</strong>
      </label>
    </p>
    <p>
      <Link to={"/"}>Back to List</Link>
      <Link onClick={handleDelete}>Delete</Link>
    </p>
  </>
  {/* js */}
</>


