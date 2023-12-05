<script>
    export let y;

    let tabs =[
        {name: 'Project', link: '#'},
        {name: 'About', link: '#about'},
      //  {name: 'Bloog', link: '#project'},
    ]
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flelx items-center justify-between border-solid' + (y > 0 ? 'py-4 bg-slate-950' : 'py-6 bg-transparent border-transparent')}>

    <h1 class="font-medium">
        <strong class="font-bold poppins">song</strong>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href="{tab.link}">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
</header>
