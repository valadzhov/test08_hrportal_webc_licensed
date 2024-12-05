import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent, IgcAvatarComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: hidden;
    }
    .navbar {
      color: var(--ig-gray-900);
      background-color: var(--ig-surface-500);
      height: max-content;
      min-width: 700px;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      width: max-content;
      height: max-content;
    }
    .footer {
      background-color: var(--ig-surface-500);
      border-color: var(--ig-gray-300);
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 8px;
      min-width: 50px;
      min-height: min-content;
    }
    .h6 {
      margin: 0;
      flex-shrink: 0;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .text {
      color: var(--ig-gray-500);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <div class="row-layout group">
          <h6 class="h6">
            Rapid Fission Inc.
          </h6>
          <igc-button variant="flat" type="button" @click="${() => Router.go(`/home`)}" class="button">
            HOME
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" @click="${() => Router.go(`/my-info`)}" class="button">
            MY INFO
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" type="button" class="button">
            PEOPLE
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" type="button" class="button">
            MY FILES
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div slot="end" class="row-layout group_1"></div>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            notifications
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-avatar src="/src/assets/Avatar6.png" slot="end" shape="circle" class="avatar"></igc-avatar>
      </igc-navbar>
      <router-outlet class="view-container"></router-outlet>
      <div class="row-layout footer">
        <p class="typography__body-2 text">
          (c) 2020 IndigoDesign Inc.
        </p>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
