// Import the UI library component
import { UIComponent } from './ui-library-lib';


// Create an instance of the UI component
const component = new UIComponent();

// Mount the component to the DOM
const container = document.getElementById('app');
component.mount(container);