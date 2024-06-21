<script>
  import { onInterval } from "./utils";

  let seconds = 0;
  onInterval(() => {
    seconds += 1;
  }, 4);

</script>

<div>
  <h1 class="text-yellow-800 font-semibold ">on Destroy</h1>
  <div class="ml-[10%] flex flex-col "> 


<p>
  This page has been open for {seconds} second{seconds === 1 ? '' : 's'}. 🔴 <span class=" text-red-400 font-bold"> Problem </span>
</p>

</div>
</div>