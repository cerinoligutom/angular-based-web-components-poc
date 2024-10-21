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

const LitReactComplexTypeObject = createComponent({
	tagName: 'wc-complex-type-object',
	elementClass: HTMLElement,
	react: React,
	events: {
		'onitem-clicked': 'itemClicked',
	},
});

const LitReactComplexTypeArray = createComponent({
	tagName: 'wc-complex-type-array',
	elementClass: HTMLElement,
	react: React,
	events: {
		'onitem-clicked': 'itemClicked',
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

	const [data, setData] = useState([
		{ id: 1, name: 'React 19' },
		{ id: 2, name: 'React 19 RxJS' },
		{ id: 3, name: 'React 19 Signal' },
		{ id: 4, name: 'React 19 Web Components' },
		{ id: 5, name: 'React 19 Web Components RxJS' },
		{ id: 6, name: 'React 19 Web Components Signal' },
	]);

	const [isLoading, setIsLoading] = useState(true);
	setTimeout(() => {
		setIsLoading(false);
	}, 500);
	setTimeout(() => {
		setData((prevData) => {
			// Create a copy of the array
			const newData = [...prevData];

			// Update the first element's name in the copied array
			newData[0] = { ...newData[0], name: 'React 19 - Updated' };

			// Return the updated array
			return newData;
		});
	}, 1500);

	function onItemClicked(item: any) {
		console.log('onItemClicked', item);
		alert(JSON.stringify(item.detail, null, 2));
	}

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

			{!isLoading && (
				<>
					<pre>{JSON.stringify(data, null, 2)}</pre>
					<h3>Complex Type Object</h3>
					<wc-complex-type-object
						onitemClicked={onItemClicked}
						data={data[0]}
					></wc-complex-type-object>

					<h3>Complex Type Array</h3>
					<wc-complex-type-array
						onitemClicked={onItemClicked}
						data={data}
					></wc-complex-type-array>

					<h3>Complex Type Object - Lit</h3>
					<LitReactComplexTypeObject
						onitem-clicked={onItemClicked}
						data={data[0]}
					></LitReactComplexTypeObject>

					<h3>Complex Type Array - Lit</h3>
					<LitReactComplexTypeArray
						onitem-clicked={onItemClicked}
						data={data}
					></LitReactComplexTypeArray>
				</>
			)}
		</main>
	);
}

export default App;
