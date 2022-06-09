import {
    Component
} from 'react'
import axios from 'axios'
const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';
class UserTableRenderProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            data: []
        };
    }
    render = () => this.props.children(this.state);
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = <REDACTED REDACTED ></REDACTED>
}
export default UserTableRenderProps;