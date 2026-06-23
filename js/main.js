(function () {
  document.addEventListener("click", function (e) {
    if (
      (e.target.closest(".burger-icon") || e.target.closest(".nav__link")) &&
      document.documentElement.clientWidth <= 900
    ) {
      e.preventDefault();
      document.body.classList.toggle("body--opened-menu");
    }

    if (e.target.closest(".about__img-button")) {
      e.preventDefault();
      document.querySelector(".modal").classList.add("modal--opened");
      document.body.classList.add("body--opened-modal");
    }

    if (
      e.target.closest(".modal__cancel") ||
      (e.target.closest(".modal") && e.target === e.target.closest(".modal"))
    ) {
      e.preventDefault();
      document.querySelector(".modal").classList.remove("modal--opened");
      document.body.classList.remove("body--opened-modal");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelector(".modal").classList.remove("modal--opened");
      document.body.classList.remove("body--opened-modal");
    }
  });

  // Табы

  const tabControls = document.querySelector(".tab-conrols");

  tabControls.addEventListener("click", toggleTab);

  function toggleTab(e) {
    const tabControl = e.target.closest(".tab-conrols__link");

    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains("tab-conrols__link--active")) return;

    const tabContentID = tabControl.getAttribute("href");
    const tabContent = document.querySelector(tabContentID);
    const activeControl = document.querySelector(".tab-conrols__link--active");
    const activeContent = document.querySelector(".tab-content--show");

    if (activeControl) {
      activeControl.classList.remove("tab-conrols__link--active");
    }
    if (activeContent) {
      activeContent.classList.remove("tab-content--show");
    }

    tabControl.classList.add("tab-conrols__link--active");
    tabContent.classList.add("tab-content--show");
  }

  // Аккордеон

  const accordionLists = document.querySelectorAll(".accordion-list");

  accordionLists.forEach((el) => {
    el.addEventListener("click", (e) => {
      const accordionControl = e.target.closest(".accordion-list__control");
      if (!accordionControl) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;
      const accordionList = e.currentTarget;
      const currentlyOpenItem = accordionList.querySelector(
        ".accordion-list__item--opened"
      );

      if (currentlyOpenItem && currentlyOpenItem !== accordionItem) {
        closeAccordionItem(currentlyOpenItem);
      }

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        closeAccordionItem(accordionItem);
      } else {
        openAccordionItem(accordionItem, accordionContent);
      }
    });
  });

  function openAccordionItem(item, content) {
    item.classList.add("accordion-list__item--opened");
    content.style.maxHeight = content.scrollHeight + "px";
  }

  function closeAccordionItem(item) {
    const content = item.querySelector(".accordion-list__content");
    item.classList.remove("accordion-list__item--opened");
    content.style.maxHeight = null;
  }

  // Слайдер-галерея

  new Swiper(".gallery__slider", {
    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },

    breakpoints: {
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      },
    },
  });

  // Слайдер-отзывы

  new Swiper(".testimonials__slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },

    breakpoints: {
      901: {
        slidesPerView: 1.5,
      },
      1201: {
        slidesPerView: 2.1,
      },
    },
  });
  // Маска для телефона

  const telInputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask("+7 (999) 999-99-99");
  im.mask(telInputs);
})();
