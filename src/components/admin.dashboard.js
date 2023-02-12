import React from "react";
import { Barchart } from "./barchart";
import { useEffect, useState } from "react";
import { PieChart } from "./piechart";
import { ChartPie } from "./chartpie";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt);
        console.log(dt.result);
        setData(dt.result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="col-10 bg-light">
      <div className="row my-3">
        <div className="col-md-3 mData">
          <div className="card shadow-sm d-flex justify-content-center align-items-center">
            <div className="d-flex gap-2">
              <div className="text-muted text-truncate">Total users</div>
              <i class="bi bi-people-fill text-muted"></i>
            </div>
            <h2 className="fs-1">4.5M</h2>
          </div>
        </div>
        <div className="col-md-3 mData">
          <div className="card shadow-sm d-flex justify-content-center align-items-center">
            <div className="d-flex gap-2">
              <div className="text-muted text-truncate">Total income</div>
              <i class="bi bi-people-fill text-muted"></i>
            </div>
            <h2 className="fs-1">150M</h2>
          </div>
        </div>
        <div className="col-md-3 mData">
          <div className="card shadow-sm d-flex justify-content-center align-items-center">
            <div className="d-flex gap-2">
              <div className="text-muted text-truncate">Total expenses</div>
              <i class="bi bi-people-fill text-muted"></i>
            </div>
            <h2 className="fs-1">130M</h2>
          </div>
        </div>
        <div className="col-md-3 mData">
          <div className="card shadow-sm d-flex justify-content-center align-items-center">
            <div className="d-flex gap-2">
              <div className="text-muted text-truncate">Total employees</div>
              <i class="bi bi-people-fill text-muted"></i>
            </div>
            <h2 className="fs-1">2,000</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-around Barrow mb-3">
        <div className="col-12 col-md-6 card shadow-sm bar mb-3 h-100 pb-3 d-flex justify-content-center align-items-center">
          <Barchart />
        </div>
        <div className="col-12 col-md-6 card shadow-sm bar mb-3 h-100 pb-3 d-flex justify-content-center align-items-center">
          <Barchart />
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-12 col-md-5 col-xxl-3 card shadow-sm pie pb-4">
          <label className="fs-5 fw-bold text-center py-2">
            Total news by category
          </label>
          <PieChart />
        </div>
        <div className="col-12 col-md-5 col-xxl-3 card shadow-sm pie pb-4">
          <label className="fs-5 fw-bold text-center py-2">
            Visitors by device
          </label>
          <ChartPie />
        </div>
      </div>
      <div className="row py-3">
        <div className="table-responsive">
          <table className="table table-strip">
            <thead className="border-bottom border-3">
              <th>No</th>
              <th>Title</th>
              <th>Category</th>
              <th>isTrending</th>
            </thead>
            <tbody>
              {data.map(({ _id, title, body, isTrending, category }, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>
                      {isTrending ? (
                        <button className="btn btn-success disabled">
                          Yes
                        </button>
                      ) : (
                        <button className="btn btn-danger disabled">No</button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
