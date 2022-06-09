import React from 'react';
import axios from 'axios';
import '../File.css'

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            employeesAsc: []
        };
    }

    componentDidMount() {
        // Simple GET request using axios
        axios.get("http://localhost:4000/employees/getAllAsc")
            .then(response => this.setState({ employees: response.data }));
    }

    render() {
        const { employees } = this.state;
        let isAsc = false;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header"></h5>
                <div className="card-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>ProjectId</th>
                                <th>Date from</th>
                                <th>Date to</th>
                                <th>Days worked</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.length ? employees.map(emp => (
                                <tr>
                                    <td keyValue={emp.EmpId}>{emp.EmpId}</td>
                                    <td keyValue={emp.EmpId}>{emp.ProjectId}</td>
                                    <td keyValue={emp.EmpId}>{emp.DateFrom}</td>
                                    <td keyValue={emp.EmpId}>{emp.DateTo !== null ? emp.DateTo : new Date().toISOString().slice(0, 10)}</td>
                                    <td keyValue={emp.EmpId}>{emp.DaysWorked}</td>
                                </tr>
                            )) :
                                (
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default GetRequest; 