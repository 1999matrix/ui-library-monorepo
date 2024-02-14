

import {init, h} from 'snabbdom';


const patch = init([
  
  classModule,
  propsModule, 
  styleModule, 
  eventListenersModul
  
]);

// Define the UI library class
class UIComponent {
  constructor() {
    this.state = { count: 0 };
    this.props = {};
    this.mounted = false;
  }

  // Templating: Method to define the template for rendering
  createView() {
    return h('div', [
      h('h1', `Count: ${this.state.count}`),
      h('button', { on: { click: this.handleClick.bind(this) } }, 'Add')
    ]);
  }

  // Reactivity: Method to update the state and re-render the view
  updateState(newState) {
    Object.assign(this.state, newState);
    const newVNode = this.createView();
    this.vNode = patch(this.vNode, newVNode);
  }

  // Lifecycle Events: Method to execute when the component is mounted
  componentDidMount() {
    if (!this.mounted) {
      console.log('Component mounted');
      this.mounted = true;
    }
  }

  // Event handler for the button click
  handleClick() {
    this.updateState({ count: this.state.count + 1 });
  }

  // Method to mount the component to the DOM
  mount(container) {
    this.vNode = this.createView();
    patch(container, this.vNode);
    this.componentDidMount();
  }
}

// Create an instance of the UI component
const component = new UIComponent();

// Mount the component to the DOM
const container = document.getElementById('app');
component.mount(container);

