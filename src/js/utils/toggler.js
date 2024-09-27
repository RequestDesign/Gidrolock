
export class Toggler {
    constructor(inputTargets, toggleTargets, toggleClass) {
        this._inputs = document.querySelectorAll(inputTargets)
        this._toggleTargets = document.querySelectorAll(toggleTargets)
        this._selector = toggleClass
        this._init()

    }

    _init() {

        if (!this._inputs || !this._toggleTargets || !this._selector) return


        this._inputs.forEach((btn) => {
            btn.addEventListener('click', () => {
                this._toggleTargets.forEach((e) => e.classList.toggle(this._selector))
            })
        })
    }

}