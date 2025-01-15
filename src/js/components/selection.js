export default function initSelection() {
    const container = document.querySelector('.selection__c')
    if (!container) return

    let stateCount = 1
    const btn = container.querySelector('.selection__c-btn'),
        domCounter = container.querySelector('.selection__c-top-count'),
        addItemBtns = container.querySelectorAll('.selection-add-item'),
        lists = container.querySelectorAll('.item-list'),
        goBack = container.querySelector('.selection__c-footer-back')


    goBack.addEventListener('click', () => {
        stateCount = 3
        container.setAttribute('data-step', stateCount)
        domCounter.textContent = stateCount
        btn.textContent = 'Продолжить'
    })
    btn.addEventListener('click', () => {
        stateCount++
        container.setAttribute('data-step', stateCount)
        domCounter.textContent = stateCount
        if (stateCount > 3) {
            btn.textContent = 'Добавить в корзину'
        }
    })

    addItemBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {

            const container = e.currentTarget.closest('div').querySelector('ul'),
                item = container.querySelectorAll('li'),
                newitem = item[0].cloneNode(true),
                counter = newitem.querySelector('.item-count')

            newitem.classList.remove('item-origin')

            if (counter) {
                counter.textContent = item.length + 1
            }

            container.appendChild(newitem)

        })
    })

    lists.forEach(e => {
        e.addEventListener('click', (t) => {
            t = t.target
            if (t.classList.contains('item-selfremove')) {
                t.closest('li').remove()
            }
        })
    })



}