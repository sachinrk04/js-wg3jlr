import {LitElement, html} from '@polymer/lit-element'

class MyElement extends LitElement {
  _render() {
    return html`<h1>polymer</h1>`;
  }
}

customElements.define('my-element', MyElement);