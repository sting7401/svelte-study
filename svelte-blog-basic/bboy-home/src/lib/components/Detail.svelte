<script>
    import Header from '$components/Header.svelte';
    import Footer from '$components/Footer.svelte';

    export let params = {};
    let news = [];
    import newsData from '../../assets/news.json';

    // JSON 데이터를 fetch로 불러오기 대신, import된 JSON 데이터 사용
    news = newsData.news;

    // 특정 ID의 뉴스를 찾는 함수
    const getNews = (id) => {
        return news.find((item) => item.id === id);
    };

    // 찾은 뉴스 데이터 확인
    let selectedNews = getNews(Number(params.id));

    // 디버깅용 콘솔 출력
    console.log(selectedNews);
</script>

<Header />
<main class="container-wrap">
    {#if selectedNews}
        <div class="mb-10">
            <h2>{selectedNews.title}</h2>
            <p>{selectedNews.date}</p>

            <figure class="image">
                <img src={selectedNews.imgUrl} alt={selectedNews.title} class="w-full" />
            </figure>
        </div>

        <article class="mt-10">
            <div>{@html selectedNews.desc}</div>
        </article>
    {:else}
        <p>해당 뉴스 항목을 찾을 수 없습니다.</p>
    {/if}
</main>
<Footer />

<style>
    /* 원하는 스타일 추가 */
</style>
