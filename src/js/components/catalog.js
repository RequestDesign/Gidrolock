import $ from "jquery";
import noUiSlide from 'nouislider'
export default function initCatalogFilterOpener() {

    if (!document.querySelector('.catalog-current')) return
    priceSlider()


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
        if (!target.hasClass('_opened') && html.hasClass('lock')) {
            html.removeClass('lock')
        }
    })
}


function priceSlider() {

    const target = document.querySelector('.catalog-current__filter-scroll-list-price-slider'),
        min = $('#priceInputMin'),
        max = $('#priceInputMax')

    if (!target) return

    min.attr('min', 0)
    max.attr('max', 100)

    noUiSlide.create(target, {
        start: [20, 80],
        connect: true,
        step: 10,
        range: {
            'min': 0,
            'max': 100
        }
    });

    target.noUiSlider.on('update', function (values, handle) {
        min.attr('value',values[0])
        max.attr('value',values[1])

    });

    min.on('input', (e) => {
        target.noUiSlider.set([e.target.value, max.val()])
    })
    max.on('input', (e) => {
        target.noUiSlider.set([min.val(), e.target.value])
    })
}