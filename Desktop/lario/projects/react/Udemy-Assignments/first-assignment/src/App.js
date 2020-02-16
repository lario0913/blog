// FIRST ASSIGNMENT BEGINS

// import UserInput from './components/User-inputs/User-input';

import React, { Component } from 'react'
import './App.css';
import Persons from './components/Persons/Persons';

class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
     persons: [
      { id: 'wsgd', name: 'Maximilian', age: 28 },
      { id: 'hddu', name: 'Manu', age: 29 },
      { id: 'jdjdj', name: 'Stephanie', age: 27 }
    ],
      showDetails : false
   }
 }
  handleChange = (event, id) =>{
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
  })
  }
  handleToggle = () => {
    const show = this.state.showDetails;
    this.setState({showDetails: !show})
  }
  handleDelete = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons: persons})
  }
  render() {
    let persons = null

    if (this.state.showDetails){
      persons = (
        <div className='details' >
            
              <Persons 
              persons={this.state.persons}
              click={this.handleDelete}
              change={this.handleChange} />
            
        </div>
      )
    }
    return (
      <div className="App">
       <h1>First Assignment</h1>
       <button onClick={this.handleToggle} >Toggle Details</button>
       {persons}
      </div>
    );
  }
}
export default App


// // SECOND ASSIGNMENT BEGINS
// import React, { Component } from 'react'
// import Validation from './components/2-assignment/Validation'
// import Char from './components/2-assignment/Char'

// class App extends Component {
//   state = {
//     userInputs : ''
//   }


//   handleChange = (event) => {
//     this.setState({userInputs: event.target.value })
//   }

//   handleClick = (index) => {
//     const userInputsArray = this.state.userInputs.split('')
//     userInputsArray.splice(index, 1)
//     const userInputsText = userInputsArray.join('')

//     this.setState({userInputs:userInputsText})
//   }

//   render() {
//     const charList = this.state.userInputs.split('').map((char, index) => {
//       return <Char 
//               click={() => this.handleClick(index)} 
//               char={char}
//               key={index} />
//     })

//     return (
//       <div className='App'>
//         <input type="text"
//         className='input-text'
//         value={this.state.userInputs}
//         onChange={this.handleChange} 
//         />
//         <p> {this.state.userInputs} </p>
//         <Validation lengthOfString={this.state.userInputs.length} />

//         {charList}

//       </div>
//     )
//   }
// }

// export default App


// import React, { Component } from 'react';
// import './App.css';
// import Person from './components/Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value',
//     showPersons: false
//   }

//   switchNameHandler = ( newName ) => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     this.setState( {
//       persons: [
//         { name: newName, age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     } )
//   }

//   nameChangedHandler = ( event ) => {
//     this.setState( {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: event.target.value, age: 29 },
//         { name: 'Stephanie', age: 26 }
//       ]
//     } )
//   }

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState( { showPersons: !doesShow } );
//   }

//   render () {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     let persons = null;

//     if ( this.state.showPersons ) {
//       persons = (
//         <div>
//           <Person
//             name={this.state.persons[0].name}
//             age={this.state.persons[0].age} />
//           <Person
//             name={this.state.persons[1].name}
//             age={this.state.persons[1].age}
//             click={this.switchNameHandler.bind( this, 'Max!' )}
//             changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
//           <Person
//             name={this.state.persons[2].name}
//             age={this.state.persons[2].age} />
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button
//           style={style}
//           onClick={this.togglePersonsHandler}>Toggle Persons</button>
//         {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }

// export default App;

