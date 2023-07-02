import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {APIList:[]}
  componentDidMount(){
    let url = "https://api.publicapis.org/entries?category=Animals";

    axios({
      method:'get',
      url:url,
      responseType:'json'
    }).then(resp => {
      let listOfEntries = resp.data.entries;
      let listOfEntriesArrays = Object.entries(listOfEntries);
      let entryDetails = listOfEntriesArrays.map((entryDetails)=>{return <li>{entryDetails[1]["API"]}</li>});
      this.setState({APIList:<ul>{entryDetails}</ul>});
    })
    .catch(err => {
      console.log(err.toString());
    })
  }
  render(){
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    return (
    <div style={colorStyle}>
      <h2>APIs List</h2>
      <br/>
      <div>{this.state.APIList}</div>
      
    </div>
    )
  }
}

export default App;