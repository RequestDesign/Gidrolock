/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 64:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(692);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
;// CONCATENATED MODULE: ./src/js/components/header.js

jquery_default()(function () {
  const headerOpener = jquery_default()('.header__main-c-btn'),
    headerModal = jquery_default()('.header__mobile'),
    opened = '_opened',
    html = document.querySelector('html');
  headerOpener.on('click', ev => {
    if (!ev.target.classList.contains(opened)) {
      ev.target.classList.add(opened);
      headerModal.fadeIn().addClass(opened);
      html.classList.add('lock');
    } else {
      ev.target.classList.remove(opened);
      headerModal.fadeOut().removeClass(opened);
      html.classList.remove('lock');
    }
  });
  headerModal.on('click', ev => {
    if (ev.target.classList.contains('header__mobile-wrp')) {
      headerOpener.removeClass(opened);
      headerModal.fadeOut().removeClass(opened);
      html.classList.remove('lock');
    }
  });
});
// EXTERNAL MODULE: ./node_modules/swiper/swiper.mjs + 1 modules
var swiper_swiper = __webpack_require__(236);
// EXTERNAL MODULE: ./node_modules/swiper/modules/index.mjs + 27 modules
var modules = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/js/utils/constants.js
const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    // где 375 это ширина мобильной версии макета
    return 100 / 375 * (0.05 * window.innerWidth) * rem;
  }
};
let bodyLockStatus = true;
let bodyUnlock = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  let body = document.querySelector('body');
  if (bodyLockStatus) {
    setTimeout(() => {
      body.style.paddingRight = '0px';
      // document.querySelector('header').style.paddingRight = '0px';
      document.documentElement.classList.remove('lock');
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
let bodyLock = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  let body = document.querySelector('body');
  if (bodyLockStatus) {
    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
    let scrollWith = getScrollbarWidth();
    body.style.paddingRight = `${scrollWith}px`;
    // document.querySelector('header').style.paddingRight = `${scrollWith}px`
    document.documentElement.classList.add('lock');
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};

// smooth behavior ============================================================
const _slideUp = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty('height') : null;
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      !showmore ? target.style.removeProperty('overflow') : null;
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // create event
      document.dispatchEvent(new CustomEvent('slideUpDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};
const _slideDown = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty('height') : null;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // create event
      document.dispatchEvent(new CustomEvent('slideDownDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};
const _slideToggle = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
;// CONCATENATED MODULE: ./src/js/utils/Form.js
class Form {
  /**
   *
   * @param {Element} formDomEl
   * @param {Function} submitFoo
   *
   */
  constructor(formDomEl, submitFoo) {
    this._form = formDomEl;
    this._form.setAttribute('novalidate', true);
    this._inputContainerSelector = 'form-input';
    this._inputErrorMsgSelector = 'input-text-error-msg';
    this._inputErrorSelector = '_error';
    this._inputPlaceholderSelector = 'input-text-placeholder';
    this.submitForm = submitFoo;
    this._inputs = this._form.querySelectorAll('input, textarea');
    this._inputsData = this._createInputData(this._inputs);
    this._passwordInput = Array.from(this._inputs).find(e => e.name === 'password');
    this._passwordRepeatInput = Array.from(this._inputs).find(e => e.name === 'passwordRepeat');
    this._submitBtn = this._form.querySelector('button[type="submit"]');
    /**
     * _inputsData: {[key: input.name] :{
     *                  value: any,
     *                  isValid: bool,
     *                  isRequired: bool
     *                  }
     *              }
     *  */

    /*  this._btnSubmit = this._form.querySelector('button[type="submit"]')
        this._btnSubmit.setAttribute('disabled', true) */

    this.initForm();
  }
  _inputHandler(inputTarget) {
    this._inputsData[inputTarget.name].value = inputTarget.value;
    this._validation(inputTarget);
    if (!inputTarget.placeholder) return;
    if (inputTarget.value) {
      inputTarget.closest('.' + this._inputContainerSelector).querySelector('.' + this._inputPlaceholderSelector).style.display = 'none';
    } else {
      inputTarget.closest('.' + this._inputContainerSelector).querySelector('.' + this._inputPlaceholderSelector).style.display = 'block';
    }
  }
  _validation(input) {
    //валидация инпутов

    switch (input.name) {
      case 'name':
        this._checkInputValid(input, /^[A-Za-zА-яЁё ]+$/, 'Допустим ввод только букв');
        break;
      case 'email':
        this._checkInputValid(input, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Поле должно быть в формате email@domain.com');
        break;
      case 'phone':
        this._checkInputValid(input, /^\+(7|375) \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Формат номера телефона +7 (888) 888-88-88');
        break;
      case 'password':
        this._checkInputValid(input, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Не корректный пароль');
        break;
      default:
        this._checkInputValid(input);
        break;
    }
  }
  _checkInputValid(target) {
    let regex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let regexMsg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'че то не так написал, исправляй';
    if (!this._inputsData[target.name].isRequired) return;
    const inputContainer = target.closest('.' + this._inputContainerSelector);
    const errorMsg = inputContainer.querySelector('.' + this._inputErrorMsgSelector);
    if (this._inputsData[target.name].isRequired && !this._inputsData[target.name].value) {
      //check requred
      console.log('required');
      inputContainer.classList.add(this._inputErrorSelector);
      errorMsg.textContent = 'Это поле обязательно.';
      this._inputsData[target.name].isValid = false;
    } else if (target.name === 'passwordRepeat') {
      this._validation(this._passwordInput);
      if (target.value !== this._inputsData.password.value) {
        inputContainer.classList.add(this._inputErrorSelector);
        errorMsg.textContent = 'Пароли не совпадают';
        this._inputsData[target.name].isValid = false;
      } else {
        this._inputsData[target.name].isValid = true;
        inputContainer.classList.remove(this._inputErrorSelector);
        errorMsg.textContent = ' ';
      }
    } else if (target.getAttribute('type') === 'checkbox' || target.getAttribute('type') === 'radio') {
      //check for checkbox and radio
      console.log('checkbox and radio');
      this._inputsData[target.name].isValid = !this._inputsData[target.name].isRequired ? true : target.checked;
      if (!target.checked) {
        inputContainer.classList.add(this._inputErrorSelector);
      } else {
        inputContainer.classList.remove(this._inputErrorSelector);
      }
    } else if (regex && !regex.test(target.value)) {
      //check regex
      inputContainer.classList.add(this._inputErrorSelector);
      errorMsg.textContent = regexMsg;
      this._inputsData[target.name].isValid = false;
    } else {
      //validation successfully
      console.log('successfully');
      this._inputsData[target.name].isValid = true;
      inputContainer.classList.remove(this._inputErrorSelector);
      errorMsg.textContent = ' ';
    }
  }
  _onSubmit(evt) {
    let whatsUp = true;
    for (const inp of this._inputs) {
      this._inputHandler(inp);
      if (!this._inputsData[inp.name].isValid) {
        whatsUp = false;
      }
    }
    if (!whatsUp) return;
    //сабмит
    this._form.dispatchEvent(new Event('submit'));
  }
  _createInputData(inputs) {
    let echo = {};
    for (const input of inputs) {
      input.setAttribute('autocomplete', 'off');
      if (input.placeholder) {
        const plcaholder = input.closest('.' + this._inputContainerSelector).querySelector('.' + this._inputPlaceholderSelector);
        plcaholder.textContent = input.placeholder;
        if (input.dataset.required) {
          plcaholder.setAttribute('data-end', ' *');
        }
      }
      if (input.name === 'password') {
        const passbtn = input.closest('.' + this._inputContainerSelector).querySelector('.input-text-password');
        if (passbtn) {
          passbtn.addEventListener('click', e => {
            e.preventDefault();
            this._passowrHide();
          });
        }
      }
      if (input.type === 'file') {
        input.addEventListener('change', e => {
          this._fileHandler(e);
        });
      }
      if (!echo[input.name]) {
        const isValid = !input.dataset.required,
          isRequired = !!input.dataset.required;
        let value = input.dataset.defaultv || input.checked || input.value || '';
        if (input.type === 'checkbox' || input.type === 'radio') {
          value = input.checked;
        }
        echo[input.name] = {
          value,
          isValid,
          isRequired
        };
      }
    }
    return echo;
  }
  _fileHandler(evt) {
    const inputContainer = evt.target.closest('.' + this._inputContainerSelector);
    if (evt.target.value) {
      inputContainer.classList.add('_active');
      inputContainer.querySelector('.input-file-got').querySelector('.input-file-text').textContent = evt.target.value.split('\\').slice(-1);
    } else {
      inputContainer.classList.remove('_active');
    }
  }
  _passowrHide() {
    if (this._passwordInput.type === 'text') {
      this._passwordInput.setAttribute('type', 'password');
      if (this._passwordRepeatInput) {
        this._passwordRepeatInput.setAttribute('type', 'password');
      }
    } else {
      this._passwordInput.setAttribute('type', 'text');
      if (this._passwordRepeatInput) {
        this._passwordRepeatInput.setAttribute('type', 'text');
      }
    }
  }
  initForm() {
    this._form.noValidate = true;
    this._inputs.forEach(el => {
      el.addEventListener('input', e => this._inputHandler(e.target));
      el.addEventListener('blur', e => this._inputHandler(e.target));
      el.addEventListener('change', e => this._inputHandler(e.target));
    });
    if (this._submitBtn) {
      this._submitBtn.setAttribute('type', 'button');
      this._submitBtn.addEventListener('click', e => {
        this._onSubmit(e);
      });
    }
  }
}
// EXTERNAL MODULE: ./node_modules/inputmask/dist/inputmask.js
var inputmask = __webpack_require__(660);
var inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);
;// CONCATENATED MODULE: ./src/js/utils/forms.js



const ru = new (inputmask_default())('+7 (999) 999-99-99', {
    placeholder: ''
  }),
  br = new (inputmask_default())('+375 (999) 999-99-99', {
    placeholder: ''
  }),
  kz = new (inputmask_default())('+7 (999) 999-99-99', {
    placeholder: ''
  }),
  phoneMap = {
    ru,
    br,
    kz
  };
function initForms() {
  const forms = document.querySelectorAll('.form');
  if (forms) {
    forms.forEach(e => {
      new Form(e, formSubmit);
      ru.mask(jquery_default()(e).find('input[name="phone"]'));
      changeInputMask(e);
    });
  }
}
function formSubmit(inputData) {
  console.log(inputData);
}
function changeInputMask(form) {
  jquery_default()(form).find('.input-phone__select-list-btn').on('click', e => {
    e.preventDefault();
    const {
        mask
      } = e.target.dataset,
      parent = jquery_default()(e.target.closest('.input-phone')),
      imageLink = e.target.children[0].getAttribute('src');
    /**
        * 1. менает изображение 
        * 2. применяет маску из хэша
        * 3. закрывается
        */
    jquery_default()('.input-phone__select-current-flag').attr('src', imageLink);
    phoneMap[mask].mask(parent.find('input[name="phone"]'));
    parent.find('.drop-down-target').trigger('click');
  });
}
;// CONCATENATED MODULE: ./src/js/utils/select.js
const inputChange = new Event('input');
function initSelect() {
  /**
   * кастомный селект хранящий значение в инпуте
   * 1. присваивание нового значения инпуту на прямую
   * (значение для инпута берется из data-value или textContent кнопки)
   * 
   * 2. тригер input ивента на инпуте для тригера валидации формы и записи новго значения
   * 
   * 3-4. переключение дизейбла у кнопок
   * 
   * 5. тригер дропдауна для закрытия
   */

  const selects = document.querySelectorAll('.select');
  if (!selects) return;
  selects.forEach(select => {
    const options = select.querySelectorAll('.select__items-list-e');
    options.forEach(option => {
      option.addEventListener('click', ev => {
        const input = select.querySelector('.select__target-input');
        input.value = ev.target.dataset.value || ev.target.textContent;
        input.dispatchEvent(inputChange);
        options.forEach(btn => btn.removeAttribute('disabled'));
        ev.target.setAttribute('disabled', 'true');
        select.querySelector('.drop-down-target').click();
      });
    });
  });
}
;// CONCATENATED MODULE: ./src/js/components/catalog.js

//import noUiSlide from 'nouislider'
function initCatalogFilterOpener() {
  if (!document.querySelector('.catalog-current')) return;
  // priceSlider()

  const opener = document.querySelector('.catalog-current__items-top-opener'),
    closer = document.querySelector('.catalog-current__filter-closer'),
    html = jquery_default()('html'),
    target = jquery_default()('.catalog-current__filter');
  opener.addEventListener('click', () => {
    html.addClass('lock');
    target.fadeIn();
    target.addClass('_opened');
  });
  closer.addEventListener('click', () => {
    html.removeClass('lock');
    target.fadeOut();
    target.removeClass('_opened');
  });
  window.addEventListener('resize', () => {
    if (!target.hasClass('_opened') && html.hasClass('lock')) {
      html.removeClass('lock');
    }
  });
}
function priceSlider() {
  const target = document.querySelector('.catalog-current__filter-scroll-list-price-slider'),
    min = $('#priceInputMin'),
    max = $('#priceInputMax');
  if (!target) return;
  min.attr('min', 0);
  max.attr('max', 100);
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
    min.attr('value', values[0]);
    max.attr('value', values[1]);
  });
  min.on('input', e => {
    target.noUiSlider.set([e.target.value, max.val()]);
  });
  max.on('input', e => {
    target.noUiSlider.set([min.val(), e.target.value]);
  });
}
;// CONCATENATED MODULE: ./src/js/components/cardView.js



function initCardPage() {
  initCatalogImgSwiper();
  descriptionSlider();
}
function initCatalogImgSwiper() {
  const topSlider = document.querySelector('.card-page-top__c-img-top'),
    bottomSlider = document.querySelector('.card-page-top__c-img-bottom');
  if (!topSlider || !bottomSlider) return;
  const topSwiper = new swiper_swiper/* default */.A(topSlider, {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: rem(3),
    allowTouchMove: false,
    preventInteractionOnTransition: true,
    touchMoveStopPropagation: true
  });
  const bottomSwiper = new swiper_swiper/* default */.A(bottomSlider, {
    modules: [modules/* Navigation */.Vx, modules/* Pagination */.dK],
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: rem(1),
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 1
      }
    },
    pagination: {
      el: '.card-page-top__c-img-bottom-pagination'
    },
    navigation: {
      prevEl: '.card-page-top__c-img-bottom-prev',
      nextEl: '.card-page-top__c-img-bottom-next'
    }
  });
  bottomSlider.querySelectorAll('.card-page-top__c-img-bottom-slide').forEach((e, i) => {
    e.addEventListener('click', () => {
      topSwiper.slideTo(i);
    });
  });
}
function descriptionSlider() {
  const target = document.querySelector('.card-page-description__c-slider');
  const btns = document.querySelectorAll('.card-page-description__c-nav-btn');
  if (!target || !btns) return;
  const swiper = new swiper_swiper/* default */.A(target, {
    loop: false,
    slidesPerView: 1,
    spaceBetween: rem(3),
    allowTouchMove: false,
    preventInteractionOnTransition: true,
    touchMoveStopPropagation: true
  });
  btns.forEach((e, i) => {
    e.addEventListener('click', btn => {
      swiper.slideTo(i);
      btns.forEach(toggler => toggler.classList.remove('_opened'));
      btn.target.classList.add('_opened');
    });
  });
}
;// CONCATENATED MODULE: ./src/js/components/feedback.js




function initFeedBack() {
  reviewOpener();
  swiper();
}
function swiper() {
  const swiper = document.querySelector('.feedback__c-slider');
  if (!swiper) return;
  new swiper_swiper/* default */.A(swiper, {
    modules: [modules/* Navigation */.Vx, modules/* Pagination */.dK],
    loop: false,
    allowSlidePrev: 1,
    slidesPerGroup: 1,
    spaceBetween: rem(3),
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1
      }
    },
    navigation: {
      prevEl: '.feedback__c-slider-prev',
      nextEl: '.feedback__c-slider-next'
    },
    pagination: {
      el: '.feedback-pagination'
    }
  });
}
function reviewOpener() {
  if (!document.querySelector('.feedback__c-slider-e-body')) return;
  const container = jquery_default()('.feedback__c-slider'),
    textContainerSelector = '.feedback__c-slider-e-body',
    textSelector = '.feedback__c-slider-e-body-txt',
    shortenedTextSelecor = '_closed',
    maxHeight = 150;
  document.querySelectorAll(textSelector).forEach(e => {
    if (e.offsetHeight > maxHeight) {
      e = jquery_default()(e);
      e.addClass(shortenedTextSelecor);
      console.log(e.closest(textContainerSelector));
      e.closest(textContainerSelector).append('<button class="feedback__c-slider-e-body-opener btn-nav btn-nav_ul txt18">Развернуть</button>');
    }
  });
  container.on('click', ev => {
    if (!ev.target.classList.contains('feedback__c-slider-e-body-opener')) return;
    const parent = ev.target.closest(textContainerSelector);
    if (!ev.target.closest(textContainerSelector).classList.contains('_opened')) {
      parent.classList.add('_opened');
      parent.querySelector(textSelector).classList.remove(shortenedTextSelecor);
      ev.target.textContent = 'свернуть';
    } else {
      parent.classList.remove('_opened');
      parent.querySelector(textSelector).classList.add(shortenedTextSelecor);
      ev.target.textContent = 'развернуть';
    }
  });
}
;// CONCATENATED MODULE: ./src/js/components/signUp.js
function initSignUp() {
  if (!document.querySelector('.sign-up')) return;
  const btns = document.querySelectorAll('.sign-form-switcher'),
    slider = document.querySelector('.sign-up__c-slider');
  btns.forEach(e => {
    e.addEventListener('change', e => {
      slider.style.transform = `translate(calc(-${e.target.dataset.slideto}00% - ${50 * e.target.dataset.slideto}px), 0)`;
    });
  });
}
;// CONCATENATED MODULE: ./src/js/components/selection.js
function initSelection() {
  const container = document.querySelector('.selection__c');
  if (!container) return;
  let stateCount = 1;
  const btn = container.querySelector('.selection__c-btn'),
    domCounter = container.querySelector('.selection__c-top-count'),
    addItemBtns = container.querySelectorAll('.selection-add-item'),
    lists = container.querySelectorAll('.item-list');
  btn.addEventListener('click', () => {
    stateCount++;
    container.setAttribute('data-step', stateCount);
    domCounter.textContent = stateCount;
    if (stateCount > 3) {
      btn.textContent = 'Добавить в корзину';
    }
  });
  addItemBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const container = e.currentTarget.closest('div').querySelector('ul'),
        item = container.querySelectorAll('li'),
        newitem = item[0].cloneNode(true),
        counter = newitem.querySelector('.item-count');
      newitem.classList.remove('item-origin');
      if (counter) {
        counter.textContent = item.length + 1;
      }
      container.appendChild(newitem);
    });
  });
  lists.forEach(e => {
    e.addEventListener('click', t => {
      t = t.target;
      if (t.classList.contains('item-selfremove')) {
        t.closest('li').remove();
      }
    });
  });
}
;// CONCATENATED MODULE: ./src/js/utils/Switcher.js
class Switcher {
  /**
   * 
   * @param {string | Element } container 
   * @param {number} initstate 
   */
  constructor(container) {
    let initstate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this._container = typeof container == 'string' ? document.querySelector(container) : container;
    this._initState = initstate;
    this._btnSelector = '.switcher-btn';
    this._slideSelector = '.switcher-slide';
    this._datasetBtn = 'switchto';
    this._datasetSlide = 'switchslide';
    this._btns = this._initBtns(this._container);
    this._slides = this._initSlides(this._container);
  }
  _initBtns(container) {
    const list = container.querySelectorAll(this._btnSelector);
    list.forEach((e, i) => {
      e.setAttribute('data-' + this._datasetBtn, i);
      if (e.tagName == 'INPUT') {
        e.addEventListener('change', ev => {
          e.setAttribute('checked', true);
          this._switcher(ev);
        });
      } else {
        e.addEventListener('click', ev => {
          ev.preventDefault();
          this._switcher(ev);
        });
      }
      if (this._initState !== null && i === this._initState) {
        e.classList.add('_opened');
      }
    });
    return list;
  }
  _initSlides(container) {
    const list = container.querySelectorAll(this._slideSelector);
    list.forEach((e, i) => {
      e.setAttribute('data-' + this._datasetSlide, i);
      if (this._initState !== null && i !== this._initState) {
        e.style.display = 'none';
      }
    });
    return list;
  }
  _switcher(e) {
    if (e.currentTarget.classList.contains('_opened')) return;
    e = e.currentTarget;
    this._slides.forEach(slide => {
      if (slide.dataset[this._datasetSlide] == e.dataset[this._datasetBtn]) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
    this._btns.forEach(btn => {
      if (btn.dataset[this._datasetBtn] == e.dataset[this._datasetBtn]) {
        btn.classList.add('_opened');
      } else if (btn.classList.contains('_opened')) {
        btn.classList.remove('_opened');
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/dev/zatz.js













/*  */

jquery_default()(function () {
  dropDowns();
  initForms();
  initSwipers();
  initSelect();
  initMobileNav();
  initCatalogFilterOpener();
  initCardPage();
  initFeedBack();
  initSignUp();
  modalsHandler();
  initSwichers();
  initSelection();
  modalMobileCode();
  initShowHelp();
});
function dropDowns() {
  jquery_default()(document).on('click', e => {
    if (e.target.classList.contains('drop-down-target')) {
      e.preventDefault();
      e.target.classList.toggle('_opened');
      e.target.closest('.drop-down-container').classList.toggle('_opened');
    }
  });
}
function initSwipers() {
  const complects = document.querySelectorAll('.complects__c-slider');
  if (complects) {
    complects.forEach(e => {
      new swiper_swiper/* default */.A(e, {
        modules: [modules/* Navigation */.Vx, modules/* Pagination */.dK],
        loop: false,
        slidesPerView: 1.2,
        centeredSlides: true,
        slidesPerGroup: 1,
        spaceBetween: rem(3),
        breakpoints: {
          768: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            centeredSlides: false
          }
        },
        pagination: {
          el: e.querySelector('.complects__c-slider-pagination')
        },
        navigation: {
          prevEl: e.querySelector('.complects__c-slider-prev'),
          nextEl: e.querySelector('.complects__c-slider-next')
        }
      });
    });
  }
  const whyChoice = document.querySelector('.why-choice__c-slider');
  if (whyChoice) {
    new swiper_swiper/* default */.A(whyChoice, {
      modules: [modules/* Pagination */.dK, modules/* Grid */.xA],
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(3),
      grid: {
        rows: 1
      },
      breakpoints: {
        768: {
          slidesPerView: 5,
          slidesPerGroup: 2,
          grid: {
            rows: 2,
            fill: 'row'
          }
        }
      },
      pagination: {
        el: '.why-choice__c-slider-pagination'
      }
    });
  }
  const categories = document.querySelector('.ctagories__c-slider');
  if (categories) {
    new swiper_swiper/* default */.A(categories, {
      modules: [modules/* Pagination */.dK, modules/* Grid */.xA],
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(3),
      grid: {
        rows: 1
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          slidesPerGroup: 2,
          grid: {
            rows: 2,
            fill: 'row'
          }
        }
      },
      pagination: {
        el: '.ctagories__c-slide-pagination'
      }
    });
  }
  const spceialOffer = document.querySelector('.special-offer__c-slider');
  if (spceialOffer) {
    new swiper_swiper/* default */.A(spceialOffer, {
      modules: [modules/* Navigation */.Vx, modules/* Pagination */.dK],
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(3),
      breakpoints: {
        768: {
          slidesPerView: 5,
          slidesPerGroup: 1
        }
      },
      pagination: {
        el: '.special-offer__c-slider-pagination'
      },
      navigation: {
        prevEl: '.special-offer__c-slider-prev',
        nextEl: '.special-offer__c-slider-next'
      }
    });
  }
  const heading = document.querySelector('.main-heading__c-main-slider');
  if (heading) {
    new swiper_swiper/* default */.A(heading, {
      modules: [modules/* Pagination */.dK, modules/* Autoplay */.Ij],
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(3),
      grabCursor: false,
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.header-pagination',
        clickable: true
      }
    });
  }
  const defenseWork = document.querySelector('.defense-work__c-slider');
  if (defenseWork) {
    new swiper_swiper/* default */.A(defenseWork, {
      modules: [modules/* Pagination */.dK],
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(3),
      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 1
        }
      },
      pagination: {
        el: '.defense-work-pagination'
      }
    });
  }
  const catalogHead = document.querySelector('.catalog-head-swiper');
  if (catalogHead) {
    new swiper_swiper/* default */.A(catalogHead, {
      modules: [modules/* Pagination */.dK],
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(3),
      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 1
        }
      },
      pagination: {
        el: '.catalog-head-pagination'
      }
    });
  }
  const catalogDefense = document.querySelector('.catalog-defense__c-right');
  if (catalogDefense) {
    new swiper_swiper/* default */.A(catalogDefense, {
      modules: [modules/* Pagination */.dK, modules/* Grid */.xA],
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(3),
      grid: {
        rows: 1
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          grid: {
            rows: 2,
            fill: 'row'
          }
        }
      },
      pagination: {
        el: '.catalog-defense-pagination'
      }
    });
  }
  const categoryFs = document.querySelectorAll('.category-fs-slider');
  if (categoryFs) {
    categoryFs.forEach(el => {
      new swiper_swiper/* default */.A(el, {
        modules: [modules/* Pagination */.dK],
        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: rem(3),
        breakpoints: {
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1
          }
        },
        pagination: {
          el: el.closest('.category-fs').querySelector('.category-fs-pagination')
        }
      });
    });
  }
  const choiceSystem = document.querySelector('.choice-system__c-left-slider');
  if (choiceSystem) {
    const swiper = new swiper_swiper/* default */.A(choiceSystem, {
      modules: [modules/* Pagination */.dK],
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(3),
      allowTouchMove: false,
      preventInteractionOnTransition: true,
      touchMoveStopPropagation: true,
      pagination: {
        el: '.choice-system__c-left-top-pagination',
        type: 'fraction'
      }
    });
    choiceSystem.querySelectorAll('.choice-system__c-left-slider-form-e-next').forEach(el => {
      el.addEventListener('click', () => {
        swiper.slideNext();
      });
    });
  }
  const newsDeatail = document.querySelectorAll('.news-detail-slider');
  if (newsDeatail) {
    newsDeatail.forEach(e => {
      new swiper_swiper/* default */.A(e.querySelector('.swiper'), {
        modules: [modules/* Navigation */.Vx, modules/* Pagination */.dK],
        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: rem(3),
        breakpoints: {
          768: {
            slidesPerView: 3
          }
        },
        navigation: {
          prevEl: e.querySelector('.btn-swiper_left'),
          nextEl: e.querySelector('.btn-swiper_right')
        },
        pagination: {
          el: e.querySelector('.slider-pagination')
        }
      });
    });
  }
}
function initMobileNav() {
  const target = document.querySelector('.mobile-nav');
  if (!target) return;
  let scrollStart = 0;
  document.addEventListener('scroll', () => {
    if (window.scrollY > scrollStart + 50) {
      target.classList.add('_opened');
      scrollStart = window.scrollY;
    } else if (window.scrollY < scrollStart - 50) {
      target.classList.remove('_opened');
      scrollStart = window.scrollY;
    }
  });
}
function modalsHandler() {
  const modalOpeners = jquery_default()('.modal-opener'),
    modalClosers = jquery_default()('.modal-closer'),
    html = jquery_default()('html');
  if (!modalOpeners || !modalClosers) return;
  modalOpeners.on('click', ev => {
    const {
      modal
    } = ev.currentTarget.dataset;
    jquery_default()(`.modal-${modal}`).fadeIn().addClass('_opened');
    html.addClass('lock');
  });
  modalClosers.on('click', ev => {
    const {
      classList
    } = ev.target;
    if (!classList.contains('modal-closer')) return;
    if (classList.contains('modal')) {
      jquery_default()(ev.target).fadeOut().removeClass('_opened');
    } else {
      jquery_default()(ev.target.closest('.modal')).fadeOut().removeClass('_opened');
    }
    html.removeClass('lock');
  });
}
function modalMobileCode() {
  const container = jquery_default()('.input-4x-code');
  if (!container) return;
  const inputs = container.find('input[name="code"]'),
    errMsg = container.find('.input-text-error-msg'),
    valueInput = container.find('input[name="pincode"]');
  container.on('submit', e => {
    e.preventDefault();
  });
  inputs.on('keydown', e => {
    const val = e.key;
    if (val == val.replace(/[0-9]/, '')) {
      jquery_default()(e.currentTarget).val('');
      return false;
    }
    jquery_default()(e.currentTarget).val('');
    let res = Array.from(valueInput.val());
    res[e.target.dataset.index] = val;
    res = res.join('');
    valueInput.val(res);
  });
  inputs.on('keyup', function (e) {
    let val = jquery_default()(this).val();
    // Ввод только цифр
    if (val == val.replace(/[0-9]/, '')) {
      jquery_default()(this).val('');
      return false;
    }
    // Передача фокуса следующему innput
    if (e.currentTarget.dataset.index < 3) {
      inputs.eq(inputs.index(this) + 1).focus();
    }
    if (valueInput.val() == valueInput.val().replace(/\*/g, '')) {
      container.trigger('submit');
    }
  });
}
function initSwichers() {
  const basketDelivery = document.querySelector('.switcher-delivery');
  if (basketDelivery) {
    new Switcher(basketDelivery, 0);
  }
  const userdata = document.querySelector('.switcher-userdata');
  if (userdata) {
    new Switcher(userdata, 0);
  }
  const modalCdek = document.querySelector('.modal-cdek');
  if (modalCdek) {
    new Switcher(modalCdek, 0);
  }
  const supportList = document.querySelector('.support-list');
  if (supportList) {
    new Switcher(supportList, 0);
  }
  const userPage = document.querySelector('.user-page');
  if (userPage) {
    new Switcher(userPage, 0);
  }
  const modalSign = document.querySelector('.modal-sign-reset-switcher');
  if (modalSign) {
    new Switcher(modalSign, 0);
  }
}
function initShowHelp() {
  const targets = document.querySelectorAll('.show-help');
  targets.forEach(t => {
    if (!jquery_default()(t).find('.show-help-text')) return;
    t.addEventListener('mouseover', e => {
      jquery_default()(e.currentTarget).find('.show-help-text').fadeIn();
    });
    t.addEventListener('mouseleave', e => {
      jquery_default()(e.currentTarget).find('.show-help-text').fadeOut();
    });
  });
}
;// CONCATENATED MODULE: ./src/index.js




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_example"] = self["webpackChunkwebpack_example"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [979,881,749], function() { return __webpack_require__(64); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;