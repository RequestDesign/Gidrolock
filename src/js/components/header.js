import $ from 'jquery'


$(function () {
    const headerOpener = $('.header__main-c-btn'),
        headerModal = $('.header__mobile'),
        opened = '_opened'

    headerOpener.on('click', (ev) => {
        if (!ev.target.classList.contains(opened)) {
            ev.target.classList.add(opened)
            headerModal.fadeIn().addClass(opened)


        } else {
            ev.target.classList.remove(opened)
            headerModal.fadeOut().removeClass(opened)

        }
    })
    headerModal.on('click', (ev) => {
        if (ev.target.classList.contains('header__mobile-wrp')) {
            headerOpener.removeClass(opened)
            headerModal.fadeOut().removeClass(opened)

        }
    })

})