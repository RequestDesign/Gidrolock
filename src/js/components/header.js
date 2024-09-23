import $ from 'jquery'


$(function () {
    const headerOpener = $('.header__main-c-btn'),
        headerModal = $('.header__mobile'),
        opened = '_opened',
        html = document.querySelector('html')
       

    headerOpener.on('click', (ev) => {
        if (!ev.target.classList.contains(opened)) {
            ev.target.classList.add(opened)
            headerModal.fadeIn().addClass(opened)
            html.classList.add('lock')

        } else {
            ev.target.classList.remove(opened)
            headerModal.fadeOut().removeClass(opened)
            html.classList.remove('lock')
        }
    })
    headerModal.on('click', (ev) => {
        if (ev.target.classList.contains('header__mobile-wrp')) {
            headerOpener.removeClass(opened)
            headerModal.fadeOut().removeClass(opened)
            html.classList.remove('lock')
        }
    })

})