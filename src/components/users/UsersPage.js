import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class UsersPage extends React.Component {
       constructor(props,context){
        super(props,context);     
             
    } 

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        
      </div>
    );
  }
}


UsersPage.propTypes = {
    allsetted : PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    allsetted: state.setted, //from reducer,
    allUnsetted: state.unsetted
  };
}

export default  connect(mapStateToProps)(UsersPage);