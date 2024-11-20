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
      this._passwordRepeatInput.setAttribute('type', 'password');
    } else {
      this._passwordInput.setAttribute('type', 'text');
      this._passwordRepeatInput.setAttribute('type', 'text');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL2Zvcm1zLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvY29tcG9uZW50cy9jYXJkVmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvY29tcG9uZW50cy9mZWVkYmFjay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvY29tcG9uZW50cy9zaWduVXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9Td2l0Y2hlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvZGV2L3phdHouanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGhlYWRlck9wZW5lciA9ICQoJy5oZWFkZXJfX21haW4tYy1idG4nKSxcclxuICAgICAgICBoZWFkZXJNb2RhbCA9ICQoJy5oZWFkZXJfX21vYmlsZScpLFxyXG4gICAgICAgIG9wZW5lZCA9ICdfb3BlbmVkJyxcclxuICAgICAgICBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXHJcbiAgICAgICBcclxuXHJcbiAgICBoZWFkZXJPcGVuZXIub24oJ2NsaWNrJywgKGV2KSA9PiB7XHJcbiAgICAgICAgaWYgKCFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wZW5lZCkpIHtcclxuICAgICAgICAgICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQob3BlbmVkKVxyXG4gICAgICAgICAgICBoZWFkZXJNb2RhbC5mYWRlSW4oKS5hZGRDbGFzcyhvcGVuZWQpXHJcbiAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbG9jaycpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKG9wZW5lZClcclxuICAgICAgICAgICAgaGVhZGVyTW9kYWwuZmFkZU91dCgpLnJlbW92ZUNsYXNzKG9wZW5lZClcclxuICAgICAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaGVhZGVyTW9kYWwub24oJ2NsaWNrJywgKGV2KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbW9iaWxlLXdycCcpKSB7XHJcbiAgICAgICAgICAgIGhlYWRlck9wZW5lci5yZW1vdmVDbGFzcyhvcGVuZWQpXHJcbiAgICAgICAgICAgIGhlYWRlck1vZGFsLmZhZGVPdXQoKS5yZW1vdmVDbGFzcyhvcGVuZWQpXHJcbiAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn0pIiwiZXhwb3J0IFx0Y29uc3QgcmVtID0gZnVuY3Rpb24gKHJlbSkge1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xyXG4gICAgcmV0dXJuIDAuMDA1MjA4MzM1ICogd2luZG93LmlubmVyV2lkdGggKiByZW07XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vINCz0LTQtSAzNzUg0Y3RgtC+INGI0LjRgNC40L3QsCDQvNC+0LHQuNC70YzQvdC+0Lkg0LLQtdGA0YHQuNC4INC80LDQutC10YLQsFxyXG4gICAgcmV0dXJuICgxMDAgLyAzNzUpICogKDAuMDUgKiB3aW5kb3cuaW5uZXJXaWR0aCkgKiByZW07XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBsZXQgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzBweCc7XHJcbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgbGV0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcbiAgICBjb25zdCBnZXRTY3JvbGxiYXJXaWR0aCA9ICgpID0+IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgbGV0IHNjcm9sbFdpdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpO1xyXG4gICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxXaXRofXB4YDtcclxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbFdpdGh9cHhgXHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xyXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gc21vb3RoIGJlaGF2aW9yID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3QgX3NsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XHJcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cHhgIDogYDBweGA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXJnZXQuaGlkZGVuID0gIXNob3dtb3JlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpIDogbnVsbDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxyXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVVcERvbmUnLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XHJcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG4gICAgdGFyZ2V0LmhpZGRlbiA9IHRhcmdldC5oaWRkZW4gPyBmYWxzZSA6IG51bGw7XHJcbiAgICBzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xyXG4gICAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXB4YCA6IGAwcHhgO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxyXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVEb3duRG9uZScsIHtcclxuICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgX3NsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcclxuICBpZiAodGFyZ2V0LmhpZGRlbikge1xyXG4gICAgcmV0dXJuIF9zbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9XHJcbn07XHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZm9ybURvbUVsXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJtaXRGb29cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGZvcm1Eb21FbCwgc3VibWl0Rm9vKSB7XHJcbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm1Eb21FbFxyXG4gICAgICAgIHRoaXMuX2Zvcm0uc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgdHJ1ZSlcclxuICAgICAgICB0aGlzLl9pbnB1dENvbnRhaW5lclNlbGVjdG9yID0gJ2Zvcm0taW5wdXQnXHJcbiAgICAgICAgdGhpcy5faW5wdXRFcnJvck1zZ1NlbGVjdG9yID0gJ2lucHV0LXRleHQtZXJyb3ItbXNnJ1xyXG4gICAgICAgIHRoaXMuX2lucHV0RXJyb3JTZWxlY3RvciA9ICdfZXJyb3InXHJcbiAgICAgICAgdGhpcy5faW5wdXRQbGFjZWhvbGRlclNlbGVjdG9yID0gJ2lucHV0LXRleHQtcGxhY2Vob2xkZXInXHJcbiAgICAgICAgdGhpcy5zdWJtaXRGb3JtID0gc3VibWl0Rm9vXHJcbiAgICAgICAgdGhpcy5faW5wdXRzID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEnKVxyXG4gICAgICAgIHRoaXMuX2lucHV0c0RhdGEgPSB0aGlzLl9jcmVhdGVJbnB1dERhdGEodGhpcy5faW5wdXRzKVxyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkSW5wdXQgPSBBcnJheS5mcm9tKHRoaXMuX2lucHV0cykuZmluZChlID0+IGUubmFtZSA9PT0gJ3Bhc3N3b3JkJylcclxuICAgICAgICB0aGlzLl9wYXNzd29yZFJlcGVhdElucHV0ID0gQXJyYXkuZnJvbSh0aGlzLl9pbnB1dHMpLmZpbmQoZSA9PiBlLm5hbWUgPT09ICdwYXNzd29yZFJlcGVhdCcpXHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnRuID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogX2lucHV0c0RhdGE6IHtba2V5OiBpbnB1dC5uYW1lXSA6e1xyXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgdmFsdWU6IGFueSxcclxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGJvb2wsXHJcbiAgICAgICAgICogICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkOiBib29sXHJcbiAgICAgICAgICogICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICogICAgICAgICAgICAgIH1cclxuICAgICAgICAgKiAgKi9cclxuXHJcbiAgICAgICAgLyogIHRoaXMuX2J0blN1Ym1pdCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKVxyXG4gICAgICAgICAgICB0aGlzLl9idG5TdWJtaXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpICovXHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEZvcm0oKVxyXG4gICAgfVxyXG4gICAgX2lucHV0SGFuZGxlcihpbnB1dFRhcmdldCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX2lucHV0c0RhdGFbaW5wdXRUYXJnZXQubmFtZV0udmFsdWUgPSBpbnB1dFRhcmdldC52YWx1ZVxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRpb24oaW5wdXRUYXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0VGFyZ2V0LnBsYWNlaG9sZGVyKSByZXR1cm5cclxuXHJcbiAgICAgICAgaWYgKGlucHV0VGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlucHV0VGFyZ2V0LmNsb3Nlc3QoJy4nICsgdGhpcy5faW5wdXRDb250YWluZXJTZWxlY3RvcilcclxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLl9pbnB1dFBsYWNlaG9sZGVyU2VsZWN0b3IpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dFRhcmdldC5jbG9zZXN0KCcuJyArIHRoaXMuX2lucHV0Q29udGFpbmVyU2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5faW5wdXRQbGFjZWhvbGRlclNlbGVjdG9yKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBfdmFsaWRhdGlvbihpbnB1dCkge1xyXG4gICAgICAgIC8v0LLQsNC70LjQtNCw0YbQuNGPINC40L3Qv9GD0YLQvtCyXHJcblxyXG4gICAgICAgIHN3aXRjaCAoaW5wdXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICduYW1lJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZChpbnB1dCwgL15bQS1aYS160JAt0Y/QgdGRIF0rJC8sICfQlNC+0L/Rg9GB0YLQuNC8INCy0LLQvtC0INGC0L7Qu9GM0LrQviDQsdGD0LrQsicpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZChpbnB1dCwgL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfC4oXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8sICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LIg0YTQvtGA0LzQsNGC0LUgZW1haWxAZG9tYWluLmNvbScpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZChpbnB1dCwgL15cXCsoN3wzNzUpIFxcKFxcZHszfVxcKSBcXGR7M30tXFxkezJ9LVxcZHsyfSQvLCAn0KTQvtGA0LzQsNGCINC90L7QvNC10YDQsCDRgtC10LvQtdGE0L7QvdCwICs3ICg4ODgpIDg4OC04OC04OCcpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkKGlucHV0LCAvXig/PS4qW0EtWl0pKD89LipbYS16XSkoPz0uKlxcZClbQS1aYS16XFxkXXs4LH0kLywgJ9Cd0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0L/QsNGA0L7Qu9GMJylcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWQoaW5wdXQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0lucHV0VmFsaWQodGFyZ2V0LCByZWdleCA9IG51bGwsIHJlZ2V4TXNnID0gJ9GH0LUg0YLQviDQvdC1INGC0LDQuiDQvdCw0L/QuNGB0LDQuywg0LjRgdC/0YDQsNCy0LvRj9C5Jykge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0c0RhdGFbdGFyZ2V0Lm5hbWVdLmlzUmVxdWlyZWQpIHJldHVyblxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSB0YXJnZXQuY2xvc2VzdCgnLicgKyB0aGlzLl9pbnB1dENvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5faW5wdXRFcnJvck1zZ1NlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0c0RhdGFbdGFyZ2V0Lm5hbWVdLmlzUmVxdWlyZWQgJiYgIXRoaXMuX2lucHV0c0RhdGFbdGFyZ2V0Lm5hbWVdLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgcmVxdXJlZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9ICfQrdGC0L4g0L/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3Qvi4nXHJcbiAgICAgICAgICAgIHRoaXMuX2lucHV0c0RhdGFbdGFyZ2V0Lm5hbWVdLmlzVmFsaWQgPSBmYWxzZVxyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubmFtZSA9PT0gJ3Bhc3N3b3JkUmVwZWF0Jykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGlvbih0aGlzLl9wYXNzd29yZElucHV0KVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LnZhbHVlICE9PSB0aGlzLl9pbnB1dHNEYXRhLnBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9ICfQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YInXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dHNEYXRhW3RhcmdldC5uYW1lXS5pc1ZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0c0RhdGFbdGFyZ2V0Lm5hbWVdLmlzVmFsaWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JTZWxlY3RvcilcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gJyAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAnY2hlY2tib3gnIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICAgICAgICAvL2NoZWNrIGZvciBjaGVja2JveCBhbmQgcmFkaW9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrYm94IGFuZCByYWRpbycpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dHNEYXRhW3RhcmdldC5uYW1lXS5pc1ZhbGlkID0gIXRoaXMuX2lucHV0c0RhdGFbdGFyZ2V0Lm5hbWVdLmlzUmVxdWlyZWQgPyB0cnVlIDogdGFyZ2V0LmNoZWNrZWRcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlZ2V4ICYmICFyZWdleC50ZXN0KHRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgLy9jaGVjayByZWdleFxyXG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gcmVnZXhNc2dcclxuICAgICAgICAgICAgdGhpcy5faW5wdXRzRGF0YVt0YXJnZXQubmFtZV0uaXNWYWxpZCA9IGZhbHNlXHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL3ZhbGlkYXRpb24gc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgdGhpcy5faW5wdXRzRGF0YVt0YXJnZXQubmFtZV0uaXNWYWxpZCA9IHRydWVcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yU2VsZWN0b3IpXHJcbiAgICAgICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gJyAnXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgX29uU3VibWl0KGV2dCkge1xyXG4gICAgICAgIGxldCB3aGF0c1VwID0gdHJ1ZVxyXG4gICAgICAgIGZvciAoY29uc3QgaW5wIG9mIHRoaXMuX2lucHV0cykge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dEhhbmRsZXIoaW5wKVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lucHV0c0RhdGFbaW5wLm5hbWVdLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHdoYXRzVXAgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXdoYXRzVXApIHJldHVyblxyXG4gICAgICAgIC8v0YHQsNCx0LzQuNGCXHJcbiAgICAgICAgdGhpcy5fZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc3VibWl0JykpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgX2NyZWF0ZUlucHV0RGF0YShpbnB1dHMpIHtcclxuXHJcbiAgICAgICAgbGV0IGVjaG8gPSB7fVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIGlucHV0cykge1xyXG5cclxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJylcclxuICAgICAgICAgICAgaWYgKGlucHV0LnBsYWNlaG9sZGVyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxjYWhvbGRlciA9IGlucHV0LmNsb3Nlc3QoJy4nICsgdGhpcy5faW5wdXRDb250YWluZXJTZWxlY3RvcilcclxuICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5faW5wdXRQbGFjZWhvbGRlclNlbGVjdG9yKVxyXG5cclxuICAgICAgICAgICAgICAgIHBsY2Fob2xkZXIudGV4dENvbnRlbnQgPSBpbnB1dC5wbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGFzZXQucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGNhaG9sZGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1lbmQnLCAnIConKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzYnRuID0gaW5wdXQuY2xvc2VzdCgnLicgKyB0aGlzLl9pbnB1dENvbnRhaW5lclNlbGVjdG9yKVxyXG4gICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmlucHV0LXRleHQtcGFzc3dvcmQnKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXNzYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXNzb3dySGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdmaWxlJykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7IHRoaXMuX2ZpbGVIYW5kbGVyKGUpIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoIWVjaG9baW5wdXQubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSAhaW5wdXQuZGF0YXNldC5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZCA9ICEhaW5wdXQuZGF0YXNldC5yZXF1aXJlZFxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGlucHV0LmRhdGFzZXQuZGVmYXVsdHYgfHwgaW5wdXQuY2hlY2tlZCB8fCBpbnB1dC52YWx1ZSB8fCAnJ1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnIHx8IGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGlucHV0LmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlY2hvW2lucHV0Lm5hbWVdID0geyB2YWx1ZSwgaXNWYWxpZCwgaXNSZXF1aXJlZCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZWNob1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBfZmlsZUhhbmRsZXIoZXZ0KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy4nICsgdGhpcy5faW5wdXRDb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlLWdvdCcpXHJcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlLXRleHQnKVxyXG4gICAgICAgICAgICAgIC50ZXh0Q29udGVudCA9IGV2dC50YXJnZXQudmFsdWUuc3BsaXQoJ1xcXFwnKS5zbGljZSgtMSlcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfcGFzc293ckhpZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Bhc3N3b3JkSW5wdXQudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Bhc3N3b3JkJylcclxuICAgICAgICAgICAgdGhpcy5fcGFzc3dvcmRSZXBlYXRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncGFzc3dvcmQnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgICAgICAgICB0aGlzLl9wYXNzd29yZFJlcGVhdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluaXRGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuX2Zvcm0ubm9WYWxpZGF0ZSA9IHRydWVcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4gdGhpcy5faW5wdXRIYW5kbGVyKGUudGFyZ2V0KSlcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB0aGlzLl9pbnB1dEhhbmRsZXIoZS50YXJnZXQpKVxyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4gdGhpcy5faW5wdXRIYW5kbGVyKGUudGFyZ2V0KSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0QnRuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgdGhpcy5fb25TdWJtaXQoZSkgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuaW1wb3J0IElucHV0bWFzayBmcm9tIFwiaW5wdXRtYXNrXCI7XHJcblxyXG5jb25zdCBydSA9IG5ldyBJbnB1dG1hc2soJys3ICg5OTkpIDk5OS05OS05OScsIHsgcGxhY2Vob2xkZXI6ICcnIH0pLFxyXG4gICAgYnIgPSBuZXcgSW5wdXRtYXNrKCcrMzc1ICg5OTkpIDk5OS05OS05OScsIHsgcGxhY2Vob2xkZXI6ICcnIH0pLFxyXG4gICAga3ogPSBuZXcgSW5wdXRtYXNrKCcrNyAoOTk5KSA5OTktOTktOTknLCB7IHBsYWNlaG9sZGVyOiAnJyB9KSxcclxuICAgIHBob25lTWFwID0ge1xyXG4gICAgICAgIHJ1LCBiciwga3pcclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRGb3JtcygpIHtcclxuICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0nKVxyXG4gICAgaWYgKGZvcm1zKSB7XHJcbiAgICAgICAgZm9ybXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBuZXcgRm9ybShlLCBmb3JtU3VibWl0KVxyXG4gICAgICAgICAgICBydS5tYXNrKCQoZSkuZmluZCgnaW5wdXRbbmFtZT1cInBob25lXCJdJykpO1xyXG4gICAgICAgICAgICBjaGFuZ2VJbnB1dE1hc2soZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtU3VibWl0KGlucHV0RGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coaW5wdXREYXRhKTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VJbnB1dE1hc2soZm9ybSkge1xyXG5cclxuICAgICQoZm9ybSkuZmluZCgnLmlucHV0LXBob25lX19zZWxlY3QtbGlzdC1idG4nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHsgbWFzayB9ID0gZS50YXJnZXQuZGF0YXNldCxcclxuICAgICAgICAgICAgcGFyZW50ID0gJChlLnRhcmdldC5jbG9zZXN0KCcuaW5wdXQtcGhvbmUnKSksXHJcbiAgICAgICAgICAgIGltYWdlTGluayA9IGUudGFyZ2V0LmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgKiAxLiDQvNC10L3QsNC10YIg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSBcclxuICAgICAgICAgICAgKiAyLiDQv9GA0LjQvNC10L3Rj9C10YIg0LzQsNGB0LrRgyDQuNC3INGF0Y3RiNCwXHJcbiAgICAgICAgICAgICogMy4g0LfQsNC60YDRi9Cy0LDQtdGC0YHRj1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICQoJy5pbnB1dC1waG9uZV9fc2VsZWN0LWN1cnJlbnQtZmxhZycpLmF0dHIoJ3NyYycsIGltYWdlTGluaylcclxuICAgICAgICBwaG9uZU1hcFttYXNrXS5tYXNrKHBhcmVudC5maW5kKCdpbnB1dFtuYW1lPVwicGhvbmVcIl0nKSlcclxuICAgICAgICBwYXJlbnQuZmluZCgnLmRyb3AtZG93bi10YXJnZXQnKS50cmlnZ2VyKCdjbGljaycpXHJcbiAgICB9KVxyXG5cclxufSIsImNvbnN0IGlucHV0Q2hhbmdlID0gbmV3IEV2ZW50KCdpbnB1dCcpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0U2VsZWN0KCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiDQutCw0YHRgtC+0LzQvdGL0Lkg0YHQtdC70LXQutGCINGF0YDQsNC90Y/RidC40Lkg0LfQvdCw0YfQtdC90LjQtSDQsiDQuNC90L/Rg9GC0LVcclxuICAgICAqIDEuINC/0YDQuNGB0LLQsNC40LLQsNC90LjQtSDQvdC+0LLQvtCz0L4g0LfQvdCw0YfQtdC90LjRjyDQuNC90L/Rg9GC0YMg0L3QsCDQv9GA0Y/QvNGD0Y5cclxuICAgICAqICjQt9C90LDRh9C10L3QuNC1INC00LvRjyDQuNC90L/Rg9GC0LAg0LHQtdGA0LXRgtGB0Y8g0LjQtyBkYXRhLXZhbHVlINC40LvQuCB0ZXh0Q29udGVudCDQutC90L7Qv9C60LgpXHJcbiAgICAgKiBcclxuICAgICAqIDIuINGC0YDQuNCz0LXRgCBpbnB1dCDQuNCy0LXQvdGC0LAg0L3QsCDQuNC90L/Rg9GC0LUg0LTQu9GPINGC0YDQuNCz0LXRgNCwINCy0LDQu9C40LTQsNGG0LjQuCDRhNC+0YDQvNGLINC4INC30LDQv9C40YHQuCDQvdC+0LLQs9C+INC30L3QsNGH0LXQvdC40Y9cclxuICAgICAqIFxyXG4gICAgICogMy00LiDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LTQuNC30LXQudCx0LvQsCDRgyDQutC90L7Qv9C+0LpcclxuICAgICAqIFxyXG4gICAgICogNS4g0YLRgNC40LPQtdGAINC00YDQvtC/0LTQsNGD0L3QsCDQtNC70Y8g0LfQsNC60YDRi9GC0LjRj1xyXG4gICAgICovXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKVxyXG4gICAgaWYgKCFzZWxlY3RzKSByZXR1cm5cclxuXHJcbiAgICBzZWxlY3RzLmZvckVhY2goKHNlbGVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9faXRlbXMtbGlzdC1lJylcclxuXHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X190YXJnZXQtaW5wdXQnKVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZXYudGFyZ2V0LmRhdGFzZXQudmFsdWUgfHwgZXYudGFyZ2V0LnRleHRDb250ZW50XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGlucHV0Q2hhbmdlKVxyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgoYnRuKSA9PiBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpKVxyXG4gICAgICAgICAgICAgICAgZXYudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QucXVlcnlTZWxlY3RvcignLmRyb3AtZG93bi10YXJnZXQnKS5jbGljaygpXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxufSIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuLy9pbXBvcnQgbm9VaVNsaWRlIGZyb20gJ25vdWlzbGlkZXInXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRDYXRhbG9nRmlsdGVyT3BlbmVyKCkge1xyXG5cclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctY3VycmVudCcpKSByZXR1cm5cclxuICAgLy8gcHJpY2VTbGlkZXIoKVxyXG5cclxuXHJcbiAgICBjb25zdCBvcGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZy1jdXJyZW50X19pdGVtcy10b3Atb3BlbmVyJyksXHJcbiAgICAgICAgY2xvc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctY3VycmVudF9fZmlsdGVyLWNsb3NlcicpLFxyXG4gICAgICAgIGh0bWwgPSAkKCdodG1sJyksXHJcbiAgICAgICAgdGFyZ2V0ID0gJCgnLmNhdGFsb2ctY3VycmVudF9fZmlsdGVyJylcclxuXHJcblxyXG4gICAgb3BlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBodG1sLmFkZENsYXNzKCdsb2NrJylcclxuICAgICAgICB0YXJnZXQuZmFkZUluKClcclxuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoJ19vcGVuZWQnKVxyXG4gICAgfSlcclxuICAgIGNsb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBodG1sLnJlbW92ZUNsYXNzKCdsb2NrJylcclxuICAgICAgICB0YXJnZXQuZmFkZU91dCgpXHJcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKCdfb3BlbmVkJylcclxuICAgIH0pXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc0NsYXNzKCdfb3BlbmVkJykgJiYgaHRtbC5oYXNDbGFzcygnbG9jaycpKSB7XHJcbiAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2xhc3MoJ2xvY2snKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcmljZVNsaWRlcigpIHtcclxuXHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZy1jdXJyZW50X19maWx0ZXItc2Nyb2xsLWxpc3QtcHJpY2Utc2xpZGVyJyksXHJcbiAgICAgICAgbWluID0gJCgnI3ByaWNlSW5wdXRNaW4nKSxcclxuICAgICAgICBtYXggPSAkKCcjcHJpY2VJbnB1dE1heCcpXHJcblxyXG4gICAgaWYgKCF0YXJnZXQpIHJldHVyblxyXG5cclxuICAgIG1pbi5hdHRyKCdtaW4nLCAwKVxyXG4gICAgbWF4LmF0dHIoJ21heCcsIDEwMClcclxuXHJcbiAgICBub1VpU2xpZGUuY3JlYXRlKHRhcmdldCwge1xyXG4gICAgICAgIHN0YXJ0OiBbMjAsIDgwXSxcclxuICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgIHN0ZXA6IDEwLFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICAgICAnbWF4JzogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGFyZ2V0Lm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICAgIG1pbi5hdHRyKCd2YWx1ZScsdmFsdWVzWzBdKVxyXG4gICAgICAgIG1heC5hdHRyKCd2YWx1ZScsdmFsdWVzWzFdKVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG1pbi5vbignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHRhcmdldC5ub1VpU2xpZGVyLnNldChbZS50YXJnZXQudmFsdWUsIG1heC52YWwoKV0pXHJcbiAgICB9KVxyXG4gICAgbWF4Lm9uKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0Lm5vVWlTbGlkZXIuc2V0KFttaW4udmFsKCksIGUudGFyZ2V0LnZhbHVlXSlcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XHJcbmltcG9ydCB7IHJlbSB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRDYXJkUGFnZSgpIHtcclxuICAgIGluaXRDYXRhbG9nSW1nU3dpcGVyKClcclxuICAgIGRlc2NyaXB0aW9uU2xpZGVyKClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRDYXRhbG9nSW1nU3dpcGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHRvcFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXBhZ2UtdG9wX19jLWltZy10b3AnKSxcclxuICAgICAgICBib3R0b21TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wYWdlLXRvcF9fYy1pbWctYm90dG9tJylcclxuXHJcbiAgICBpZiAoIXRvcFNsaWRlciB8fCAhYm90dG9tU2xpZGVyKSByZXR1cm5cclxuXHJcblxyXG4gICAgY29uc3QgdG9wU3dpcGVyID0gbmV3IFN3aXBlcih0b3BTbGlkZXIsIHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiByZW0oMyksXHJcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgICAgIHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjogdHJ1ZSxcclxuICAgICAgICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IHRydWUsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGJvdHRvbVN3aXBlciA9IG5ldyBTd2lwZXIoYm90dG9tU2xpZGVyLCB7XHJcbiAgICAgICAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxyXG4gICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiByZW0oMSksXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLmNhcmQtcGFnZS10b3BfX2MtaW1nLWJvdHRvbS1wYWdpbmF0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBwcmV2RWw6ICcuY2FyZC1wYWdlLXRvcF9fYy1pbWctYm90dG9tLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0RWw6ICcuY2FyZC1wYWdlLXRvcF9fYy1pbWctYm90dG9tLW5leHQnXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9KVxyXG4gICAgYm90dG9tU2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXBhZ2UtdG9wX19jLWltZy1ib3R0b20tc2xpZGUnKVxyXG4gICAgICAgIC5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b3BTd2lwZXIuc2xpZGVUbyhpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkZXNjcmlwdGlvblNsaWRlcigpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXBhZ2UtZGVzY3JpcHRpb25fX2Mtc2xpZGVyJylcclxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1wYWdlLWRlc2NyaXB0aW9uX19jLW5hdi1idG4nKVxyXG4gICAgaWYgKCF0YXJnZXQgfHwgIWJ0bnMpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIodGFyZ2V0LCB7XHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IHJlbSgzKSxcclxuICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgcHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uOiB0cnVlLFxyXG4gICAgICAgIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBidG5zLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGJ0bikgPT4ge1xyXG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpKVxyXG4gICAgICAgICAgICBidG5zLmZvckVhY2goKHRvZ2dsZXIpPT4gdG9nZ2xlci5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbmVkJykpXHJcbiAgICAgICAgICAgIGJ0bi50YXJnZXQuY2xhc3NMaXN0LmFkZCgnX29wZW5lZCcpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcclxuaW1wb3J0IHsgcmVtIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0RmVlZEJhY2soKSB7XHJcbiAgICByZXZpZXdPcGVuZXIoKVxyXG4gICAgc3dpcGVyKClcclxuXHJcbn1cclxuZnVuY3Rpb24gc3dpcGVyKCkge1xyXG4gICAgY29uc3Qgc3dpcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19jLXNsaWRlcicpXHJcbiAgICBpZiAoIXN3aXBlcikgcmV0dXJuXHJcbiAgICBuZXcgU3dpcGVyKHN3aXBlciwge1xyXG4gICAgICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uXSxcclxuICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICBhbGxvd1NsaWRlUHJldjogMSxcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IHJlbSgzKSxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgcHJldkVsOiAnLmZlZWRiYWNrX19jLXNsaWRlci1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEVsOiAnLmZlZWRiYWNrX19jLXNsaWRlci1uZXh0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5mZWVkYmFjay1wYWdpbmF0aW9uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcbmZ1bmN0aW9uIHJldmlld09wZW5lcigpIHtcclxuXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fYy1zbGlkZXItZS1ib2R5JykpIHJldHVyblxyXG5cclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuZmVlZGJhY2tfX2Mtc2xpZGVyJyksXHJcbiAgICAgICAgdGV4dENvbnRhaW5lclNlbGVjdG9yID0gJy5mZWVkYmFja19fYy1zbGlkZXItZS1ib2R5JyxcclxuICAgICAgICB0ZXh0U2VsZWN0b3IgPSAnLmZlZWRiYWNrX19jLXNsaWRlci1lLWJvZHktdHh0JyxcclxuICAgICAgICBzaG9ydGVuZWRUZXh0U2VsZWNvciA9ICdfY2xvc2VkJyxcclxuICAgICAgICBtYXhIZWlnaHQgPSAxNTBcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRleHRTZWxlY3RvcikuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLm9mZnNldEhlaWdodCA+IG1heEhlaWdodCkge1xyXG4gICAgICAgICAgICBlID0gJChlKVxyXG4gICAgICAgICAgICBlLmFkZENsYXNzKHNob3J0ZW5lZFRleHRTZWxlY29yKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmNsb3Nlc3QodGV4dENvbnRhaW5lclNlbGVjdG9yKSk7XHJcbiAgICAgICAgICAgIGUuY2xvc2VzdCh0ZXh0Q29udGFpbmVyU2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwiZmVlZGJhY2tfX2Mtc2xpZGVyLWUtYm9keS1vcGVuZXIgYnRuLW5hdiBidG4tbmF2X3VsIHR4dDE4XCI+0KDQsNC30LLQtdGA0L3Rg9GC0Yw8L2J1dHRvbj4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnRhaW5lci5vbignY2xpY2snLCAoZXYpID0+IHtcclxuICAgICAgICBpZiAoIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZlZWRiYWNrX19jLXNsaWRlci1lLWJvZHktb3BlbmVyJykpIHJldHVyblxyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQuY2xvc2VzdCh0ZXh0Q29udGFpbmVyU2VsZWN0b3IpXHJcblxyXG4gICAgICAgIGlmICghZXYudGFyZ2V0LmNsb3Nlc3QodGV4dENvbnRhaW5lclNlbGVjdG9yKS5jbGFzc0xpc3QuY29udGFpbnMoJ19vcGVuZWQnKSkge1xyXG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnX29wZW5lZCcpXHJcbiAgICAgICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRleHRTZWxlY3RvcilcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKHNob3J0ZW5lZFRleHRTZWxlY29yKVxyXG4gICAgICAgICAgICBldi50YXJnZXQudGV4dENvbnRlbnQgPSAn0YHQstC10YDQvdGD0YLRjCdcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbmVkJylcclxuICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGV4dFNlbGVjdG9yKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoc2hvcnRlbmVkVGV4dFNlbGVjb3IpXHJcbiAgICAgICAgICAgIGV2LnRhcmdldC50ZXh0Q29udGVudCA9ICfRgNCw0LfQstC10YDQvdGD0YLRjCdcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG5cclxufVxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFNpZ25VcCgpIHtcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ24tdXAnKSkgcmV0dXJuXHJcblxyXG5cclxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lnbi1mb3JtLXN3aXRjaGVyJyksXHJcbiAgICAgICAgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ24tdXBfX2Mtc2xpZGVyJylcclxuXHJcbiAgICBidG5zLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoY2FsYygtJHtlLnRhcmdldC5kYXRhc2V0LnNsaWRldG99MDAlIC0gJHs1MCAqIGUudGFyZ2V0LmRhdGFzZXQuc2xpZGV0b31weCksIDApYFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX2MnKVxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG5cclxuICAgIGxldCBzdGF0ZUNvdW50ID0gMVxyXG4gICAgY29uc3QgYnRuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX2MtYnRuJyksXHJcbiAgICAgICAgZG9tQ291bnRlciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uX19jLXRvcC1jb3VudCcpLFxyXG4gICAgICAgIGFkZEl0ZW1CdG5zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3Rpb24tYWRkLWl0ZW0nKSxcclxuICAgICAgICBsaXN0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1saXN0JylcclxuXHJcblxyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzdGF0ZUNvdW50KytcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnLCBzdGF0ZUNvdW50KVxyXG4gICAgICAgIGRvbUNvdW50ZXIudGV4dENvbnRlbnQgPSBzdGF0ZUNvdW50XHJcbiAgICAgICAgaWYgKHN0YXRlQ291bnQgPiAzKSB7XHJcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICfQlNC+0LHQsNCy0LjRgtGMINCyINC60L7RgNC30LjQvdGDJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYWRkSXRlbUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnZGl2JykucXVlcnlTZWxlY3RvcigndWwnKSxcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnbGknKSxcclxuICAgICAgICAgICAgICAgIG5ld2l0ZW0gPSBpdGVtWzBdLmNsb25lTm9kZSh0cnVlKSxcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgPSBuZXdpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWNvdW50JylcclxuXHJcbiAgICAgICAgICAgIG5ld2l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1vcmlnaW4nKVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSBpdGVtLmxlbmd0aCArIDFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld2l0ZW0pXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGxpc3RzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh0KSA9PiB7XHJcbiAgICAgICAgICAgIHQgPSB0LnRhcmdldFxyXG4gICAgICAgICAgICBpZiAodC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW0tc2VsZnJlbW92ZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0LmNsb3Nlc3QoJ2xpJykucmVtb3ZlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFN3aXRjaGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEVsZW1lbnQgfSBjb250YWluZXIgXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5pdHN0YXRlIFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIGluaXRzdGF0ZSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSB0eXBlb2YgY29udGFpbmVyID09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpIDogY29udGFpbmVyXHJcbiAgICAgICAgdGhpcy5faW5pdFN0YXRlID0gaW5pdHN0YXRlXHJcbiAgICAgICAgdGhpcy5fYnRuU2VsZWN0b3IgPSAnLnN3aXRjaGVyLWJ0bidcclxuICAgICAgICB0aGlzLl9zbGlkZVNlbGVjdG9yID0gJy5zd2l0Y2hlci1zbGlkZSdcclxuICAgICAgICB0aGlzLl9kYXRhc2V0QnRuID0gJ3N3aXRjaHRvJ1xyXG4gICAgICAgIHRoaXMuX2RhdGFzZXRTbGlkZSA9ICdzd2l0Y2hzbGlkZSdcclxuICAgICAgICB0aGlzLl9idG5zID0gdGhpcy5faW5pdEJ0bnModGhpcy5fY29udGFpbmVyKVxyXG4gICAgICAgIHRoaXMuX3NsaWRlcyA9IHRoaXMuX2luaXRTbGlkZXModGhpcy5fY29udGFpbmVyKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX2luaXRCdG5zKGNvbnRhaW5lcikge1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fYnRuU2VsZWN0b3IpXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsgdGhpcy5fZGF0YXNldEJ0biwgaSlcclxuICAgICAgICAgICAgaWYgKGUudGFnTmFtZSA9PSAnSU5QVVQnKSB7XHJcbiAgICAgICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zd2l0Y2hlcihldilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3dpdGNoZXIoZXYpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5pdFN0YXRlICE9PSBudWxsICYmIGkgPT09IHRoaXMuX2luaXRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdfb3BlbmVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiBsaXN0XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9pbml0U2xpZGVzKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zbGlkZVNlbGVjdG9yKVxyXG4gXHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdkYXRhLScgKyB0aGlzLl9kYXRhc2V0U2xpZGUsIGkpXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5pdFN0YXRlICE9PSBudWxsICYmIGkgIT09IHRoaXMuX2luaXRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3N3aXRjaGVyKGUpIHtcclxuXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19vcGVuZWQnKSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGUgPSBlLmN1cnJlbnRUYXJnZXRcclxuXHJcbiAgICAgICAgdGhpcy5fc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc2xpZGUuZGF0YXNldFt0aGlzLl9kYXRhc2V0U2xpZGVdID09IGUuZGF0YXNldFt0aGlzLl9kYXRhc2V0QnRuXSkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLl9idG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGJ0bi5kYXRhc2V0W3RoaXMuX2RhdGFzZXRCdG5dID09IGUuZGF0YXNldFt0aGlzLl9kYXRhc2V0QnRuXSkge1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ19vcGVuZWQnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ19vcGVuZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBHcmlkLCBBdXRvcGxheSB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcclxuaW1wb3J0IHsgcmVtIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgaW5pdEZvcm1zIGZyb20gXCIuLi91dGlscy9mb3Jtc1wiO1xyXG5pbXBvcnQgaW5pdFNlbGVjdCBmcm9tIFwiLi4vdXRpbHMvc2VsZWN0XCI7XHJcbmltcG9ydCBpbml0Q2F0YWxvZ0ZpbHRlck9wZW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NhdGFsb2cnXHJcbmltcG9ydCBpbml0Q2FyZFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZFZpZXdcIjtcclxuaW1wb3J0IGluaXRGZWVkQmFjayBmcm9tIFwiLi4vY29tcG9uZW50cy9mZWVkYmFja1wiO1xyXG5pbXBvcnQgaW5pdFNpZ25VcCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWduVXBcIjtcclxuaW1wb3J0IGluaXRTZWxlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VsZWN0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBTd2l0Y2hlciB9IGZyb20gXCIuLi91dGlscy9Td2l0Y2hlclwiO1xyXG5cclxuLyogICovXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgZHJvcERvd25zKClcclxuICAgIGluaXRGb3JtcygpXHJcbiAgICBpbml0U3dpcGVycygpXHJcblxyXG4gICAgaW5pdFNlbGVjdCgpXHJcbiAgICBpbml0TW9iaWxlTmF2KClcclxuICAgIGluaXRDYXRhbG9nRmlsdGVyT3BlbmVyKClcclxuICAgIGluaXRDYXJkUGFnZSgpXHJcbiAgICBpbml0RmVlZEJhY2soKVxyXG4gICAgaW5pdFNpZ25VcCgpXHJcbiAgICBtb2RhbHNIYW5kbGVyKClcclxuXHJcbiAgICBpbml0U3dpY2hlcnMoKVxyXG4gICAgaW5pdFNlbGVjdGlvbigpXHJcbiAgICBtb2RhbE1vYmlsZUNvZGUoKVxyXG4gICAgaW5pdFNob3dIZWxwKClcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZHJvcERvd25zKCkge1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wLWRvd24tdGFyZ2V0JykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ19vcGVuZWQnKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcuZHJvcC1kb3duLWNvbnRhaW5lcicpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZSgnX29wZW5lZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3dpcGVycygpIHtcclxuXHJcbiAgICBjb25zdCBjb21wbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxlY3RzX19jLXNsaWRlcicpXHJcbiAgICBpZiAoY29tcGxlY3RzKSB7XHJcbiAgICAgICAgY29tcGxlY3RzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgbmV3IFN3aXBlcihlLCB7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogcmVtKDMpLFxyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWw6IGUucXVlcnlTZWxlY3RvcignLmNvbXBsZWN0c19fYy1zbGlkZXItcGFnaW5hdGlvbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZFbDogZS5xdWVyeVNlbGVjdG9yKCcuY29tcGxlY3RzX19jLXNsaWRlci1wcmV2JyksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiBlLnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGVjdHNfX2Mtc2xpZGVyLW5leHQnKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3aHlDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2h5LWNob2ljZV9fYy1zbGlkZXInKVxyXG4gICAgaWYgKHdoeUNob2ljZSkge1xyXG4gICAgICAgIG5ldyBTd2lwZXIod2h5Q2hvaWNlLCB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uLCBHcmlkXSxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IHJlbSgzKSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgcm93czogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgICAgICAgICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdyb3cnXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBlbDogJy53aHktY2hvaWNlX19jLXNsaWRlci1wYWdpbmF0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RhZ29yaWVzX19jLXNsaWRlcicpXHJcbiAgICBpZiAoY2F0ZWdvcmllcykge1xyXG4gICAgICAgIG5ldyBTd2lwZXIoY2F0ZWdvcmllcywge1xyXG4gICAgICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbiwgR3JpZF0sXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiByZW0oMyksXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIHJvd3M6IDFcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93czogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ3JvdydcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGVsOiAnLmN0YWdvcmllc19fYy1zbGlkZS1wYWdpbmF0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BjZWlhbE9mZmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWNpYWwtb2ZmZXJfX2Mtc2xpZGVyJylcclxuICAgIGlmIChzcGNlaWFsT2ZmZXIpIHtcclxuICAgICAgICBuZXcgU3dpcGVyKHNwY2VpYWxPZmZlciwge1xyXG4gICAgICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiByZW0oMyksXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6ICcuc3BlY2lhbC1vZmZlcl9fYy1zbGlkZXItcGFnaW5hdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgcHJldkVsOiAnLnNwZWNpYWwtb2ZmZXJfX2Mtc2xpZGVyLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgbmV4dEVsOiAnLnNwZWNpYWwtb2ZmZXJfX2Mtc2xpZGVyLW5leHQnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGluZ19fYy1tYWluLXNsaWRlcicpXHJcbiAgICBpZiAoaGVhZGluZykge1xyXG4gICAgICAgIG5ldyBTd2lwZXIoaGVhZGluZywge1xyXG4gICAgICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbiwgQXV0b3BsYXldLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiByZW0oMyksXHJcbiAgICAgICAgICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uTW91c2VFbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6ICcuaGVhZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVmZW5zZVdvcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmZW5zZS13b3JrX19jLXNsaWRlcicpXHJcbiAgICBpZiAoZGVmZW5zZVdvcmspIHtcclxuICAgICAgICBuZXcgU3dpcGVyKGRlZmVuc2VXb3JrLCB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IHJlbSgzKSxcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBlbDogJy5kZWZlbnNlLXdvcmstcGFnaW5hdGlvbidcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXRhbG9nSGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nLWhlYWQtc3dpcGVyJylcclxuICAgIGlmIChjYXRhbG9nSGVhZCkge1xyXG4gICAgICAgIG5ldyBTd2lwZXIoY2F0YWxvZ0hlYWQsIHtcclxuICAgICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogcmVtKDMpLFxyXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGVsOiAnLmNhdGFsb2ctaGVhZC1wYWdpbmF0aW9uJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhdGFsb2dEZWZlbnNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctZGVmZW5zZV9fYy1yaWdodCcpXHJcbiAgICBpZiAoY2F0YWxvZ0RlZmVuc2UpIHtcclxuICAgICAgICBuZXcgU3dpcGVyKGNhdGFsb2dEZWZlbnNlLCB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uLCBHcmlkXSxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IHJlbSgzKSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgcm93czogMVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAncm93J1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6ICcuY2F0YWxvZy1kZWZlbnNlLXBhZ2luYXRpb24nXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlGcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1mcy1zbGlkZXInKVxyXG4gICAgaWYgKGNhdGVnb3J5RnMpIHtcclxuICAgICAgICBjYXRlZ29yeUZzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiByZW0oMyksXHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBlbDogZWwuY2xvc2VzdCgnLmNhdGVnb3J5LWZzJykucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWZzLXBhZ2luYXRpb24nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hvaWNlU3lzdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNob2ljZS1zeXN0ZW1fX2MtbGVmdC1zbGlkZXInKVxyXG4gICAgaWYgKGNob2ljZVN5c3RlbSkge1xyXG4gICAgICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoY2hvaWNlU3lzdGVtLCB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IHJlbSgzKSxcclxuICAgICAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6ICcuY2hvaWNlLXN5c3RlbV9fYy1sZWZ0LXRvcC1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdmcmFjdGlvbidcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjaG9pY2VTeXN0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmNob2ljZS1zeXN0ZW1fX2MtbGVmdC1zbGlkZXItZm9ybS1lLW5leHQnKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZU5leHQoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdzRGVhdGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdzLWRldGFpbC1zbGlkZXInKVxyXG4gICAgaWYgKG5ld3NEZWF0YWlsKSB7XHJcbiAgICAgICAgbmV3c0RlYXRhaWwuZm9yRWFjaCgoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbmV3IFN3aXBlcihlLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKSwge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IHJlbSgzKSxcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkVsOiBlLnF1ZXJ5U2VsZWN0b3IoJy5idG4tc3dpcGVyX2xlZnQnKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0RWw6IGUucXVlcnlTZWxlY3RvcignLmJ0bi1zd2lwZXJfcmlnaHQnKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWw6IGUucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRNb2JpbGVOYXYoKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdicpXHJcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuXHJcblxyXG4gICAgbGV0IHNjcm9sbFN0YXJ0ID0gMFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHNjcm9sbFN0YXJ0ICsgNTApIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19vcGVuZWQnKVxyXG4gICAgICAgICAgICBzY3JvbGxTdGFydCA9IHdpbmRvdy5zY3JvbGxZXHJcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IHNjcm9sbFN0YXJ0IC0gNTApIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuZWQnKVxyXG4gICAgICAgICAgICBzY3JvbGxTdGFydCA9IHdpbmRvdy5zY3JvbGxZXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RhbHNIYW5kbGVyKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBtb2RhbE9wZW5lcnMgPSAkKCcubW9kYWwtb3BlbmVyJyksXHJcbiAgICAgICAgbW9kYWxDbG9zZXJzID0gJCgnLm1vZGFsLWNsb3NlcicpLFxyXG4gICAgICAgIGh0bWwgPSAkKCdodG1sJylcclxuXHJcblxyXG4gICAgaWYgKCFtb2RhbE9wZW5lcnMgfHwgIW1vZGFsQ2xvc2VycykgcmV0dXJuXHJcblxyXG4gICAgbW9kYWxPcGVuZXJzLm9uKCdjbGljaycsIChldikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IGV2LmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG5cclxuICAgICAgICAkKGAubW9kYWwtJHttb2RhbH1gKVxyXG4gICAgICAgICAgICAuZmFkZUluKClcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdfb3BlbmVkJylcclxuICAgICAgICBodG1sLmFkZENsYXNzKCdsb2NrJylcclxuICAgIH0pXHJcblxyXG5cclxuICAgIG1vZGFsQ2xvc2Vycy5vbignY2xpY2snLCAoZXYpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNsYXNzTGlzdCB9ID0gZXYudGFyZ2V0XHJcbiAgICAgICAgaWYgKCFjbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWNsb3NlcicpKSByZXR1cm5cclxuXHJcbiAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSkge1xyXG4gICAgICAgICAgICAkKGV2LnRhcmdldCkuZmFkZU91dCgpLnJlbW92ZUNsYXNzKCdfb3BlbmVkJylcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChldi50YXJnZXQuY2xvc2VzdCgnLm1vZGFsJykpLmZhZGVPdXQoKS5yZW1vdmVDbGFzcygnX29wZW5lZCcpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sLnJlbW92ZUNsYXNzKCdsb2NrJylcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGFsTW9iaWxlQ29kZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5pbnB1dC00eC1jb2RlJylcclxuICAgIGlmICghY29udGFpbmVyKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBpbnB1dHMgPSBjb250YWluZXIuZmluZCgnaW5wdXRbbmFtZT1cImNvZGVcIl0nKSxcclxuICAgICAgICBlcnJNc2cgPSBjb250YWluZXIuZmluZCgnLmlucHV0LXRleHQtZXJyb3ItbXNnJyksXHJcbiAgICAgICAgdmFsdWVJbnB1dCA9IGNvbnRhaW5lci5maW5kKCdpbnB1dFtuYW1lPVwicGluY29kZVwiXScpXHJcblxyXG4gICAgY29udGFpbmVyLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgaW5wdXRzLm9uKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWwgPSBlLmtleVxyXG4gICAgICAgIGlmICh2YWwgPT0gdmFsLnJlcGxhY2UoL1swLTldLywgJycpKSB7XHJcbiAgICAgICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS52YWwoJycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkudmFsKCcnKTtcclxuICAgICAgICBsZXQgcmVzID0gQXJyYXkuZnJvbSh2YWx1ZUlucHV0LnZhbCgpKVxyXG4gICAgICAgIHJlc1tlLnRhcmdldC5kYXRhc2V0LmluZGV4XSA9IHZhbFxyXG4gICAgICAgIHJlcyA9IHJlcy5qb2luKCcnKVxyXG4gICAgICAgIHZhbHVlSW5wdXQudmFsKHJlcylcclxuXHJcblxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgaW5wdXRzLm9uKCdrZXl1cCcsIChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxldCB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIC8vINCS0LLQvtC0INGC0L7Qu9GM0LrQviDRhtC40YTRgFxyXG4gICAgICAgIGlmICh2YWwgPT0gdmFsLnJlcGxhY2UoL1swLTldLywgJycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudmFsKCcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQn9C10YDQtdC00LDRh9CwINGE0L7QutGD0YHQsCDRgdC70LXQtNGD0Y7RidC10LzRgyBpbm5wdXRcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXggPCAzKSB7XHJcbiAgICAgICAgICAgIGlucHV0cy5lcShpbnB1dHMuaW5kZXgodGhpcykgKyAxKS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGlmKHZhbHVlSW5wdXQudmFsKCkgPT0gdmFsdWVJbnB1dC52YWwoKS5yZXBsYWNlKC9cXCovZywgJycpKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLnRyaWdnZXIoJ3N1Ym1pdCcpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFN3aWNoZXJzKCkge1xyXG4gICAgY29uc3QgYmFza2V0RGVsaXZlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXItZGVsaXZlcnknKVxyXG4gICAgaWYgKGJhc2tldERlbGl2ZXJ5KSB7XHJcbiAgICAgICAgbmV3IFN3aXRjaGVyKGJhc2tldERlbGl2ZXJ5LCAwKVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlcmRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXItdXNlcmRhdGEnKVxyXG5cclxuICAgIGlmICh1c2VyZGF0YSkge1xyXG4gICAgICAgIG5ldyBTd2l0Y2hlcih1c2VyZGF0YSwgMClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2RhbENkZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2RlaycpXHJcbiAgICBpZiAobW9kYWxDZGVrKSB7XHJcbiAgICAgICAgbmV3IFN3aXRjaGVyKG1vZGFsQ2RlaywgMClcclxuICAgIH1cclxuICAgIGNvbnN0IHN1cHBvcnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1cHBvcnQtbGlzdCcpXHJcbiAgICBpZiAoc3VwcG9ydExpc3QpIHtcclxuICAgICAgICBuZXcgU3dpdGNoZXIoc3VwcG9ydExpc3QsIDApXHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VyUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXBhZ2UnKVxyXG4gICAgaWYgKHVzZXJQYWdlKSB7XHJcbiAgICAgICAgbmV3IFN3aXRjaGVyKHVzZXJQYWdlLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vZGFsU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zaWduLXJlc2V0LXN3aXRjaGVyJylcclxuICAgIGlmIChtb2RhbFNpZ24pIHtcclxuICAgICAgICBuZXcgU3dpdGNoZXIobW9kYWxTaWduLCAwKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U2hvd0hlbHAoKSB7XHJcbiAgICBjb25zdCB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctaGVscCcpXHJcblxyXG4gICAgdGFyZ2V0cy5mb3JFYWNoKCh0KSA9PiB7XHJcbiAgICAgICAgaWYgKCEkKHQpLmZpbmQoJy5zaG93LWhlbHAtdGV4dCcpKSByZXR1cm5cclxuXHJcbiAgICAgICAgdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAkKGUuY3VycmVudFRhcmdldCkuZmluZCgnLnNob3ctaGVscC10ZXh0JykuZmFkZUluKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKCcuc2hvdy1oZWxwLXRleHQnKS5mYWRlT3V0KClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzJ1xyXG5cclxuaW1wb3J0ICcuL2pzL2Rldi96YXR6LmpzJztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQ3OTI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX2V4YW1wbGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja19leGFtcGxlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbOTc5LDg4MSw3NDldLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oNjQpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiaGVhZGVyT3BlbmVyIiwiaGVhZGVyTW9kYWwiLCJvcGVuZWQiLCJodG1sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib24iLCJldiIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwiZmFkZUluIiwiYWRkQ2xhc3MiLCJyZW1vdmUiLCJmYWRlT3V0IiwicmVtb3ZlQ2xhc3MiLCJyZW0iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYm9keUxvY2tTdGF0dXMiLCJib2R5VW5sb2NrIiwiZGVsYXkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJib2R5Iiwic2V0VGltZW91dCIsInN0eWxlIiwicGFkZGluZ1JpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keUxvY2siLCJnZXRTY3JvbGxiYXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2l0aCIsIl9zbGlkZVVwIiwiZHVyYXRpb24iLCJzaG93bW9yZSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJoaWRkZW4iLCJyZW1vdmVQcm9wZXJ0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9zbGlkZURvd24iLCJfc2xpZGVUb2dnbGUiLCJGb3JtIiwiY29uc3RydWN0b3IiLCJmb3JtRG9tRWwiLCJzdWJtaXRGb28iLCJfZm9ybSIsInNldEF0dHJpYnV0ZSIsIl9pbnB1dENvbnRhaW5lclNlbGVjdG9yIiwiX2lucHV0RXJyb3JNc2dTZWxlY3RvciIsIl9pbnB1dEVycm9yU2VsZWN0b3IiLCJfaW5wdXRQbGFjZWhvbGRlclNlbGVjdG9yIiwic3VibWl0Rm9ybSIsIl9pbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2lucHV0c0RhdGEiLCJfY3JlYXRlSW5wdXREYXRhIiwiX3Bhc3N3b3JkSW5wdXQiLCJBcnJheSIsImZyb20iLCJmaW5kIiwiZSIsIm5hbWUiLCJfcGFzc3dvcmRSZXBlYXRJbnB1dCIsIl9zdWJtaXRCdG4iLCJpbml0Rm9ybSIsIl9pbnB1dEhhbmRsZXIiLCJpbnB1dFRhcmdldCIsInZhbHVlIiwiX3ZhbGlkYXRpb24iLCJwbGFjZWhvbGRlciIsImNsb3Nlc3QiLCJkaXNwbGF5IiwiaW5wdXQiLCJfY2hlY2tJbnB1dFZhbGlkIiwicmVnZXgiLCJyZWdleE1zZyIsImlzUmVxdWlyZWQiLCJpbnB1dENvbnRhaW5lciIsImVycm9yTXNnIiwiY29uc29sZSIsImxvZyIsInRleHRDb250ZW50IiwiaXNWYWxpZCIsInBhc3N3b3JkIiwiZ2V0QXR0cmlidXRlIiwiY2hlY2tlZCIsInRlc3QiLCJfb25TdWJtaXQiLCJldnQiLCJ3aGF0c1VwIiwiaW5wIiwiRXZlbnQiLCJpbnB1dHMiLCJlY2hvIiwicGxjYWhvbGRlciIsImRhdGFzZXQiLCJyZXF1aXJlZCIsInBhc3NidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJfcGFzc293ckhpZGUiLCJ0eXBlIiwiX2ZpbGVIYW5kbGVyIiwiZGVmYXVsdHYiLCJzcGxpdCIsInNsaWNlIiwibm9WYWxpZGF0ZSIsImZvckVhY2giLCJlbCIsIklucHV0bWFzayIsInJ1IiwiYnIiLCJreiIsInBob25lTWFwIiwiaW5pdEZvcm1zIiwiZm9ybXMiLCJmb3JtU3VibWl0IiwibWFzayIsImNoYW5nZUlucHV0TWFzayIsImlucHV0RGF0YSIsImZvcm0iLCJwYXJlbnQiLCJpbWFnZUxpbmsiLCJjaGlsZHJlbiIsImF0dHIiLCJ0cmlnZ2VyIiwiaW5wdXRDaGFuZ2UiLCJpbml0U2VsZWN0Iiwic2VsZWN0cyIsInNlbGVjdCIsIm9wdGlvbnMiLCJvcHRpb24iLCJidG4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGljayIsImluaXRDYXRhbG9nRmlsdGVyT3BlbmVyIiwib3BlbmVyIiwiY2xvc2VyIiwiaGFzQ2xhc3MiLCJwcmljZVNsaWRlciIsIm1pbiIsIm1heCIsIm5vVWlTbGlkZSIsImNyZWF0ZSIsInN0YXJ0IiwiY29ubmVjdCIsInN0ZXAiLCJyYW5nZSIsIm5vVWlTbGlkZXIiLCJ2YWx1ZXMiLCJoYW5kbGUiLCJzZXQiLCJ2YWwiLCJTd2lwZXIiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsImluaXRDYXJkUGFnZSIsImluaXRDYXRhbG9nSW1nU3dpcGVyIiwiZGVzY3JpcHRpb25TbGlkZXIiLCJ0b3BTbGlkZXIiLCJib3R0b21TbGlkZXIiLCJ0b3BTd2lwZXIiLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc1Blckdyb3VwIiwic3BhY2VCZXR3ZWVuIiwiYWxsb3dUb3VjaE1vdmUiLCJwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24iLCJ0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24iLCJib3R0b21Td2lwZXIiLCJtb2R1bGVzIiwiYnJlYWtwb2ludHMiLCJwYWdpbmF0aW9uIiwibmF2aWdhdGlvbiIsInByZXZFbCIsIm5leHRFbCIsImkiLCJzbGlkZVRvIiwiYnRucyIsInN3aXBlciIsInRvZ2dsZXIiLCJpbml0RmVlZEJhY2siLCJyZXZpZXdPcGVuZXIiLCJhbGxvd1NsaWRlUHJldiIsImNvbnRhaW5lciIsInRleHRDb250YWluZXJTZWxlY3RvciIsInRleHRTZWxlY3RvciIsInNob3J0ZW5lZFRleHRTZWxlY29yIiwibWF4SGVpZ2h0IiwiYXBwZW5kIiwiaW5pdFNpZ25VcCIsInNsaWRlciIsInRyYW5zZm9ybSIsInNsaWRldG8iLCJpbml0U2VsZWN0aW9uIiwic3RhdGVDb3VudCIsImRvbUNvdW50ZXIiLCJhZGRJdGVtQnRucyIsImxpc3RzIiwiY3VycmVudFRhcmdldCIsIml0ZW0iLCJuZXdpdGVtIiwiY2xvbmVOb2RlIiwiY291bnRlciIsImFwcGVuZENoaWxkIiwidCIsIlN3aXRjaGVyIiwiaW5pdHN0YXRlIiwiX2NvbnRhaW5lciIsIl9pbml0U3RhdGUiLCJfYnRuU2VsZWN0b3IiLCJfc2xpZGVTZWxlY3RvciIsIl9kYXRhc2V0QnRuIiwiX2RhdGFzZXRTbGlkZSIsIl9idG5zIiwiX2luaXRCdG5zIiwiX3NsaWRlcyIsIl9pbml0U2xpZGVzIiwibGlzdCIsInRhZ05hbWUiLCJfc3dpdGNoZXIiLCJzbGlkZSIsIkdyaWQiLCJBdXRvcGxheSIsImRyb3BEb3ducyIsImluaXRTd2lwZXJzIiwiaW5pdE1vYmlsZU5hdiIsIm1vZGFsc0hhbmRsZXIiLCJpbml0U3dpY2hlcnMiLCJtb2RhbE1vYmlsZUNvZGUiLCJpbml0U2hvd0hlbHAiLCJ0b2dnbGUiLCJjb21wbGVjdHMiLCJ3aHlDaG9pY2UiLCJncmlkIiwicm93cyIsImZpbGwiLCJjYXRlZ29yaWVzIiwic3BjZWlhbE9mZmVyIiwiaGVhZGluZyIsImdyYWJDdXJzb3IiLCJhdXRvcGxheSIsInBhdXNlT25Nb3VzZUVudGVyIiwiY2xpY2thYmxlIiwiZGVmZW5zZVdvcmsiLCJjYXRhbG9nSGVhZCIsImNhdGFsb2dEZWZlbnNlIiwiY2F0ZWdvcnlGcyIsImNob2ljZVN5c3RlbSIsInNsaWRlTmV4dCIsIm5ld3NEZWF0YWlsIiwic2Nyb2xsU3RhcnQiLCJzY3JvbGxZIiwibW9kYWxPcGVuZXJzIiwibW9kYWxDbG9zZXJzIiwibW9kYWwiLCJlcnJNc2ciLCJ2YWx1ZUlucHV0Iiwia2V5IiwicmVwbGFjZSIsInJlcyIsImluZGV4Iiwiam9pbiIsImVxIiwiZm9jdXMiLCJiYXNrZXREZWxpdmVyeSIsInVzZXJkYXRhIiwibW9kYWxDZGVrIiwic3VwcG9ydExpc3QiLCJ1c2VyUGFnZSIsIm1vZGFsU2lnbiIsInRhcmdldHMiXSwic291cmNlUm9vdCI6IiJ9