import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as allSettedActions from '../../actions/userAllSettedActions';

class UsersPage extends React.Component {
       constructor(props,context){
        super(props,context);     
             
    } 

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello world</h1>
        
      </div>
    );
  }
}


UsersPage.propTypes = {
    setted : PropTypes.array.isRequired,
    unsetted: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) { 
  return {
    setted: state.setted, //from reducer,
    unsetted: state.unsetted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allSettedActions, dispatch)    
  };
}

export default  connect(mapStateToProps,mapDispatchToProps)(UsersPage);