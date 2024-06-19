<script>
  let count = 0;
  let status = '' ;

  $: if(count >= 3){
    status = 'count is dangerously high!'
    count = 2;
    setTimeout(() => {
      status = '';
    }, 1000);
  }

  function handleClick() {
    count +=1;
  }

</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Reactive Statement</h1>
  <button on:click={handleClick} class="border border-2 p-1 rounded-lg">
    Count: {count} 
  </button>
  <p class="text-red-300">{status}</p>
</div>

