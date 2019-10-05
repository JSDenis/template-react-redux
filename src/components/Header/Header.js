import React from 'react';
import './Header.scss';
import {connect} from 'react-redux';
import {acGetData, acSetPersonInfo} from "../../actions/action";


class Header extends React.Component{

    test = () => {
        const newTrack = 'nothing else matters';

        this.props.getData(newTrack)
    };

    addPersonInfo = () => {
        const man = {
            name: 'testName',
            age: 30,
            lastName: 'rrr'
        }
        this.props.setInfo(man);
    }

    render() {
        console.log('data',this.props.data);
        return(
            <div>
                <h2 onClick={this.test}>Hello <span><i>ttt</i>test</span></h2>
                <button onClick={this.addPersonInfo}>addPerson</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
  return{
      data: state
  }
};

 const mapDispatchToProps = (dispatch) => {
    return{
        getData: (track) => dispatch(acGetData(track)),
        setInfo: (info) => dispatch(acSetPersonInfo(info))
    }
}; 

/*const mapDispatchToProps = (dispatch) => {
    return{
        getData: (track) => dispatch(acGetData(track)),
        setInfo: () => {
            fetch('./src/data/test.json')
                .then(function(response) {
                    return response.json();
                })
                .then(data => {
                    dispatch(acSetPersonInfo(data))
                })
                .catch( alert );
        }
    }
};*/

export default connect(mapStateToProps, mapDispatchToProps)(Header);