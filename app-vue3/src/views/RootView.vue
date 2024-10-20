<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'

const content = ref('Vue 3')

function onButtonRxjsCustomClick(event: any) {
  console.log('onButtonRxjsCustomClick', event)
  alert('Vue 3 RxJS')
}

function onButtonSignalCustomClick(event: any) {
  console.log('onButtonSignalCustomClick', event)
  alert('Vue 3 Signal')
}

const inputRxjsValue = ref('Initial Value for Vue 3 Input (RxJS)')
const setInputRxjsValue = (value: string) => {
  inputRxjsValue.value = value
}
const inputSignalValue = ref('Initial Value for Vue 3 Input (Signal)')
const setInputSignalValue = (value: string) => {
  inputSignalValue.value = value
}
</script>

<template>
  <main style="display: flex; flex-direction: column; row-gap: 1rem">
    <wc-shared-components></wc-shared-components>
    <wc-button>Plain Button w/ Slot Usage on Vue 3</wc-button>
    <wc-button-rxjs
      :content="content + ' RxJS'"
      @customClick="onButtonRxjsCustomClick($event)"
    ></wc-button-rxjs>
    <wc-button-signal
      :content="content + ' Signal'"
      @customClick="onButtonSignalCustomClick($event)"
    ></wc-button-signal>

    <pre>Input (RxJS) Value: {{ inputRxjsValue }}</pre>
    <wc-input-rxjs
      :value="inputRxjsValue"
      @valueChanged="(event: any) => setInputRxjsValue(event.detail)"
      label="Input (RxJS)"
      placeholder="Placeholder"
    ></wc-input-rxjs>

    <pre>Input (Signal) Value: {{ inputSignalValue }}</pre>
    <wc-input-signal
      :value="inputSignalValue"
      @valueChange="(event: any) => setInputSignalValue(event.detail)"
      label="Input (Signal)"
      placeholder="Placeholder"
    ></wc-input-signal>

    <wc-card-multiple-content-projection>
      <div cardHeader>My Card Header - Multiple Content Projection</div>
      <div cardBody>
        <p>This is the body content of the card.</p>
      </div>
      <div cardFooter>
        <button>Footer Action</button>
      </div>
    </wc-card-multiple-content-projection>
  </main>
</template>
