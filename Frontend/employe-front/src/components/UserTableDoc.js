import React, {
    Component
} from 'react'
import SimpleUserTable from "./SimpleUserTable";
const USER_SERVICE_URL = 'http://localhost:4000/employees/getAll';
class UserTableHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            users: []
        };
    }
    render = () => < SimpleUserTable data={
        this.state.users
    }
        isFetching={
            this.state.isFetching
        }
    />;
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = < REDACTED ></REDACTED>
}
export default UserTableHOC;