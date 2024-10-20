/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useState } from 'react';
import { createComponent } from '@lit/react';

const LitReactButtonRxjs = createComponent({
	tagName: 'wc-button-rxjs',
	elementClass: HTMLElement,
	react: React,
	events: {
		'oncustom-click': 'customClick',
	},
});

const LitReactButtonSignal = createComponent({
	tagName: 'wc-button-signal',
	elementClass: HTMLElement,
	react: React,
	events: {
		'oncustom-click': 'customClick',
	},
});

function App() {
	const [content] = useState('React 19');

	function onButtonRxjsCustomClick(event: any) {
		console.log('onButtonRxjsCustomClick', event);
		alert('React 19 RxJS');
	}

	function onButtonSignalCustomClick(event: any) {
		console.log('onButtonSignalCustomClick', event);
		alert('React 19 Signal');
	}

	const [inputRxjsValue, setInputRxjsValue] = useState(
		'Initial Value for React 19 Input (RxJS)'
	);
	const [inputSignalValue, setInputSignalValue] = useState(
		'Initial Value for React 19 Input (Signal)'
	);

	return (
		<main style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
			<wc-shared-components></wc-shared-components>
			<wc-button>Plain Button w/ Slot Usage on React 19</wc-button>
			<wc-button-rxjs
				content={content + ' RxJS'}
				oncustomClick={onButtonRxjsCustomClick}
			></wc-button-rxjs>
			<wc-button-signal
				content={content + ' Signal'}
				oncustomClick={onButtonSignalCustomClick}
			></wc-button-signal>
			<LitReactButtonRxjs
				content={content + ' Lit RxJS'}
				oncustom-click={onButtonRxjsCustomClick}
			></LitReactButtonRxjs>
			<LitReactButtonSignal
				content={content + ' Lit Signal'}
				oncustom-click={onButtonSignalCustomClick}
			></LitReactButtonSignal>

			<pre>Input (RxJS) Value: {inputRxjsValue}</pre>
			<wc-input-rxjs
				value={inputRxjsValue}
				onvalueChanged={(event: any) => setInputRxjsValue(event.detail)}
				label={'Input (RxJS)'}
				placeholder={'Placeholder'}
			></wc-input-rxjs>

			<pre>Input (Signal) Value: {inputSignalValue}</pre>
			<wc-input-signal
				value={inputSignalValue}
				onvalueChange={(event: any) => setInputSignalValue(event.detail)}
				label={'Input (Signal)'}
				placeholder={'Placeholder'}
			></wc-input-signal>

			<wc-card-multiple-content-projection>
				<div cardheader="true">
					My Card Header - Multiple Content Projection
				</div>
				<div cardbody="true">
					<p>This is the body content of the card.</p>
				</div>
				<div cardfooter="true">
					<button>Footer Action</button>
				</div>
			</wc-card-multiple-content-projection>
		</main>
	);
}

export default App;
