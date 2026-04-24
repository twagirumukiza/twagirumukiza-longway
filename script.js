document.addEventListener("DOMContentLoaded",()=>{
  const modal=document.getElementById("imageModal");
  if(modal){
    const modalImg=modal.querySelector("img");
    const closeBtn=modal.querySelector(".modal-close");
    document.querySelectorAll("[data-popup]").forEach(img=>{
      img.addEventListener("click",()=>{
        modalImg.src=img.getAttribute("src");
        modalImg.alt=img.getAttribute("alt")||"";
        modal.classList.add("open");
        document.body.style.overflow="hidden";
      });
    });
    const closeModal=()=>{modal.classList.remove("open");document.body.style.overflow="";};
    closeBtn?.addEventListener("click",closeModal);
    modal.addEventListener("click",(e)=>{if(e.target===modal) closeModal();});
    document.addEventListener("keydown",(e)=>{if(e.key==="Escape" && modal.classList.contains("open")) closeModal();});
  }
  const burger=document.querySelector(".burger");
  const menu=document.querySelector(".menu");
  if(burger&&menu){
    burger.addEventListener("click",()=>{
      menu.classList.toggle("open");
      burger.setAttribute("aria-expanded",menu.classList.contains("open")?"true":"false");
    });
    menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
  }
});