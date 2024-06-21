import { onDestroy } from "svelte";

export function onInterval(callback:any, intervalTime:number){
  const interval = setInterval(callback, intervalTime);
  onDestroy(() => {
    clearInterval(interval);
  });
}