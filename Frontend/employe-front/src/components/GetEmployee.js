import React, { Fragment, useState } from "react";
import axios from "axios";

const getEmployee = () => {
    fetchUsersWithAxios = () => {
        this.setState({ ...this.state, isFetching: true });
        axios.get("http://localhost:4000/employees/getAll")
            .then(response => {
                this.setState({ data: response.data, isFetching: false })
            })
            .catch(e => {
                console.log(e);
                this.setState({ ...this.state, isFetching: false });
            });
    };
    fetchUsers = this.fetchUsersWithAxios();

    return (
        <Fragment>
            <div>
                {fet}
            </div>
        </Fragment>
    );
}