// Import the UI library component
// import { UIComponent } from 'ui-library';
import UIComponent from './packages/ui-library/lib/ui-library.js';
// const UIComponent =  require('./packages/ui-library/lib/ui-library.js');

// Create an instance of the UI component
const component = new UIComponent();

// Mount the component to the DOM
const container = document.getElementById('app');

component.mount(container);