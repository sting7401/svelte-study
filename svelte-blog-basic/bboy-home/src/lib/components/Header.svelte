<script>
    const menuLists = ['/', 'about', 'news', 'contact'];
</script>

<header class="text-center p-[25px]">
    <div class="logo pb-15">
        <a href="/"><img src="/images/logo.png" alt="" /></a>
    </div>

    <nav>
        <ul class="inline-flex gap-[1em] text-[#333]">
            {#each menuLists as element}
                <li>
                    <a href={element === '/' ? '' : `#/${element}`} class="hover:opacity-70"
                        >{element === '/' ? 'home' : element}</a
                    >
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style lang="scss">
    header {
        text-align: center;
    }
</style>
