import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
//import '../css/Table.css'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
function rowClassNameFormat(row, rowIdx) {
    return rowIdx % 2 === 0 ? 'Gold-Row' : 'Silver-Row';
}
const SimpleUserTable = (props) => {
    return (
        <div>
            <BootstrapTable data={props.data}
                trClassName={rowClassNameFormat}>
                <TableHeaderColumn isKey dataField='id' />
                <TableHeaderColumn dataField='name' />
                <TableHeaderColumn dataField='username' />
            </BootstrapTable>
            <p>{props.isFetching ? 'Fetching users...' : ''}</p>
        </div>
    )
};
export default SimpleUserTable