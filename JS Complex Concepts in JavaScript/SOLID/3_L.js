// Liskov substitution principle

// // Example 1
// The incorrect way


// class Person {
//   access() {
//     console.log('You have access')
//   }
// }

// class Frontend extends Person {
//   canCreateFrontend() {}
// }

// class Backend extends Person {
//   canCreateBackend() {}
// }

// class PersonFromDifferentCompany extends Person {
//   access() {
//     throw new Error("You don't have access! Go to your place!")
//   }
// }

// function openSecretDoor(person) {
//   person.access()
// }

// openSecretDoor(new Frontend()) // You have access
// openSecretDoor(new Backend()) // You have access
// openSecretDoor(new PersonFromDifferentCompany())  // Error


// // Example 1
// The correct way

// class Person {
  
// }

// class Member extends Person {
//   access() {
//     console.log('You have access')
//   }
// }

// class Guest extends Person {
//   isGuest = true
// }

// class Frontend extends Member {
//   canCreateFrontend() {}
// }

// class Backend extends Member {
//   canCreateBackend() {}
// }

// class PersonFromDifferentCompany extends Guest {
//   access() {
//     throw new Error("You don't have access! Go to your place!")
//   }
// }

// function openSecretDoor(member) {
//   member.access()
// }

// openSecretDoor(new Frontend()) // You have access
// openSecretDoor(new Backend()) // You have access
// openSecretDoor(new PersonFromDifferentCompany())  // There should be member!


// // _____________________________Example 2________________________________
// // The incorrect way

// class Component {
//   render() {
//     return `<div>Component</div>`
//   }
// }

// class HeaderComponent extends Component {
//   onInit() {}
// }

// class FooterComponent extends Component {
//   afterInit() {}
// }

// class HOC extends Component {
//   render() {
//     throw new Error('Render is impossible here')
//   }

//   wrapComponent(component) {
//     component.wrapped = true
//     return component
//   }
// }

// function renderComponent(component) {
//   console.log(component.render())
// }

// renderComponent(new HeaderComponent()) // <div>Component</div>
// renderComponent(new FooterComponent()) // <div>Component</div>
// // renderComponent(new HOC()) // Error: Render is impossible here

// // _____________________________Example 2________________________________
// // The correct way

class Component {
  isComponent = true
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is impossible here')
  }

  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

function renderComponent(component) {
  console.log(component.render())
}

renderComponent(new HeaderComponent()) // <div>Component</div>
renderComponent(new FooterComponent()) // <div>Component</div>