import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcAvatarComponent, IgcInputComponent, IgcSelectComponent);

@customElement('app-my-info')
export default class MyInfo extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .page-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 1000px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .header {
      background-color: var(--ig-primary-700);
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      height: 144px;
      min-height: 144px;
      max-height: 144px;
      flex-shrink: 0;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      width: 960px;
      min-width: 50px;
      min-height: 50px;
      max-width: 960px;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 16px 0 0;
      min-width: 200px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      min-height: min-content;
    }
    .content {
      background-color: var(--ig-gray-100);
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 0 0 16px;
      width: 960px;
      min-width: 50px;
      min-height: 50px;
      max-width: 960px;
      flex-shrink: 0;
    }
    .group_6 {
      background-color: var(--ig-surface-500);
      border-color: var(--ig-gray-200);
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 200px;
      min-width: 50px;
      max-width: 200px;
      flex-shrink: 0;
    }
    .group_7 {
      border-color: var(--ig-gray-200);
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
    }
    .group_8 {
      border-color: var(--ig-gray-200);
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      padding: 16px;
      min-width: 50px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_10 {
      border-color: var(--ig-gray-300);
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 8px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_12 {
      background-color: var(--ig-surface-500);
      border-color: var(--ig-gray-200);
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      flex-grow: 1;
    }
    .group_13 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .group_15 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_16 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
    }
    .group_17 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      margin: 0 0 32px;
      min-width: 50px;
    }
    .image {
      object-fit: cover;
      border-radius: 50%;
      width: 112px;
      height: 112px;
      min-width: 0;
      min-height: 0;
      max-width: 112px;
      max-height: 112px;
      flex-shrink: 0;
    }
    .content_1 {
      color: white;
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: var(--ig-primary-500);
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      height: max-content;
      min-width: min-content;
    }
    .icon {
      --size: 18px;
      font-size: 18px;
      width: 18px;
      height: 18px;
      margin: 0 8px 0 0;
    }
    .content_2 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .avatar {
      margin: 0 8px 0 0;
    }
    .icon_1 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      margin: 0 8px 0 0;
    }
    .icon_2 {
      --size: 18px;
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .input {
      height: max-content;
      min-width: 484px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .input_1 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .input_2 {
      height: max-content;
      max-width: 100px;
      flex-shrink: 0;
    }
    .button_1::part(base) {
      color: white;
      background-color: var(--ig-primary-400);
    }
    .button_2::part(base) {
      color: white;
    }
    .button_3::part(base) {
      color: white;
    }
    .button_4::part(base) {
      color: white;
    }
    .button_5::part(base) {
      color: white;
    }
    .button_6::part(base) {
      color: white;
    }
    .button_7::part(base) {
      color: white;
    }
  `;

  @state()
  private value: string = 'Erin';

  @state()
  private value1: string = 'First name';

  @state()
  private value2: string = 'Brockovich';

  @state()
  private value3: string = '2';

  @state()
  private value4: string = '123 Wallaby Lane';

  @state()
  private value5: string = 'Sacramento';

  @state()
  private value6: string = 'CA';

  @state()
  private value7: number = 94203;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout page-content">
        <div class="row-layout header">
          <div class="row-layout group">
            <div class="row-layout group_1">
              <img src="/src/assets/Avatar6.png" class="image" />
            </div>
            <div class="column-layout group_2">
              <div class="column-layout group_3">
                <h4 class="content_1">
                  Erin Brockovich
                </h4>
                <p class="typography__subtitle-1 content_1">
                  Water Quality Specialist
                </p>
              </div>
              <div class="row-layout group_4">
                <igc-button variant="flat" type="button" class="button button_1">
                  Personal
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" type="button" class="button button_2">
                  Job
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" type="button" class="button button_3">
                  Tme-off
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" type="button" class="button button_4">
                  Emergency
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" type="button" class="button button_5">
                  Documents
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" type="button" class="button button_6">
                  Benefits
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="flat" type="button" class="button button_7">
                  Pay info
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
          </div>
        </div>
        <div class="row-layout content">
          <div class="row-layout group_5">
            <div class="column-layout group_6">
              <div class="column-layout group_7">
                <p class="typography__subtitle-2 text">
                  Hire Date
                </p>
                <p class="typography__body-2 text_1">
                  Feb 01, 2010
                </p>
                <p class="typography__caption text_1">
                  10y-10m-7d
                </p>
              </div>
              <div class="column-layout group_8">
                <div class="row-layout group_9">
                  <span class="material-icons icon">
                    waves
                  </span>
                  <p class="typography__body-2 content_2">
                    Waste water mgmt.
                  </p>
                </div>
                <div class="row-layout group_9">
                  <span class="material-icons icon">
                    domain
                  </span>
                  <p class="typography__body-2 content_2">
                    Nuclear Disposal
                  </p>
                </div>
                <div class="row-layout group_9">
                  <span class="material-icons icon">
                    location_on
                  </span>
                  <p class="typography__body-2 content_2">
                    California, USA
                  </p>
                </div>
              </div>
              <div class="column-layout group_10">
                <p class="typography__subtitle-2 text">
                  Manager
                </p>
                <div class="row-layout group_11">
                  <igc-avatar src="/src/assets/Avatar1.png" shape="circle" class="avatar"></igc-avatar>
                  <p class="typography__body-2 content_2">
                    Donni Darko
                  </p>
                </div>
              </div>
            </div>
            <div class="column-layout group_12">
              <div class="row-layout group_13">
                <span class="material-icons icon_1">
                  perm_contact_calendar
                </span>
                <h6 class="content_2">
                  Personal
                </h6>
              </div>
              <p class="typography__subtitle-1 text_1">
                Basic Information
              </p>
              <div class="row-layout group_14">
                <igc-input label="First name" ?disabled="${true}" ?outlined="${true}" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="user-input"></igc-input>
                <igc-input label="Middle name" ?disabled="${true}" ?outlined="${true}" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail}" class="user-input"></igc-input>
                <igc-input label="Last name" ?disabled="${true}" ?outlined="${true}" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="user-input"></igc-input>
              </div>
              <div class="row-layout group_14">
                <igc-select ?outlined="${true}" label="Gender" value="${this.value3}" @igcChange="${(e: any) => this.value3 = e.detail.value}" class="user-input">
                  <igc-select-item value="1">
                    Male
                  </igc-select-item>
                  <igc-select-item value="2">
                    Female
                  </igc-select-item>
                  <igc-select-item value="3">
                    It's complicated
                  </igc-select-item>
                </igc-select>
                <igc-select ?outlined="${true}" label="Marital status" class="user-input">
                  <igc-select-item value="1">
                    Married
                  </igc-select-item>
                  <igc-select-item value="1">
                    Single
                  </igc-select-item>
                </igc-select>
              </div>
              <div class="row-layout group_15">
                <igc-input label="Address" required ?outlined="${true}" value="${this.value4}" @igcChange="${(e: any) => this.value4 = e.detail}" class="input"></igc-input>
              </div>
              <div class="row-layout group_16">
                <igc-input label="City" required ?outlined="${true}" value="${this.value5}" @igcChange="${(e: any) => this.value5 = e.detail}" class="input_1"></igc-input>
                <igc-input label="State" required ?outlined="${true}" value="${this.value6}" @igcChange="${(e: any) => this.value6 = e.detail}" class="input_2"></igc-input>
                <igc-input type="number" label="Zip/Postal Code" required ?outlined="${true}" value="${this.value7}" @igcChange="${(e: any) => this.value7 = e.detail}" class="input_1"></igc-input>
              </div>
              <p class="typography__subtitle-1 text_1">
                Contact
              </p>
              <div class="row-layout group_17">
                <igc-input type="tel" label="Home phone" ?outlined="${true}" class="user-input">
                  <span slot="prefix">
                    <span class="material-icons icon_2">
                      home
                    </span>
                  </span>
                </igc-input>
                <igc-input type="tel" label="Work phone" ?outlined="${true}" class="user-input">
                  <span slot="prefix">
                    <span class="material-icons icon_2">
                      domain
                    </span>
                  </span>
                </igc-input>
                <igc-input type="tel" label="Mobile phone" ?outlined="${true}" class="user-input">
                  <span slot="prefix">
                    <span class="material-icons icon_2">
                      person
                    </span>
                  </span>
                </igc-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
