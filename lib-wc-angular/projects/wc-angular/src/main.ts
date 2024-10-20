import { createApplication } from '@angular/platform-browser';
import { appConfig } from './main.config';
import { createCustomElement } from '@angular/elements';
import {
  SharedComponentsComponent,
  ButtonComponent,
  ButtonRxjsComponent,
  ButtonSignalComponent,
  InputRxjsComponent,
  InputSignalComponent,
  CardMultipleContentProjectionComponent,
} from 'shared-components';
import { ApplicationRef } from '@angular/core';

(async () => {
  const app: ApplicationRef = await createApplication(appConfig);

  // Define Web Components
  const sharedComponentsComponent = createCustomElement(
    SharedComponentsComponent,
    { injector: app.injector }
  );
  customElements.define('wc-shared-components', sharedComponentsComponent);

  const buttonComponent = createCustomElement(ButtonComponent, {
    injector: app.injector,
  });
  customElements.define('wc-button', buttonComponent);

  const buttonRxjsComponent = createCustomElement(ButtonRxjsComponent, {
    injector: app.injector,
  });
  customElements.define('wc-button-rxjs', buttonRxjsComponent);

  const buttonSignalComponent = createCustomElement(ButtonSignalComponent, {
    injector: app.injector,
  });
  customElements.define('wc-button-signal', buttonSignalComponent);

  const inputRxjsComponent = createCustomElement(InputRxjsComponent, {
    injector: app.injector,
  });
  customElements.define('wc-input-rxjs', inputRxjsComponent);

  const inputSignalComponent = createCustomElement(InputSignalComponent, {
    injector: app.injector,
  });
  customElements.define('wc-input-signal', inputSignalComponent);

  const cardMultipleContentProjectionComponent = createCustomElement(
    CardMultipleContentProjectionComponent,
    { injector: app.injector }
  );
  customElements.define(
    'wc-card-multiple-content-projection',
    cardMultipleContentProjectionComponent
  );
})();
