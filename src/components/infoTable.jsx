import React from 'react'
const header = ["Name", "Email", "Phone"];

class Table extends React.Component {
  generateHeader() {
    let result = [];
    
    for (let i = 0; i < header.length; i++) {
      result.push(<th id={header[i]}>{header[i]}</th>)
    }

    return result;
  }

  generateTableData() {
    let result = [];
    let data = JSON.parse(localStorage.getItem('contacts'));
    
    if (data != null) {
      for (let i = 0; i < data.length; i++) {
        result.push(
          <tr>
            <td key={data[i].name}>{data[i].name}</td>
            <td key={data[i].email}>{data[i].email}</td>
            <td key={data[i].phone}>{data[i].phone}</td>
          </tr>
        );
      }
    }

    return result;
  }

   render() {
      return (
        <div>
            <div className="tableRectangle">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      {this.generateHeader()}
                    </tr>
                  </thead>
                  <tbody>
                    {this.generateTableData()}
                  </tbody>
                </table>
            </div>  
        </div>
      )
   }
}

export default Table;