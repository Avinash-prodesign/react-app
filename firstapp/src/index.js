import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './components/header'




const App = () =>{
    // return React.createElement('h1', {className:'title'}, 'Hello World')
    // return <h1> Hello pople</h1>
    return (
        <div>
           <Header/>
        </div>
    )
}   

ReactDOM.render(<App/>, document.getElementById('root'));
