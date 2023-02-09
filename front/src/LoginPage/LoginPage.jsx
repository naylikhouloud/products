import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            name: '',
            code: '',
            family: '',
            price: '',
            qte: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.setState({ submitted: true });
        const { name, code, family, price, qte } = this.state;
        
        if (name) {
           // console.log(code);

            this.props.login(name, code, family, price, qte);
        }
    }


    render() {
        const { loggingIn } = this.props;
        const { name, code, family, price, qte, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Ajouter Produit</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="username">Name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                       
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Code</label>
                        <input type="text" className="form-control" name="code" value={code} onChange={this.handleChange} />
                       
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Family</label>
                        <input type="text" className="form-control" name="family" value={family} onChange={this.handleChange} />
                       
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Price</label>
                        <input type="text" className="form-control" name="price" value={price} onChange={this.handleChange} />
                       
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Quantity</label>
                        <input type="number" className="form-control" name="qte" value={qte} onChange={this.handleChange} />
                       
                    </div>
                    <div className="form-group">

                        <button className="btn btn-primary">Enregistrer</button>
                        
                       
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };