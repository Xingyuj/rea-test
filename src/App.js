import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import mockData from './mockdata.json';
import FlatButton from 'material-ui/FlatButton';


const style = {
    height: 230,
    width: 200,
    margin: 20,
    borderRadius: 5
};

class App extends Component {
    constructor(props) {
        super(props);
        this.results = mockData.results;
        this.saved = mockData.saved;
        this.state = {
            showAddButton: 'none',
            showRemoveButton: 'none'
        }
    }


    getResultsData() {
        return this.results.map((data, index) => (
            <Paper style={style} zDepth={1} onMouseOver={() => this.setState({showAddButton: data.id})}>
                <div style={{borderBottom: '2px solid #e1e1e1', backgroundColor: data.agency.brandingColors.primary, textAlign: 'center', borderRadius: '5px 5px 0px 0px'}}>
                    <span style={{color: '#fff'}}>ID: {data.id}</span>
                    <img src={data.agency.logo} style={{width: 60,  display: 'float', float: 'left', borderRadius: '5px 0px 0px 0px'}}/>
                </div>
                <div style={{borderBottom: '2px solid #e1e1e1', textAlign: 'center'}}>
                    <img src={data.mainImage} style={{width: '100%', height: '100%'}}/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <span>price: {data.price}</span>
                    {this.state.showAddButton === data.id ? (<FlatButton label="Add Property" primary fullWidth style={{borderRadius: '20px'}} onClick={() => this.addProperty(data.id)}/>) : null}
                </div>
            </Paper>
        ));
    }

    getSavedData() {
        return this.saved.map((data, index) => (
            <Paper style={style} zDepth={1} onMouseOver={() => this.setState({showRemoveButton: data.id})}>
                <div style={{borderBottom: '2px solid #e1e1e1', backgroundColor: data.agency.brandingColors.primary, textAlign: 'center', borderRadius: '5px 5px 0px 0px'}}>
                    <span style={{color: '#fff'}}>ID: {data.id}</span>
                    <img src={data.agency.logo} style={{width: 60,  display: 'float', float: 'left', borderRadius: '5px 0px 0px 0px'}}/>
                </div>
                <div style={{borderBottom: '2px solid #e1e1e1', textAlign: 'center'}}>
                    <img src={data.mainImage} style={{width: '100%', height: '100%'}}/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <span>price: {data.price}</span>
                    {this.state.showRemoveButton === data.id ? (<FlatButton label="Remove Property" secondary fullWidth style={{borderRadius: '20px'}} onClick={() => this.removeProperty(data.id)}/>) : null}
                </div>
            </Paper>
        ));
    }

    addProperty(id) {
        this.saved.push(this.results.find(item => item.id === id));
        this.results = this.results.filter(function(item) {
            return item.id !== id;
        });
    }

    removeProperty(id) {
        this.results.push(this.saved.find(item => item.id === id));
        this.saved = this.saved.filter(function(item) {
            return item.id !== id;
        });
    }

  render() {
    return (
         <MuiThemeProvider>
             <div style={{display: 'flex', justifyContent: 'center'}}>
                 <div style={{border: '2px dashed #e1e1e1', marginRight: 50}}>
                 {this.getResultsData()}
                 </div>
                 <div style={{border: '2px dashed #e1e1e1'}}>
                     {this.getSavedData()}
                 </div>
             </div>
         </MuiThemeProvider>
    );
  }
}

export default App;
