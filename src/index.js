import "./index.scss";

class rePopup {
  constructor(options) {
    this.options = options;

    this.defaults = {
      dir: "rtl",
      img: {
        url: "https://via.placeholder.com/77x77",
        alt: ""
      },
      delay: "2s",
      position: {
        right: 50,
        bottom: 25,
        left: null,
        top: null
      },
      translations: {
        header:
          "<strong>Vasya</strong> bought a course at a <strong>discount of -40%</strong>",
        subheader: "<strong>Hurry up! There are 5 discounts left.</strong>",
        cta: {
          url: "",
          text: "CLICK AND USE YOUR DISCOUNT"
        }
      }
    };

    this.options = this.extend(this.defaults, this.options);

    this.init();
  }

  // initialize plugin
  init() {
    let vm = this;
    this.ready(function() {
      let popupDIV = document.createElement("div");
      popupDIV.classList.add("rePopup__global-wrap", "animated", "bounceInUp");
      popupDIV.style.animationDelay = vm.options.delay;

      popupDIV.innerHTML =
        '<div class="rePopup__content">\n' +
        '        <div class="rePopup__body" dir="' +
        vm.options.dir +
        '">\n' +
        '            <div class="rePopup__header">\n' +
        vm.options.translations.header +
        "</div>\n" +
        '            <div class="rePopup__subheader">\n' +
        vm.options.translations.subheader +
        "            </div>\n" +
        '            <div class="rePopup__cta">\n' +
        '                <a href="' +
        vm.options.translations.cta.url +
        '">' +
        vm.options.translations.cta.text +
        "</a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        '        <div class="rePopup__img">\n' +
        '            <img src="' +
        vm.options.img.url +
        '" alt="' +
        vm.options.img.alt +
        '">\n' +
        "        </div>\n" +
        "    </div>";

      document.body.appendChild(popupDIV);

      if (vm.options.position.top !== null) {
        popupDIV.style.top = vm.options.position.top + "px";
      } else {
        popupDIV.style.bottom = vm.options.position.bottom + "px";
      }

      if (vm.options.position.left !== null) {
        popupDIV.style.left = vm.options.position.left + "px";
      } else {
        popupDIV.style.right = vm.options.position.right + "px";
      }

      vm.initialized = true;

      vm.setEventListeners();
    });
  }

  setEventListeners() {
    let that = this;
  }

  /**
   * Merge defaults with user options
   * @param {Object} target Default settings
   * @param {Object} options User options
   */
  extend(target, options) {
    var prop,
      extended = {};
    for (prop in target) {
      if (Object.prototype.hasOwnProperty.call(target, prop)) {
        extended[prop] = target[prop];
      }
    }
    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    }
    return extended;
  }

  ready(fn) {
    if (document.readyState != "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
}

export default rePopup;
