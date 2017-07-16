# React-Redux-Book-App

#### Project Wiki
See the [wiki](https://github.com/jasondebolt/React-Redux-Book-App/wiki) for an image on the React Redux Flow.

#### Getting Started
```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd React-Redux-Book-App
> npm install
> npm start
```

#### Notes
##### Overall note
Redux serves to construct the application state. React provides the views to display that state. The two libraries (React and Redux) are inherently disconnected. It is only through 'react-redux' via mapStateToProps, mapsDispatch to props, and connect that React and Redux are connected.

##### Terminology
First create a 'reducer', then wire it into your application. Reducers are called
whenever an action occurs and returns new state. You can use 'combineReducers'
to combine all of your reducers to create a global application state.
A container is a normal React component that gets bonded to the application state.
A container is a special form of component that understand Redux state. whenever
our application state changes, the container will re-render as well.
An 'action creator' is just a function that returns an 'action'.
An 'action' is just an object that flows through all of our reducers.
Reducers that then use these actions to produce different values for the
reducers particular piece of state. Application state is a plain JavaScript object.
Application state is completely different than a component state. When a component uses references like 'this.state.foo' or 'this.setState(...)', this is COMPONENT state, not application state. Application state within a component is usually mapped via the 'mapStateToProps' function and accessible within the component as 'this.props.bar'. Application state is formed by our reducers.
