<template>
    <div>
        <button @click="handleButtonClick">获取推荐</button>
        <div v-if="tvs.length > 0">
            <h2>推荐的电影</h2>
            <ul>
                <li v-for="(tv, index) in tvs" :key="index">{{ tv }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IExecCrawl } from '../interfaces/crawl';
import { execCrawl } from '../services/CrawlService';

export default defineComponent({
    name: 'CrawlComponents',
    setup() {
        const tvs = ref<string[]>([]);

        const handleButtonClick = async () => {
            console.log('开始爬取少数派的电影...');
            try {
                const res = await execCrawl<IExecCrawl>();
                console.log(res.data?.raw_data);
                const rawData = res.data?.raw_data ?? ''; // Use an empty string as fallback
                const recommendations = rawData.slice(rawData.indexOf('：') + 1).split('、').filter(Boolean); // filter(Boolean) removes empty strings
                tvs.value = recommendations.length ? recommendations : []; // Ensure tvs.value is always an array
            } catch (error) {
                console.error("爬取失败:", error);
            }
        };

        return {
            tvs,
            handleButtonClick
        };
    },
});
</script>
