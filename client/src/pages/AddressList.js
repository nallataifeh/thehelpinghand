// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import AddressActions from "../redux/actions/AddressActions";

// END IMPORT ACTIONS

/** APIs

* actionsAddress.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsAddress.list
*	@description CRUD ACTION list
*

**/


class AddressList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsAddress.loadAddressList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsAddress.deleteAddress(this.state.idDelete).then(data => {
      this.props.actionsAddress.loadAddressList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "city",
        type: "string",
        label: "City"
      }, 
      {
        id: "country",
        type: "string",
        label: "Country"
      }, 
      {
        id: "postalCode",
        type: "string",
        label: "PostalCode"
      }, 
      {
        id: "province",
        type: "string",
        label: "Province"
      }, 
      {
        id: "street",
        type: "string",
        label: "Street"
      }, 
      {
        id: "unitNumber",
        type: "string",
        label: "UnitNumber"
      },
    ];
    const link = "/addresses/";

    return (
      <div>
        <h1>Address List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">PostalCode</TableCell>
              <TableCell align="right">Province</TableCell>
              <TableCell align="right">Street</TableCell>
              <TableCell align="right">UnitNumber</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/addresses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.city }</TableCell>
                <TableCell align="right">{ row.country }</TableCell>
                <TableCell align="right">{ row.postalCode }</TableCell>
                <TableCell align="right">{ row.province }</TableCell>
                <TableCell align="right">{ row.street }</TableCell>
                <TableCell align="right">{ row.unitNumber }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/addresses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsAddress: bindActionCreators(AddressActions, dispatch),
  };
};

// Validate types
AddressList.propTypes = { 
  actionsAddress: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.AddressListReducer.listAddress
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressList);
