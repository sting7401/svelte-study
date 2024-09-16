<script>
    import Header from '$components/Header.svelte';
    import Footer from '$components/Footer.svelte';
</script>

<Header />
<main class="container-wrap">
    <h2>최고의 무대를 선사하겠습니다.</h2>

    <div class="flex gap-[20px]">
        <figure class="w-1/2 map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6310.958276677891!2d127.0347676981621!3d37.73190213798468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cc0b34b41b6a9%3A0xb137586da7271727!2z6rK96riw64-EIOydmOygleu2gOyLnCDrspTqs6jroZw!5e0!3m2!1sko!2skr!4v1714051550530!5m2!1sko!2skr"
                width="100%"
                height="450"
                style="border:0;"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </figure>
        <address class="w-1/2">
            <p>경기도 의정부시 범골로 123번길 11, 3층<br />빅브라더 스튜디오</p>
            <p>
                Email:
                <a href="mailto:bbrother@gmail.com">bbrother@gmail.com</a>
            </p>
            <p>
                Tel:
                <a href="tel:031-000-0000">031-000-0000</a> /
                <a href="tel:010-000-0000">010-000-0000</a>
            </p>
            <p>Fax: 031-000-0000</p>
        </address>
    </div>
</main>
<Footer />

<style>
    /* 원하는 스타일 추가 */
</style>
