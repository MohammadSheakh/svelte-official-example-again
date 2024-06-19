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

  function handleCountReduce(){
    count -=1;
  }

</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Reactive Statement</h1>
  <div class="ml-[10%]">
  <button on:click={handleClick} class="border border-2 border-blue-300 p-1 rounded-lg">
    Count: {count} 
  </button>


  <p class="text-red-300">{status}</p>

  { #if count <= 2 && count >0 }
    <button on:click={handleCountReduce} class="border border-2 border-blue-300 p-1 rounded-lg">
      -
    </button>  
  {/if}
    
</div>
</div>

