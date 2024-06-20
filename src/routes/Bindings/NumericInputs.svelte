<script>
  let a = 1;
  let b = 2;
</script>


<div>
  <h1 class="text-yellow-800 font-semibold ">Numeric Inputs</h1>
  <div class="ml-[10%] flex flex-col ">
  <!-- <input bind:value={name} placeholder="please enter text"/> -->
  
  <label>
    <input type="number" bind:value={a} min="0" max="10"  class="border border-2 w-[60px] rounded-lg p-1"/>
    <input type="range" bind:value={a} min="0" max="10" />
  </label>
  
  <label>
    <input type="number" bind:value={b} min="0" max="10"  class="border border-2 w-[60px] rounded-lg p-1"/>
    <input type="range" bind:value={b} min="0" max="10" />
  </label>


  <p>{a} + {b} = {a + b}  </p> 

</div>
</div>