import React from "react";
import { connect } from 'react-redux'

class UserHeader extends React.Component {

    render() {

       // const user = this.props.users.find(user => user.id === this.props.userId);
        const { user } = this.props;
        if(!user){
            return null;
        }
        return  <div className="header">{user.name}</div>
    };
};

//ownProps is the property of the component
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
};

// const mapStateToProps = state => {
//     return {users: state.users};
// };

//we can do like this also
//export default connect('users', { fetchUser })(UserHeader);


export default connect(mapStateToProps)(UserHeader);