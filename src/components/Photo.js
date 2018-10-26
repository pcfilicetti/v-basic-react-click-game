import React from 'react';
import './Photo.css'

class Photo extends React.Component {
    render() {
        return (
            <img onClick={this.props.onClick} src={this.props.src} alt={this.props.alt} className="col-sm-4 indivPhoto" />
        );
    }
}

export default Photo;