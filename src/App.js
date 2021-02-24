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
    //let displayCopy = [...this.state.display]
    let randomIndex = Math.floor(Math.random()*this.state.notDisplayed.length)
    let randomContact = this.state.notDisplayed[randomIndex]
    //displayCopy.push(randomContact)

    let notDisplayedCopy = [...this.state.notDisplayed]
    notDisplayedCopy.splice(randomIndex, 1)
    //console.log(notDisplayedCopy.length)

    this.setState((state, props) => ({
      display: [...this.state.display, randomContact],
      notDisplayed: notDisplayedCopy
    }))
  }

  sortByName = () => {

    const sortedByName = [...this.state.display].sort( (a,b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    //console.log(sortedByName)

    this.setState((state, props) => ({
      display: sortedByName
    }))
  }

  sortByPopularity = () => {

    const sortedByPopularity = [...this.state.display].sort( (a,b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    })
    //console.log(sortedByPopularity)

    this.setState((state, props) => ({
      display: sortedByPopularity
    }))
  }

  deleteContact = (index) => {
    
    let displayCopy = [...this.state.display]
    let test = displayCopy.splice(index, 1)

    let notDisplayedCopy = [...this.state.notDisplayed]
    notDisplayedCopy.push(test)

    this.setState((state, props) => ({
      display: displayCopy,
      notDisplayed: notDisplayedCopy
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
            {(Math.round(contact.popularity * 100)/100).toFixed(2)}
          </td>

          <td>
            <button onClick={() => this.deleteContact(index)}>
              Delete From List
            </button>
          </td>

        </tr>
      );

    })

    return (
      <div>

        <button onClick={this.addRandomContact}>
          Add Random Contact
        </button>

        <button onClick={this.sortByName}>
          Sort By Name
        </button>

        <button onClick={this.sortByPopularity}>
          Sort By Popularity
        </button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
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
