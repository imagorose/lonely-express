// code source: https://www.codeply.com/p/BmyKLq8RTV

// Set theme to the user's preferred color scheme
function updateTheme() {
    const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
      "dark" :
      "light";
    document.querySelector("html").setAttribute("data-bs-theme", colorMode);
  }
  
  // Set theme on load
  updateTheme()
  
  // Update theme when the preferred scheme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)

document.getElementById('darkSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
})