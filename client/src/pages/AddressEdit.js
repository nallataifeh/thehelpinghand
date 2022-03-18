// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import AddressActions from "../redux/actions/AddressActions";

// END IMPORT ACTIONS

/** APIs

* actionsAddress.create
*	@description CRUD ACTION create
*
* actionsAddress.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsAddress.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.list
*	@description CRUD ACTION list
*

**/

class AddressEdit extends Component {
  // Init address
  constructor(props) {
    super(props);
    this.state = {
      address: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsAddress.loadAddress(this.props.match.params.id);
      this.props.actionsUser.findBy_address(this.props.match.params.id);
    }
    
  }

  // Insert props address in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      address: props.address
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.address._id) {
      this.props.actionsAddress.saveAddress(this.state.address).then(data => {
        this.props.history.push("/addresses/");
      });
    } else {
      this.props.actionsAddress.createAddress(this.state.address).then(data => {
        this.props.history.push("/addresses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Address Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="city"
            label="City"
            value={this.state.address.city || ""}
            onChange={Utils.handleChange.bind(this, "address")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.address.city && this.state.address.city === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="country"
            label="Country"
            value={this.state.address.country || ""}
            onChange={Utils.handleChange.bind(this, "address")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.address.country && this.state.address.country === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="postalCode"
            label="PostalCode"
            value={this.state.address.postalCode || ""}
            onChange={Utils.handleChange.bind(this, "address")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.address.postalCode && this.state.address.postalCode === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="province"
            label="Province"
            value={this.state.address.province || ""}
            onChange={Utils.handleChange.bind(this, "address")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.address.province && this.state.address.province === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="street"
            label="Street"
            value={this.state.address.street || ""}
            onChange={Utils.handleChange.bind(this, "address")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.address.street && this.state.address.street === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="unitNumber"
            label="UnitNumber"
            value={this.state.address.unitNumber || ""}
            onChange={Utils.handleChange.bind(this, "address")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with User */}
          
          <h3>User</h3>
          {(!this.props.listUser || this.props.listUser.length === 0) && 
            <div>No User associated</div>
          }
          {this.props.listUser &&
            this.props.listUser.map((item, i) => {
              return (
                <Link to={"/users/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/addresses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
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
AddressEdit.propTypes = { 
  actionsAddress: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    address: state.AddressEditReducer.address,
    listUser: state.AddressEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressEdit);
