<script>
    import Header from '$components/Header.svelte';
    import Footer from '$components/Footer.svelte';

    let clip = '/public/videos/6433488-hd_1280_720_60fps.mp4';
    let played = true;
</script>

<Header />
<main class="container-wrap">
    <video src={clip} autoplay muted> </video>
</main>
<Footer />

<style lang="scss">
</style>
