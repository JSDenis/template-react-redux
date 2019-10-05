import React from 'react';
import {connect} from 'react-redux';





class Footer extends React.Component{

    a=5;

    setVariables = () => {
        console.log('a', this.a);
        this.props.cbTest(this.a); 
    }

   render(){
       console.warn('Test', this.props)
       return(
           <div>
                <h2> Footer!{this.props.footData.rdGetData.test}<button onClick={this.setVariables}>Click</button></h2>
           </div>
       )
   }
}

const mapStateToProps = (state) => {
    return{
        footData: state
    }
};


export default connect(mapStateToProps)(Footer);