import React from 'react';

class AddFormData extends React.Component {
    constructor(props) {
        super(props);

        this.onCancel = this.onCancel.bind(this);
    }

    add() {
        var newName = document.getElementById('name').value;
        var newEmail = document.getElementById('email').value;
        var newPhone = document.getElementById('phone').value;
        var newContact = {name: newName, email: newEmail, phone: newPhone};

        if (localStorage.getItem('contacts') == null || localStorage.getItem('contacts').length < 1) {
            localStorage.setItem('contacts', '[]');
        }

        var old = JSON.parse(localStorage.getItem('contacts'));
        old.push(newContact);

        localStorage.setItem('contacts', JSON.stringify(old));
    }

    onCancel() {
        this.props.closeMe();
    }

    render() {
        return (
        <div className="formRectangle">
            <form onSubmit={this.add}>   
                <div>
                    <h1 style={{marginTop: -100, marginBottom: 100}}>Add New Record</h1>
                </div>             
                <div className="form">               
                    <input 
                        style={{height: '30px', width: '300px', marginBottom: 30}}
                        id="name"
                        type="text" 
                        className="form-control"
                        placeholder="Name"                       
                    /> 
                </div>
                <div className="form">
                    <input 
                        style={{height: '30px', width: '300px', marginBottom: 30}}
                        id="email"
                        type="text" 
                        className="form-control"
                        placeholder="E-mail Address"                      
                    />
                </div>
                <div className="form">
                    <input 
                        style={{height: '30px', width: '300px', marginBottom: 30}}
                        id="phone"
                        type="text" 
                        className="form-control"
                        placeholder="Phone"                  
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