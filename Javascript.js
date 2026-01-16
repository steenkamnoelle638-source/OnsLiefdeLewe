/* ================= HEARTS ================= */
(function(){
  const bg = document.getElementById("heartsBg");
  if(!bg) return;

  const hearts = ["💗","💕","💖","❤️","💝"];
  for(let i=0;i<12;i++){
    const h = document.createElement("div");
    h.className = "heart-f";
    h.innerText = hearts[i % hearts.length];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 14 + Math.random() * 20 + "px";
    h.style.animationDuration = 6 + Math.random() * 6 + "s";
    bg.appendChild(h);
  }
})();

/* ================= SECRET MESSAGE ================= */
	(function () {
	  const box = document.getElementById("secretBox");
	  const msg = document.getElementById("secretMessage");
	
	  if (!box || !msg) return;
	
	  box.addEventListener("click", toggle);
	  box.addEventListener("keydown", e => {
	    if (e.key === "Enter" || e.key === " ") {
	      e.preventDefault();
	      toggle();
	    }
	  });
	
	  function toggle() {
	    const open = msg.style.display === "block";
	    msg.style.display = open ? "none" : "block";
	    box.setAttribute("aria-pressed", String(!open));
	  }
	})();
	
	/* ================= CARD LOGIC ================= */
	function initBook(id){
	  const book = document.getElementById(id);
	  if(!book) return;
	
	  let open = false;
	
	  book.addEventListener("click",()=>{
	    open = !open;
	    book.classList.toggle("open", open);
	  });
	
	  let startX = null;
	  book.addEventListener("touchstart",e=>{
	    startX = e.touches[0].clientX;
	  },{passive:true});
	
	  book.addEventListener("touchend",e=>{
	    if(startX === null) return;
	    const diff = e.changedTouches[0].clientX - startX;
	    if(Math.abs(diff) > 40){
	      open = !open;
	      book.classList.toggle("open", open);
	    }
	    startX = null;
	  });
	}
	
	initBook("bookN");
	initBook("bookK");

	/* ================= SCROLL ================= */
	function toggleScroll(el){
	  el.classList.toggle("open");
	}
