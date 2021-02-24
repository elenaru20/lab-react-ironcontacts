// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import contacts from "./contacts.json";

let firstFive = contacts.filter( (contact, index) => {
  return index < 5;
})
let restContacts = contacts.filter( (contact, index) => {
  return index > 4;
})

class IronContacts extends React.Component {
  
  state = {
    display: firstFive,
    notDisplayed: restContacts
  }

  addRandomContact = () => {
    let displayCopy = [...this.state.display]
    let randomIndex = Math.floor(Math.random()*this.state.notDisplayed.length)
    let randomContact = this.state.notDisplayed[randomIndex]
    displayCopy.push(randomContact)

    // let notDisplayedCopy = [...this.state.notDisplayed].splice(randomIndex, 1)
    // console.log(notDisplayedCopy)

    this.setState((state, props) => ({
      display: displayCopy
    }))    
   
  }

  render() {
    const displayContacts = this.state.display.map( (contact, index) => {

      return (
        <tr key={index}>
          <td>
            <img style={{width:'60px'}} src={contact.pictureUrl} alt="contactImage"/>
          </td>

          <td>
            {contact.name}
          </td>

          <td>
            {contact.popularity.toFixed(2)}
          </td>

        </tr>
      );

    })

    return (
      <div>

        <button onClick={this.addRandomContact}>
          Add Random Contact
        </button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
              {displayContacts}
          </tbody>
        </table>
      </div>
    )
  }
}










function App() {
  return (
    <div>
      <IronContacts/>
    </div>
  );
}

export default App;
