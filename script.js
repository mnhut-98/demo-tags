let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)



let tabItem = $$('.tab-item')
let tabPane = $$(".tab-pane")
let tabActive = $('.tab-item.active')
let line = $(".tabs .line")



line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabItem.forEach((element,index) => {

    element.onclick = function () {
        $(".tab-item.active").classList.remove("active")
        $(".tab-pane.active").classList.remove("active")

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active")
        tabPane[index].classList.add('active')

    }
});
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");

// const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-pane.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });
