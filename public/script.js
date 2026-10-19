async function goodbye_click(){
   const response = await fetch("/goodbye", { method: "POST" });
   const html = await response.text();
   document.body.innerHTML = html;
}