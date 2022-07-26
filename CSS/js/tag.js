const colors = {
    p: '#f44336',
    div: '#9c27b0',
    span: '#2196f3',
    section: '#009688',
    ul: '#4caf50',
    ol: '#ff9800',
    header: '#ffeb3b',
    nav: '#795548',
    main: '#607d8b',
    footer: '#e91e63',
    form: '#3f51b5',
    body: '#673ab7',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao;
    }
}

document.querySelectorAll('.tag').forEach(box =>{
    const tagName = box.tagName.toLowerCase()
    box.style.borderColor =colors.get(tagName);

    if(!box.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor =colors.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.firstChild)
    }
})    