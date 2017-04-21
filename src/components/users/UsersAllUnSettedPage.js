import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
// import * as allUnsettedActions from '../../actions/userAllUnsettedActions';

export class UsersAllUnSettedPage extends React.Component {
       constructor(props,context){
        super(props,context);     
             
    } 

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello world: unsetted</h1>
        
      </div>
    );
  }
}


UsersAllUnSettedPage.propTypes = {
    setted : PropTypes.array.isRequired,
    unsetted: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) { 
  return {    
    unsetted: state.unsetted  //from reducer,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(allUnsettedActions, dispatch)    
//   };
// }

export default  connect(mapStateToProps)(UsersAllUnSettedPage);