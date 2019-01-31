import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { latitude: null, errorMessage: null };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    getHtml() {
        if (this.state.latitude != null){
            return <SeasonDisplay latitude={this.state.latitude} />;
        }
        if (this.state.errorMessage != null){
            return <h1>{this.state.errorMessage}</h1>
        }
        return <Spinner message="Waiting for allow geolocation" />
    }
 
    render() {
        return (
            <div>
                {this.getHtml()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));