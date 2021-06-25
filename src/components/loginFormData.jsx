import React from 'react';

class FormData extends React.Component {
    userData;

    constructor(props) {
        super (props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {name: '', email: ''};
    }
    
    onChangeName(event) {
        this.setState({name: event.target.value})
    }

    onChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.history.push('/dashboard');
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user'))
            this.setState({name: this.userData.name, email: this.userData.email})
        else 
            this.setState({name: '', email: ''})
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
        <div className="container">
            <div className="loginRectangle">
                <form onSubmit={this.onSubmit}>
                    <div className="form">
                        <h1 style={{color: 'black'}}>Login to Continue <br></br> to User Diary</h1> 
                    </div>   
                    <div className="form">               
                        <input 
                            style={{height: '30px', width: '300px', margin: 30}}
                            type="text" 
                            className="form-control"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        /> 
                    </div>
                    <div className="form">
                        <input 
                            style={{height: '30px', width: '300px'}}
                            type="text" 
                            className="form-control"
                            placeholder="E-mail Address"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <button 
                    type="submit" 
                    style={{borderRadius: 10, height: '30px', width : '100px', margin: 50, backgroundColor: '#1d70f8', color: 'white'}}>Login</button>
                </form>
            </div>
        </div>
        );
    }
}

export default FormData;