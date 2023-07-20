import React from "react";
import data from "../assets/dummyData.json";
import "../styles/table.css";

const Table = () => {
    return (
        <div className="container-table">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Year</th>
                        <th>Medals</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.Id}</td>
                                <td>{data.Year}</td>
                                <td>{data.Medals}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h5 style={{ textAlign: "center", marginTop: "30px" }}>Fig 1- Table</h5>
        </div>
    );
};

export default Table;
