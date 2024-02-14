// Import the UI library component
// import { UIComponent } from 'ui-library';
const UIComponent =  require('./ui-library.js');

// Create an instance of the UI component
const component = new UIComponent();

// Mount the component to the DOM
const container = document.getElementById('app');
component.mount(container);