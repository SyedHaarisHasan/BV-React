import React from 'react';

class AddFormData extends React.Component {
    newUserData;

    constructor(props) {
        super (props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);

        this.state = {name: '', email: '', phone: ''};
    }
    
    onChangeName(event) {
        this.setState({name: event.target.value})
    }

    onChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    onChangePhone(event) {
        this.setState({phone: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.closeMe();
    }

    onCancel() {
        this.setState({name: '', email: '', phone: ''});
        this.props.closeMe();
    }

    componentDidMount() {
        this.newUserData = JSON.parse(localStorage.getItem('newUser'));

        if (localStorage.getItem('newUser'))
            this.setState({name: this.newUserData.name, email: this.newUserData.email, phone: this.newUserData.phone})
        else 
            this.setState({name: '', email: '', phone: ''})
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('newUser', JSON.stringify(nextState));
    }

    render() {
        return (
        <div className="formRectangle">
            <form onSubmit={this.onSubmit}>   
                <div>
                    <h1 style={{marginTop: -100, marginBottom: 100}}>Add New Record</h1>
                </div>             
                <div className="form">               
                    <input 
                        style={{height: '30px', width: '300px', marginBottom: 30}}
                        type="text" 
                        className="form-control"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    /> 
                </div>
                <div className="form">
                    <input 
                        style={{height: '30px', width: '300px', marginBottom: 30}}
                        type="text" 
                        className="form-control"
                        placeholder="E-mail Address"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>
                <div className="form">
                    <input 
                        style={{height: '30px', width: '300px', marginBottom: 30}}
                        type="text" 
                        className="form-control"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                    />
                </div>  
                <center>
                    <button
                    type="button"
                        onClick={this.onCancel}
                        style={{borderRadius: 10, height: '30px', width : '100px', backgroundColor: '#1d70f8', color: 'white', marginRight: 15}}>Cancel
                    </button>                 
                    <button 
                        type="submit" 
                        style={{borderRadius: 10, height: '30px', width : '100px', backgroundColor: '#1d70f8', color: 'white'}}>Submit
                    </button>
                </center>
             </form>
        </div>
        );
    }
}

export default AddFormData;