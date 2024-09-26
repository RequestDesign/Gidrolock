import $ from 'jquery'


export default function initUserPage() {
    if (!document.querySelector('.user-page')) return

    const btns = $('.user-page__left-btn'),
        rightAside = $('.user-page__right'),
        personal = $('#userPersonal'),
        history = $('#userPageHistory'),
        historyPlaceholder = $('#userPageHistoryPlaceholder'),
        favorite = $('#userPageFavorite'),
        favoritePlaceholder = $('#userPageFavoritePlaceholder')



    btns.on('click', (e) => {
        if(e.currentTarget.classList.contains('_opened')) return

        const { open } = e.currentTarget.dataset
        closeAll()
        e.currentTarget.classList.add('_opened')
        switch (open) {
            case 'personal':
                personal.show()
                rightAside.show()

                break;
            case 'history':
                history.show()
                historyPlaceholder.show()
                rightAside.hide()

                break;
            case 'favorite':
                favorite.show()
                favoritePlaceholder.show()
                rightAside.hide()

                break;

            default:
                break;
        }
    })

    function closeAll() {
        personal.hide()
        history.hide()
        favorite.hide()
        historyPlaceholder.hide()
        favoritePlaceholder.hide()
        btns.removeClass('_opened')
    }



}