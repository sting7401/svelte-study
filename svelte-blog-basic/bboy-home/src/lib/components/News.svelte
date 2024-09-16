<script>
    import Header from '$components/Header.svelte';
    import Footer from '$components/Footer.svelte';

    import newsData from '../../assets/news.json';

    let news = [];

    // JSON 데이터를 fetch로 불러오기
    const fetchNews = async () => {
        const response = await fetch('/src/assets/news.json');
        const data = await response.json();
        return data.news; // news 배열을 반환
    };
    const getNews = (id) => {
        return news.find((item) => {
            item.id === id;
        });
    };
</script>

<Header />
<main class="container-wrap">
    <h2>비보이 브라더스 활동</h2>

    <div class="flex about gap-[2em]">
        {#await fetchNews() then news}
            {#each news as element, id}
                <a href={`/#/detail/${id}`} id={String(id)} class="w-1/3">
                    <div class="shadow-md content">
                        <figure class="image">
                            <img src={element.imgUrl} alt={element.title} class="w-full" />
                        </figure>
                        <h3 class="p-10">{element.title}</h3>
                        <div class="p-10">
                            {#each element.hashtag as tag}
                                <span>#{tag}</span>
                            {/each}
                        </div>
                    </div>
                </a>
            {/each}
        {/await}
    </div>
</main>
<Footer />

<style>
</style>
