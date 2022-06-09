import React from 'react';
import axios from 'axios';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        // Simple GET request using axios
        axios.get("http://localhost:4000/employees/getAll")
            .then(response => this.setState({ employees: response.data }));
    }

    render() {
        const { employees } = this.state;
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
                                    <td>{emp.EmpId}</td>
                                    <td>{emp.ProjectId}</td>
                                    <td>{emp.DateFrom}</td>
                                    <td>{emp.DateTo}</td>
                                    <td>{emp.DaysWorked}</td>
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