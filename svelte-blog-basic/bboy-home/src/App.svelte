<script>
    import Router, { location, link } from 'svelte-spa-router';
    import Home from '$components/Home.svelte';
    import About from '$components/About.svelte';
    import News from '$components/News.svelte';
    import Detail from '$components/Detail.svelte';
    import Contact from '$components/Contact.svelte';
</script>

<Router routes={{ '/': Home, '/about': About, '/news': News, '/detail/:id': Detail, '/contact': Contact }} />

<style>
</style>
