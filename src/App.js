import React from "react";


import '../src/styles/App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer'


class App extends React.Component {

    state = {
        getA: 0
    }

    getValue = (val) => {
        console.log('Appval',val);
        this.setState({
            getA: val
        })
    } 

    render() {
         const menuElemApp = [
            {
                name: 'Home1',
                link: 'www.kufar.by'
            },
            {
                name: 'Contacts2',
                link: 'www.kufar.by' 
            },
            {
                name: 'About Us3',
                link: 'www.kufar.by' 
            }
            ,
            {
                name: 'About Us3',
                link: 'www.kufar.by' 
            }
            ,
            {
                name: 'About Us3',
                link: 'www.kufar.by' 
            }
            ,
            {
                name: 'About Us3',
                link: 'www.kufar.by' 
            }
            ,
            {
                name: 'About Us3',
                link: 'www.kufar.by' 
            }
            ,
            {
                name: 'About Us3',
                link: 'www.kufar.by' 
            }
        ]; 
        const color = 'green';

        

        return (
            <div>
                <Menu menu={menuElemApp} color={color}/>
                <div>
                    <h1>My React App!</h1>
                </div>
                <Header rrr ={this.state.getA}/>
                <Footer cbTest={this.getValue} />

            </div>
        );
    }
}

export default App; 