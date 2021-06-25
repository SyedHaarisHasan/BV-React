import React from 'react';
import AddFormData from './addFormData.jsx';
import Table from './infoTable.jsx'

class Dashboard extends React.Component {
    state = {popup: false};

    constructor(props) {
        super (props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.history.push('/');
    }

    openPopup = () => {
        this.setState({popup: true});
    }

    closePopup = () => {
        this.setState({popup: false});
    }
    
    render() {
        let item = JSON.parse(localStorage.getItem('user'));
        let popup = null;

        if (this.state.popup) {
            popup = <AddFormData closeMe={this.closePopup}/>;
        }
        else {
            popup = 
            <div>
            <Table/>
            <button 
                type="button" 
                style={{borderRadius: 5, height: '40px', width : '150px', position: 'absolute', top: 25, right: 190, color: 'white', fontSize: 20, backgroundColor: '#1d70f8'}}
                onClick={this.openPopup}> 
                Add New
            </button>
            </div>
        }
        return (
            <div className="dashboard">
                <div className="profileRectangle">
                    <div className="circle">
                        <p style={{fontSize: 64}}>{item.name[0]}</p>
                    </div>
                    <p className="profileName" style={{fontSize: 40}}>{item.name}</p>
                    <p className="profileEmail" style={{fontSize: 25}}>{item.email}</p>
                    <form onSubmit={this.onSubmit}>
                        <button 
                            type="submit" 
                            style={{borderRadius: 10, height: '40px', width : '150px', position: 'absolute', bottom: 50, left: 125, color: 'white', fontSize: 20, backgroundColor: '#1d70f8'}}>
                            Logout
                        </button>
                    </form>
                </div>
                {popup}
            </div>
        );
    }
}

export default Dashboard;