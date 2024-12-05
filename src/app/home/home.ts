import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcIconComponent, IgcAvatarComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcListComponent, IgcListItemComponent);

@customElement('app-home')
export default class Home extends LitElement {
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
    .content {
      background-color: var(--ig-gray-100);
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_1 {
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
    .group_2 {
      background-color: var(--ig-surface-500);
      border-color: var(--ig-gray-200);
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      margin: -32px 0 0;
      padding: 0 0 16px;
      width: 350px;
      min-width: 50px;
      max-width: 350px;
    }
    .group_3 {
      background-color: var(--ig-gray-200);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 8px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 8px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      border-color: var(--ig-gray-300);
      border-width: 0px 0px 0px 1px;
      border-style: solid;
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 8px;
      height: max-content;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 8px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 16px;
      min-width: 50px;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      overflow: auto;
      position: relative;
      min-width: 50px;
    }
    .list_scroll {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_12 {
      background-color: var(--ig-surface-500);
      border-color: var(--ig-gray-200);
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      margin: -32px 0 0;
      min-width: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_13 {
      background-color: var(--ig-surface-500);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .group_14 {
      background-color: var(--ig-gray-200);
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      padding: 4px 16px;
      height: max-content;
      flex-shrink: 0;
    }
    .group_15 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
    }
    .group_16 {
      border-color: var(--ig-gray-200);
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      padding: 10px 16px 0;
      height: max-content;
      flex-shrink: 0;
    }
    .icon {
      --size: 36px;
      font-size: 36px;
      width: 36px;
      height: 36px;
      color: var(--ig-surface-500);
      margin: 0 16px 0 0;
    }
    .h4 {
      color: var(--ig-surface-500);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .avatar {
      --ig-size: var(--ig-size-medium);
    }
    .content_1 {
      height: max-content;
    }
    .text {
      margin: 0 0 8px;
      width: max-content;
      height: max-content;
    }
    .icon_1 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      margin: 0 0 8px;
    }
    .text_1 {
      height: max-content;
      min-width: min-content;
    }
    .content_2 {
      margin: 0 8px 0 0;
      width: max-content;
      height: max-content;
      flex-shrink: 0;
    }
    .icon_2 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--ig-primary-500);
    }
    .icon_3 {
      color: var(--ig-primary-500);
    }
    .text_2 {
      margin: 0 0 0 16px;
      height: max-content;
    }
    .avatar_1 {
      --ig-size: var(--ig-size-small);
    }
    .icon_4 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .text_3 {
      color: var(--ig-gray-900);
      height: max-content;
    }
    .avatar_2::part(base) {
      background-color: transparent;
    }
    .avatar_1_1::part(base) {
      background-color: transparent;
    }
    .avatar_1_2::part(base) {
      background-color: transparent;
    }
    .avatar_1_3::part(base) {
      background-color: transparent;
    }
    .avatar_1_4::part(base) {
      background-color: transparent;
    }
    .avatar_1_5::part(base) {
      background-color: transparent;
    }
    .avatar_1_6::part(base) {
      background-color: var(--ig-gray-100);
    }
    .avatar_1_7::part(base) {
      background-color: var(--ig-gray-100);
    }
    .avatar_1_8::part(base) {
      background-color: var(--ig-gray-100);
    }
    .avatar_1_9::part(base) {
      background-color: var(--ig-gray-100);
    }
    .icon-button::part(base) {
      color: var(--ig-primary-500);
    }
    .button {
      --ig-size: var(--ig-size-medium);
      margin: 0 8px 0 0;
      height: max-content;
      max-width: 100%;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .list {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout page-content">
        <div class="row-layout header">
          <div class="row-layout group">
            <span class="material-icons icon">
              home
            </span>
            <h4 class="h4">
              Home
            </h4>
          </div>
        </div>
        <div class="row-layout content">
          <div class="row-layout group_1">
            <div class="column-layout group_2">
              <div class="row-layout group_3">
                <igc-avatar src="/src/assets/Avatar6.png" shape="circle" class="avatar avatar_2"></igc-avatar>
                <div class="column-layout group_4">
                  <h5 class="content_1">
                    Erin Brockovich
                  </h5>
                  <p class="typography__body-1 content_1">
                    Water quality specialist
                  </p>
                </div>
              </div>
              <div class="column-layout group_5">
                <div class="row-layout group_6">
                  <div class="column-layout group_7">
                    <p class="typography__subtitle-2 text">
                      Open PTO
                    </p>
                    <span class="material-icons icon_1">
                      date_range
                    </span>
                    <p class="typography__body-2 text_1">
                      8.5 days used (YTD)
                    </p>
                    <p class="typography__caption text_1">
                      1 day scheduled
                    </p>
                  </div>
                  <div class="column-layout group_8">
                    <p class="typography__subtitle-2 text">
                      Bereavement leave
                    </p>
                    <div class="row-layout group_9">
                      <h6 class="content_2">
                        0.0
                      </h6>
                      <span class="material-icons icon_2">
                        date_range
                      </span>
                    </div>
                    <p class="typography__body-2 text_1">
                      Days available
                    </p>
                    <p class="typography__caption text_1">
                      0 day scheduled
                    </p>
                  </div>
                </div>
                <div class="row-layout group_10">
                  <igc-button type="button" class="button">
                    <span class="material-icons">
                      send
                    </span>
                    <span>Request time off</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button variant="flat" class="icon-button">
                    <span class="material-icons icon_3">
                      email
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </div>
              </div>
              <div class="column-layout group_11">
                <p class="typography__subtitle-2 text_2">
                  What's the buzz
                </p>
                <div class="column-layout list_scroll">
                  <igc-list class="list">
                    <igc-list-item>
                      <igc-avatar src="/src/assets/Avatar3.png" slot="start" shape="circle" class="avatar_1 avatar_1_1"></igc-avatar>
                      <div slot="title">Ethan Hunt</div>
                      <div slot="subtitle">Birthday, Oct 1</div>
                      <span slot="end" class="material-icons icon_4">
                        cake
                      </span>
                    </igc-list-item>
                    <igc-list-item>
                      <igc-avatar src="/src/assets/Avatar5.png" slot="start" shape="circle" class="avatar_1 avatar_1_2"></igc-avatar>
                      <div slot="title">Luke Skywalker</div>
                      <div slot="subtitle">25th work-anniversary</div>
                      <span slot="end" class="material-icons icon_4">
                        flag
                      </span>
                    </igc-list-item>
                    <igc-list-item>
                      <igc-avatar src="/src/assets/Avatar1.png" slot="start" shape="circle" class="avatar_1 avatar_1_3"></igc-avatar>
                      <div slot="title">Donnie Darko</div>
                      <div slot="subtitle">On vacation, Oct 10-23</div>
                      <span slot="end" class="material-icons icon_4">
                        beach_access
                      </span>
                    </igc-list-item>
                    <igc-list-item>
                      <igc-avatar src="/src/assets/Avatar2.png" slot="start" shape="circle" class="avatar_1 avatar_1_4"></igc-avatar>
                      <div slot="title">Edna Mode</div>
                      <div slot="subtitle">Visiting customer</div>
                      <span slot="end" class="material-icons icon_4">
                        airplanemode_active
                      </span>
                    </igc-list-item>
                  </igc-list>
                </div>
              </div>
            </div>
            <div class="column-layout group_12">
              <div class="column-layout group_13">
                <div class="row-layout group_14">
                  <p class="typography__subtitle-2 text_3">
                    What's happening at Rapid Fission Inc.
                  </p>
                  <p class="typography__subtitle-2 text_3">
                    Announcements (1)
                  </p>
                </div>
                <igc-list class="list">
                  <igc-list-item>
                    <igc-avatar src="/src/assets/Avatar4.png" slot="start" shape="circle" class="avatar_1 avatar_1_5"></igc-avatar>
                    <div slot="title">George Bailey posted  an announcement, awards, and call for nominations</div>
                    <div slot="subtitle">19 days ago</div>
                    <span slot="end" class="material-icons icon_4">
                      clear
                    </span>
                  </igc-list-item>
                </igc-list>
              </div>
              <div class="column-layout group_15">
                <div class="row-layout group_16">
                  <p class="typography__subtitle-2 content_2">
                    MY BENEFITS
                  </p>
                </div>
                <igc-list class="list">
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1 avatar_1_6">
                      <span class="material-icons">
                        security
                      </span>
                    </igc-avatar>
                    <div slot="title">Radiation protection health insurance planre</div>
                    <div slot="subtitle">$600 every other week</div>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1 avatar_1_7">
                      <span class="material-icons">
                        remove_red_eye
                      </span>
                    </igc-avatar>
                    <div slot="title">20/20 Vision plans here</div>
                    <div slot="subtitle">$234 every other week</div>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1 avatar_1_8">
                      <span class="material-icons">
                        child_friendly
                      </span>
                    </igc-avatar>
                    <div slot="title">Child care savings</div>
                    <div slot="subtitle">$4955 remaining</div>
                  </igc-list-item>
                  <igc-list-item>
                    <igc-avatar slot="start" shape="circle" class="avatar_1 avatar_1_9">
                      <span class="material-icons">
                        security
                      </span>
                    </igc-avatar>
                    <div slot="title">Fire hazard protection  </div>
                    <div slot="subtitle">On da house!</div>
                  </igc-list-item>
                </igc-list>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
