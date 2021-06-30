import React from "react";
import "./ItemTable.css";

function ItemTable({ tableNumber, detail }) {
  return (
    <>
      <div className="item-table">
        {tableNumber === 1 ? (
          <table className="table-margin1">
            <thead>
              <tr>
                <th scope="col">Deposit Amount</th>
                <th scope="col">Maintainance</th>
                <th scope="col">Notice Period</th>
                <th scope="col">Electricicty Charge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Deposit Amount">
                  {detail.deposit ? '₹' + detail.deposit : "---"}
                </td>
                <td data-label="Maintainance">
                  {detail.maintainance ? '₹' + detail.maintainance : "---"}
                </td>
                <td data-label="Notice Period">
                  {detail.noticePeriod ? detail.noticePeriod : "---"}
                </td>
                <td data-label="Electricity Charge">
                  {detail.electricityCharge ? '₹' + detail.electricityCharge : "---"}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
        {tableNumber === 2 ? (
          <table className="table-margin1">
            <thead>
              <tr>
                <th scope="col">Food Availability</th>
                <th scope="col">AC Rooms</th>
                <th scope="col">Parking</th>
                <th scope="col">Power Backup</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Food Availability">
                  {detail.breakfast && detail.lunch && detail.dinner
                    ? "All"
                    : detail.breakfast && detail.lunch
                    ? "BreakFast, Lunch"
                    : detail.breakfast && detail.dinner
                    ? "BreakFast, Dinner"
                    : detail.lunch && detail.dinner
                    ? "Lunch, Dinner"
                    : "---"}
                </td>
                <td data-label="AC Rooms">{detail.AC ? "Yes" : "---"}</td>
                <td data-label="Parking">---</td>
                <td data-label="Power Backup">
                  {detail.power_backup == true ? "Yes" : "---"}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
        {tableNumber === 3 ? (
          <table className="table-margin1">
            <thead>
              <tr>
                <th scope="col">Available For </th>
                <th scope="col">Preferred Tenants</th>
                <th scope="col">Operating Since</th>
                <th scope="col">Total Number of Beds</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Available For">
                  {detail.male == true && detail.female == true
                    ? "Boys & Girls"
                    : detail.male == true
                    ? "Boys Only"
                    : detail.female == true
                    ? "Girls Only"
                    : "---"}
                </td>
                <td data-label="Preferred Tenants">
                  {detail.professional == true && detail.student == true
                    ? "All"
                    : detail.professional == true
                    ? "Professional"
                    : detail.student
                    ? "Student"
                    : "---"}
                </td>
                <td data-label="Operating Since">
                  {detail.operational_since == ""
                    ? "---"
                    : detail.operational_since}
                </td>
                <td data-label="Total Number of Beds">---</td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
        {tableNumber === 4 ? (
          <table className="table-margin1">
            <thead>
              <tr>
                <th scope="col">One Bed Cost</th>
                <th scope="col">Two Bed Cost</th>
                <th scope="col">Multiple Bed Cost</th>
                <th scope="col">Pg is present In</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="One Bed Cost">
                  {detail.oneBedCost ? '₹' + detail.oneBedCost : "---"}
                </td>
                <td data-label="Two Bed Cost">
                  {detail.twoBedCost ? '₹' + detail.twoBedCost : "---"}
                </td>
                <td data-label="Multiple Bed Cost">
                  {detail.multipleBedCost ? '₹' + detail.multipleBedCost : "---"}
                </td>
                <td data-label="pg is present in">
                  {detail.pg_present_in ? detail.pg_present_in : "---"}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ItemTable;
