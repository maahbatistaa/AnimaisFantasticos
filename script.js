const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = links.offsetWidth;
    const linkHeight = links.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
})