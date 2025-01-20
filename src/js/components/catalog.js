import $ from "jquery";
import noUiSlide from 'nouislider'
//
export default function initCatalogFilterOpener() {

    if (!document.querySelector('.catalog-current')) return
   // priceSlider()


    const opener = document.querySelector('.catalog-current__items-top-opener'),
        closer = document.querySelector('.catalog-current__filter-closer'),
        html = $('html'),
        target = $('.catalog-current__filter')


    opener.addEventListener('click', () => {

        html.addClass('lock')
        target.fadeIn()
        target.addClass('_opened')
    })
    closer.addEventListener('click', (ev) => {
      
        html.removeClass('lock')
        target.fadeOut()
        target.removeClass('_opened')
        ev.preventDefault()
        ev.stopPropagation()
    })
    window.addEventListener('resize', () => {
        if (!target.hasClass('_opened') && html.hasClass('lock')) {
            html.removeClass('lock')
        }
    })
    priceSlider()
}


function priceSlider() {

    const target = document.querySelector('.catalog-current__filter-scroll-list-price-slider'),
        min = $('#arrFilter_P1_MIN'),
        max = $('#arrFilter_P1_MAX')

    if (!target) return


    noUiSlide.create(target, {
        start: [Number(min.attr('min')), Number(max.attr('max'))],
        connect: true,
        step: 100,
        range: {
            'min': Number(min.attr('min')),
            'max': Number(max.attr('max'))
        },
    });

    target.noUiSlider.on('update', function (values, handle) {
        min.attr('value',Math.round(values[0]))
        max.attr('value',Math.round(values[1]))

    });

    min.on('input', (e) => {
        target.noUiSlider.set([e.target.value, max.val()])
    })
    max.on('input', (e) => {
        target.noUiSlider.set([min.val(), e.target.value])
    })
}