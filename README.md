# Web Components Prototype

This repo aims to experiment in isolation on how to create Web Components based on Angular and consuming it on:

- React 19 RC
  - `app-react19` folder
- Vue 3
  - `app-vue3` folder
- Angular 18
  - `app-angular18` folder
  - Ignore this as it's broken.

Some relevant articles about Web Components below. Highly recommended you go through the articles before proceeding (including the discussions in the comments). This topic is being discussed again recently by the community especially by Framework Authors after Ryan's recent article (3rd item below).

- 2019-06-20 [Why I don't use web components](https://dev.to/richharris/why-i-don-t-use-web-components-2cia) by Rich Harris (Svelte creator)
- 2020-03-27 [Maybe Web Components are not the Future](https://dev.to/ryansolid/maybe-web-components-are-not-the-future-hfh) by Ryan Carniato (SolidJS creator)
- 2024-09-27 [Web Components Are Not the Future](https://dev.to/ryansolid/web-components-are-not-the-future-48bh) by Ryan Carniato (SolidJS creator)
- 2024-09-28 [Web components are okay](https://nolanlawson.com/2024/09/28/web-components-are-okay/) by Nolan Lawson
  - A response to Ryan's article above.

## `lib-wc-angular`

### Notable Files/Directories

- `angular.json`
  - `projects/wc-angular`'s builder is set to `@angular-devkit/build-angular:browser-esbuild`.
  - `projects/wc-angular`'s `build.options.scripts` is populated to use the script.
- `projects/shared-components`
  - This is a shared library that contains the Angular Components to be converted into Custom Elements.
- `projects/wc-angular/src/main.ts`
  - Define Custom Elements here.

### Run both libraries in watch mode

```bash
ng build shared-components --watch
```

```bash
ng build wc-angular --watch
```

## Notes

| Component                             | Vue 3 | React 19 RC | Notes                                                                                                                                                                         |
| ------------------------------------- | ----- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared Components                     | ✅     | ✅           | -                                                                                                                                                                             |
| `wc-button`                           | ✅     | ✅           | Basic Content Projection using `<ng-content>`.                                                                                                                                |
| `wc-button-rxjs`                      | ✅     | ✅           | Uses `@Input` and `@Output`. Vue stays syntactically the same. React however needs prefixing with `on` then the event property (e.g. `on` + `customClick` = `oncustomClick`). |
| `wc-button-signal`                    | ✅     | ✅           | Got Signals to work after moving to Angular 19 (Pre-Release). See "Other notable things" section.                                                                             |
| `LitReactButtonRxjs`                  | N/A   | ✅           | Not much DX gained as `wc-button-rxjs`.                                                                                                                                       |
| `LitReactButtonSignal`                | N/A   | ✅           | Not much DX gained as `wc-button-signal`.                                                                                                                                     |
| `wc-input-rxjs`                       | ✅     | ✅           | Since the Web Components emits a `CustomEvent`, native 2-way binding mechanisms on downstream frameworks will not work.                                                       |
| `wc-input-signal`                     | ✅     | ✅           | Has some things to watch out on authoring-time. See "Other notable things" section.                                                                                           |
| `wc-card-multiple-content-projection` | ✅     | ✅           | Usage in Vue is similar as Angular. React however with its JSX requires the content projection selector to be all lowercase and should have an attribute value                |
| `wc-complex-type-card`                | N/A   | N/A         | A child component for the `wc-complex-type-object` and `wc-complex-type-array` components to consume. Also to emulate child components.                                       |
| `wc-complex-type-object`              | ✅     | 🟠           | To test passing complex type, particularly an object (e.g. hashmap, dictionary). Need to be mindful about the rendering.                                                      |
| `wc-complex-type-array`               | ✅     | 🟠           | To test passing complex type, particularly an array. Need to be mindful about the rendering.                                                                                  |

### Other notable things

- Signals are broken in Angular 18 and throws an error in the console.
  - Needs Angular 19 (which is still in Pre-Release as of writing).
  - See [ref1](https://github.com/angular/angular/issues/53981), [ref2](https://github.com/angular/angular/issues/57755#issuecomment-2341180169) and [ref3](https://github.com/angular/angular/pull/56728).
- Angular's official documentation surrounding Angular Elements and Custom Elements is very lacking.
- Hot Reload doesn't work properly for consumers of the Web Components (WC).
  - The style disappears for the WC when the component that's consuming a WC is updated.
- Events received for both React and Vue are of type `CustomEvent` and the emitted data from the Angular WC can be accessed thru `event.detail`.
- React w/ TS doesn't recognize Web Components out of the box. To be more specific, JSX/TSX doesn't recognize it so we get a lot of errors in the IDE. We need to do a Module Augmentation and manually add our CUstom Element to JSX's table of elements.
  - Refer to [this](https://medium.com/@joelmalone/get-jsx-to-recognise-your-custom-element-in-react-or-preact-bf08d7522208) article on how to achieve it.
- Explored using Lit Labs but the unreliable nature of it may not be ideal for Production-use. See bullets from this [page](https://lit.dev/docs/libraries/labs/) particularly regarding breaking changes.
  - This could potentially be a big tech debt if upstream requires drastic changes from one of its breaking changes so we shouldn't use ones from Lit Labs for Production Use.
  - On the bright-side, React has graduated from Lit Labs and has now a stable version under [`@lit/react`](https://lit.dev/docs/frameworks/react/) package.
- Using `@lit/react` kinda gets rid of the need to do Module Augmentation for React.
  - Problem is shifted to upon creation of the Lit Wrapper.
    - We need to map the events from the Web Component to the React's Synthetic Event.
    - If strongly typed components is preferred, we still need to define and provide it.
      - With the lit approach, it doesn't pollute the Global Namespace.
    - We'll need to this for every Web Component we use in React.
      - This will be an additional maintenance burden especially when things change upstream.
- Angular's Form semantics is just thrown out of the bus. 
  - We now need to maintain 2 things to handle inputs:
    - The Angular Way which is by implementing the `ControlValueAccessor` interface and complying with its methods.
      - This doesn't require exposing Inputs and Outputs for internal states because Angular's Reactive Form and Template-Driven Form know how to interface with the `ControlValueAccessor` interface.
    - The Fundamental Way which is to expose 2 properties.
      - `value`: The value of the input.
      - `valueChange`: The event emitter for the value.
  - There's some friction at authoring time for components that can act like a Form Control.
    - There will be some level of duplication in logic to satisfy both ways.
      - Such as Form States (Dirty, Touched, etc.)
        - Angular's Reactive Form and Template-Driven Form knows how to interface with the `ControlValueAccessor` interface to obtain this.
        - The Fundamental Way needs to manually implement each of these.
      - Styling based on Form States.
        - Angular has a way to access the Control instance to determine the state of the Form Control and style accordingly. Now we have to consider the Fundamental Way on top of it.
    - Working with Angular Signals while maintaining both ways has some gotchas when just using `input`.
      - `input` Signals (the equivalent of `@Input`) in Angular is non-writable therefore we'll need to maintain 2 internal states **for each input** we expose.
        - One that we can write to internally for whatever internal purposes.
        - Another that we can expose to the outside world.
      - Instead of using `input`, we should use `model` which is a Writable Signal and also handles `output` for us.
        - The output's name is always the name of the input suffixed with Change to support two-way bindings ([ref](https://angular.dev/guide/signals/model#differences-between-model-and-input)).
- `encapsulation` property in Angular's `@Component` decorator should always be set to `ViewEncapsulation.None` to allow overriding of styles from the parent.
  - Keep in mind, the "C" in "CSS" still applies. Basically, import order matters.
- Bundle size is pretty large with Angular Elements.
- Web Components are eager loaded all at once.
  - This can potentially impact user experience as they have to download all the Web Components at once before being able to interact with the page.
- When dealing with complex types, need to keep a few things in mind as there are differences in how the frameworks handle it.
  - Common
    - You'll always receive a `CustomEvent` object when receiving events.
    - You can still pass data to the Web Component with the preferred syntax of the framework. However, the Web Component must be loaded first or else, the framework might bind it ahead before the Web Component is loaded therefore nothing gets rendered!
  - Vue 3
    - When a property of the object is mutated by the Web Component, it detects the change and re-renders the component.
    - The object from the parent is also mutated.
  - React 19 RC
    - When a property of the object is mutated by the Web Component, you'll have to manually update the object in the top-most parent component.
    - The object from the parent is NOT mutated.
    - This means, if there are operations that may mutate the object, you'll have to do it in the top-most parent component and make sure the Web Component bubbles the event so that the consumer of the Web Component can handle the updating of the state.

No sane solutions around these:

- [ ] Wrapping a 3rd party library and making use of its custom templates.
- [ ] Using a 3rd party library that has an accompanying Angular service and trying to use that service downstream.
