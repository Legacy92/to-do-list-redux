import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleItem, toggleItemComplete } from '../actions';

class SingleItem extends Component {
    componentDidMount() {
        console.log('Single Props:', this.props);

        this.props.getSingleItem(this.props.match.params.id);
    }

    handleToggleComplete() {
        this.props.toggleItemComplete(this.props.match.params.id);
    }

    render() {
        console.log('Single Props:', this.props);

        const { title, details, complete } = this.props.item;

        return (
            <div>
                <h1 className='center'>To Do Item</h1>
                <div className="row right-align">
                    <Link to='/' className='btn blue-grey'>View Full List</Link>
                </div>
                <h4>{title}</h4>
                <p>{details}</p>
                <p>Item is {complete ? 'completed' : 'incomplete'}</p>
                <button
                    onClick={this.handleToggleComplete.bind(this)}
                    className={`btn ${complete ? 'red' : 'green'}`}
                >
                    {complete ? 'Make incomplete' : 'Complete Item'}
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, { getSingleItem, toggleItemComplete })(SingleItem);