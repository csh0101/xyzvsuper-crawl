import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/HomeView.vue';
import CrawlView from '@/views/crawl/CrawlView.vue';
// import PDFReader from '@/views/pdf/ReaderView.vue';
import PDFPlusReader from '@/views/pdf/ReaderPlusView.vue';

const routes = [
    // 其他路由配置...
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/crawl',
        name: 'Crawl',
        component: CrawlView,
    },
    // {
    //     path: '/pdf',
    //     name: 'PdfViewer',
    //     component: PDFReader,
    // },
    {
        path: '/pdfplus',
        name: 'PdfPlusViewer',
        component: PDFPlusReader,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
