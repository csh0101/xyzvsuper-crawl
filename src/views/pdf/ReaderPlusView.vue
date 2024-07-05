<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as PDFJS from 'pdfjs-dist'
import { VuePDF } from '@tato30/vue-pdf'
import '@tato30/vue-pdf/style.css'
import PDFWorker from 'pdfjs-dist/build/pdf.worker.min?url'
PDFJS.GlobalWorkerOptions.workerSrc = PDFWorker
const pdf = ref()
const page = ref(1)

function loadPDF() {
    const loadingTask = PDFJS.getDocument('llm_generate_code_is_correct.pdf')
    pdf.value = loadingTask
}
onMounted(() => {
    loadPDF()
})
</script>

<template>
    <div>
        <VuePDF :pdf="pdf" :page="page" text-layer annotation-layer />
    </div>
      <a class="item" @click="page++">
        Forward
        <i class="right chevron icon"></i>
      </a>
</template>
