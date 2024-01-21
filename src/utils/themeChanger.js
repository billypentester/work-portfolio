const themeChanger = (theme) => {
    const root = document.querySelector('html');
    root.setAttribute('data-theme', theme);
}

export default themeChanger;