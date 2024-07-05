<script lang="ts" setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import '@tato30/vue-pdf/style.css'
const { pdf, pages, info } = usePDF('llm_generate_code_is_correct.pdf')

console.log(`Document has ${pages} pages`)
console.log(`Document info: ${info}`)
</script>

<template>
  <VuePDF :pdf="pdf"  text-layer annotation-layer />
</template>
