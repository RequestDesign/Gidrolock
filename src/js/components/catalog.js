import $ from "jquery";
export default function initCatalogFilterOpener() {

    if (!document.querySelector('.catalog-current')) return


    const opener = document.querySelector('.catalog-current__items-top-opener'),
        closer = document.querySelector('.catalog-current__filter-closer'),
        html = $('html'),
        target = $('.catalog-current__filter')


    opener.addEventListener('click', () => {

        html.addClass('lock')
        target.fadeIn()
        target.addClass('_opened')
    })
    closer.addEventListener('click', () => {
        html.removeClass('lock')
        target.fadeOut()
        target.removeClass('_opened')
    })
    window.addEventListener('resize', () => {
     if(!target.hasClass('_opened') && html.hasClass('lock')){
        html.removeClass('lock')
     }
    })
}