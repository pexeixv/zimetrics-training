const $ = (q, e=document) => e.querySelector(q)
const $$ = (q, e=document) => e.querySelectorAll(q)

const scrollUp = $('#scroll_up')


window.addEventListener('scroll', e=>{
    (window.scrollY > 600) ? scrollUp.classList.add('scroll_up-visible') : scrollUp.classList.remove('scroll_up-visible') 
})

const aside = $('aside')
const navMenuIcons = $$('#nav_menu i')

const toggleAside= ()=>{
    aside.classList.toggle('aside-shown')
    navMenuIcons.forEach(icon=>icon.classList.toggle('hide'))
}