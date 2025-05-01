function toggleMode(){
    const body = document.body
    if(body.classList.contains('light')){
        body.classList.remove('light')
        body.classList.add('dark')
        
    }
    else{
        body.classList.remove('dark')
        body.classList.add('light')
        document.documentElement.style.setProperty('--text-color', '#black');
        document.documentElement.style.setProperty('--bg-url', "url(./assets/bg-mobile-light.jpg)");
        document.documentElement.style.setProperty('--stroke-color', ' rgba(255, 0, 0, 0.5)');
        document.documentElement.style.setProperty('--surface-color', 'rgba(255, 0, 0, 0.1) ');
        document.documentElement.style.setProperty('--surface-color-hover', 'rgba(255, 0, 0, 0.2)');
        document.documentElement.style.setProperty('--highlight-color', 'rgba(255, 0, 0, 0.5)');
        document.documentElement.style.setProperty('--switch-bg-url', "url(./assets/Sun.svg)"); 
    }
}