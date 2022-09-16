import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class HelloPolymerApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2> [[prop1]]!</h2>
      <p>Esto es polymer</p>
      <button on-click="doClick">click</button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'hello-polymer-app'
      }
    };
  }
  doClick(){
    this.prop1="Estamos aprendiendo polymer"
  }
}

window.customElements.define('hello-polymer-app', HelloPolymerApp);

