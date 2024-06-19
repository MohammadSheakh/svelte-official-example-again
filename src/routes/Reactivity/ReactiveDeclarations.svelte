<script>
  let count = 1;

  // the `$:` means 're-run whenever these values change'
  // useEffect 
  $: doubled = count * 2;
  $: quadrupled = count * 4;

  function handleClick() {
    count += 1;
  }
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Reactive Declarations</h1>
  <button on:click={handleClick} class="border border-2 p-1 rounded-lg">
    Count: {count}
  </button>

  <p>{count} * 2 = {doubled}</p>
  <p>{doubled} * 2 = {quadrupled}</p>
</div>