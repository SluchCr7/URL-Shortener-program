let btn_input = document.getElementById("btn_input");
let input = document.getElementById("input");
let errorMess = document.getElementById("error")
let ShortLinks = document.getElementById("ShortLinks");
let inputCont = document.getElementById("inputCont")
let copyBtn = document.getElementById("copy")
let linkShort = document.getElementById("linkShort")
let url_link = document.getElementById("url_link")

btn_input.addEventListener("click", async () => {
  const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(input.value)}`)
  if (res.ok) {
    const data = await res.text();
    ShortLinks.innerHTML += `
    
        <div class="link_short bg-white p-[20px] rounded-xl w-[80%] flex items-center justify-between ">
          <div class="Link">
            <span class="url text-xl text-black">${input.value}</span>
          </div>
          <div class="copy flex items-center gap-5">
            <input type="text" disabled id="linkShort" placeholder="https://relink/url" value=${data}>
            <button id="copyBtn">Copy</button>
          </div>
        </div>
    `
  }
  else if (input.value == "") {
    errorMess.innerHTML = "Enter Your URL"
  }
  else {
    errorMess.innerHTML = "Enter Valid URL"
  }
})

let MenuBars = document.getElementById("MenuBars")
let Menu = document.getElementById("Menu")

MenuBars.addEventListener("click", () => {
  Menu.classList.toggle("none")
})

