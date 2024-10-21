<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { reactive, ref } from 'vue'

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

const data = ref([
  { id: 1, name: 'Vue 3' },
  { id: 2, name: 'Vue 3 RxJS' },
  { id: 3, name: 'Vue 3 Signal' },
  { id: 4, name: 'Vue 3 Web Components' },
  { id: 5, name: 'Vue 3 Web Components RxJS' },
  { id: 6, name: 'Vue 3 Web Components Signal' },
])

const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 500)
setTimeout(() => {
  data.value[0].name = 'Vue 3 - Updated'
}, 1500)

function onItemClicked(item: any) {
  console.log('onItemClicked', item)
  alert(JSON.stringify(item.detail, null, 2))
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

    <template v-if="data && !isLoading">
      <pre>{{ data }}</pre>
      <h3>Complex Type Object</h3>
      <wc-complex-type-object
        @itemClicked="onItemClicked($event)"
        :data="data[0]"
      ></wc-complex-type-object>

      <h3>Complex Type Array</h3>
      <wc-complex-type-array
        @itemClicked="onItemClicked($event)"
        :data="data"
      ></wc-complex-type-array>
    </template>
  </main>
</template>
