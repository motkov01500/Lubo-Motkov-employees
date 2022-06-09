import React from 'react';
import axios from 'axios';

class EmployeeSameProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        // Simple GET request using axios
        axios.get("http://localhost:4000/employees/getTheLongestWorkingTeam")
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
                                <th>Employee 2</th>
                                <th>Project ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{employees.EmpIdFirst}</td>
                                <td>{employees.EmpIdSecond}</td>
                                <td>{employees.ProjectId}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EmployeeSameProject; 