// document.getElementById("navbar").style.backgroundColor = "blue";
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    // document.getElementById("title").style.fontSize = "35px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    // document.getElementById("title").style.fontSize = "50px";
  }
}

const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document
      .querySelector(tab.dataset.tabValue);

    tabInfos.forEach(tabInfo => {
      tabInfo.classList.remove('active')
    })
    target.classList.add('active');
  })
})