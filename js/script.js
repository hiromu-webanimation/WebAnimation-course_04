jQuery(function ($) {
  // タブ切り替え機能
  $('.top-service__tab').on('click', function () {
    var targetTab = $(this).attr('data-tab');

    // タブのアクティブ状態を切り替え
    $('.top-service__tab').removeClass('top-service__tab--active');
    $(this).addClass('top-service__tab--active');

    // パネルの表示を切り替え
    $('.top-service__panel').removeClass('top-service__panel--active');
    $('.top-service__panel[data-panel="' + targetTab + '"]').addClass('top-service__panel--active');
  });

  // header変化
  gsap.fromTo(
    '.header',
    {
      backgroundColor: 'transparent',
    },
    {
      backgroundColor: '#184473',
      duration: 0.3,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.fv',
        start: 'bottom top+=200',
        toggleActions: 'play none reverse none',
      },
    }
  );

  // 汎用アニメーション=========================-
  // セクションタイトル
  const sectionTitles = document.querySelectorAll('.js-section-title');

  sectionTitles.forEach((sectionTitle) => {
    const jpElement = sectionTitle.querySelector('.js-section-title-jp');
    const enElement = sectionTitle.querySelector('.js-section-title-en');

    if (!jpElement || !enElement) return;

    const splitTextJp = new SplitText(jpElement, {
      type: 'chars',
      tag: 'div',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionTitle,
        start: 'top 96%',
      },
    });

    tl.to(jpElement, {
      '--clip': 'inset(0% 0% 0% 0%)',
      duration: 0.7,
      ease: 'power4.inOut',
    })
      .to(
        jpElement,
        {
          '--clip': 'inset(0% 0% 0% 100%)',
          duration: 0.7,
          ease: 'power4.inOut',
        },
        '-=0.2'
      )
      .fromTo(
        splitTextJp.chars,
        {
          opacity: 0,
          yPercent: -80,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '<'
      )
      .fromTo(
        enElement,
        {
          opacity: 0,
          y: 5,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '<'
      );
  });
  // stagger
  let staggers = document.querySelectorAll('.js-stagger');
  staggers.forEach((stagger) => {
    gsap.fromTo(
      stagger.querySelectorAll('.js-stagger-item'),
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: stagger,
          start: 'top 90%',
        },
      }
    );
  });

  // fadeIn

  const fadeIns = document.querySelectorAll('.js-fadeIn');
  fadeIns.forEach((fadeIn) => {
    gsap.fromTo(
      fadeIn,
      {
        opacity: 0,
        y: 5,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: fadeIn,
          start: 'top 90%',
        },
      }
    );
  });

  // messageセクション============

  // 画像スクラブ
  gsap.fromTo(
    '.top-message__image--01',
    {
      y: 40,
    },
    {
      y: -40,
      scrollTrigger: {
        trigger: '.top-message',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    '.top-message__image--02',
    {
      yPercent: 65,
    },
    {
      yPercent: -65,
      scrollTrigger: {
        trigger: '.top-message',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    }
  );

  const splitText = new SplitText('.top-message__text', {
    type: 'lines',
    tag: 'div',
  });
  gsap.fromTo(
    splitText.lines,
    {
      opacity: 0.2,
    },
    {
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.top-message__text',
        start: 'top 95%',
      },
    }
  );

  // company セクション============
  // パララックス
  let parallaxs = document.querySelectorAll('.js-parallax-x');
  parallaxs.forEach((parallax) => {
    gsap.fromTo(
      parallax.querySelector('img'),
      {
        x: -30,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: parallax,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  });

  // linkホバー

  let mm = gsap.matchMedia();

  mm.add('(min-width: 768px)', () => {
    $('.top-company__link').on('mouseenter', function () {
      gsap.set($(this), {
        '--clip-path': 'inset(0% 100% 0% 0%)',
        '--x': '0%',
      });
      gsap.to($(this), {
        '--clip-path': 'inset(0% 0% 0% 0%)',
        duration: 0.3,
        ease: 'power4.inOut',
      });
    });
    $('.top-company__link').on('mouseleave', function () {
      gsap.to($(this), {
        '--clip-path': 'inset(0% 0% 0% 0%)',
      });
      gsap.to($(this), {
        '--x': '100%',
        duration: 0.3,
        ease: 'power4.inOut',
      });
    });
  });

  // あしらい
  gsap.fromTo(
    '.top-company__list-dec rect',
    {
      fill: '#b4d5fc',
    },
    {
      fill: '#f4f9ff',
      stagger: {
        each: 0.1,
        from: 'start',
      },
      scrollTrigger: {
        trigger: '.top-company__list-dec',
        start: 'top 90%',
      },
    }
  );

  // recruit セクション============
  gsap.fromTo(
    '.top-recruit__content-wrap',
    {
      opacity: 0,
      x: -10,
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.top-recruit__content-wrap',
        start: 'top 90%',
      },
    }
  );

  // contact セクション============
  gsap.fromTo(
    '.top-contact__wrap',
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
    }
  );

  // ローダーアニメーション
  // セッション中に一度のみ再生
  const hasLoaderPlayed = sessionStorage.getItem('loaderPlayed');
  if (!hasLoaderPlayed) {
    sessionStorage.setItem('loaderPlayed', 'true');
    const loaderTl = gsap.timeline();
    gsap.set('body', {
      opacity: 1,
    });
    gsap.set('.loader__logo', {
      scale: 2,
    });
    gsap.set('.rect-wrap', {
      clipPath: 'inset(100% 0%  0% 0%)',
    });
    // 四角形のアニメーション
    loaderTl
      .to('.rect-wrap', {
        clipPath: 'inset(0% 0%  0% 0%)',
        ease: 'power4.inOut',
        duration: 1,
      })
      .to(
        '.loader__logo',
        {
          scale: 1,
        },
        '+=0.2'
      )
      .from(
        '.rect-1',
        {
          stroke: '#ffffff',
          transform: 'translate(40px, 22px) rotate(90deg) scale(1.8)',
          ease: 'power2.inOut',
          duration: 0.8,
        },
        '<'
      )

      .from(
        '.rect-2',
        {
          stroke: '#ffffff',
          transform: 'translate(43px, 24px) rotate(90deg) scale(2.6)',
          ease: 'power2.inOut',
          duration: 0.8,
        },
        '<-0.2'
      )
      .from(
        '.rect-3',
        {
          stroke: '#ffffff',
          transform: 'translate(40px, 22px) rotate(90deg) scale(1.8)',
          ease: 'power2.inOut',
          duration: 0.8,
        },
        '<-0.2'
      )
      .fromTo(
        '.text',
        {
          y: -5,
          clipPath: 'inset(100% 0%  0% 0%)',
        },
        {
          clipPath: 'inset(0% 0%  0% 0%)',
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        },
        '-=0.4'
      )
      .fromTo(
        '.text-top',
        {
          x: -5,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        },
        '<'
      )
      .to(
        '.loader__logo',
        {
          y: -5,
          opacity: 0,
        },
        '+=0.7'
      )
      .to(
        '.loader',
        {
          clipPath: 'inset(0% 0%  100% 0%)',
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=0.3'
      )

      // op

      .fromTo(
        '.fv__image',
        {
          clipPath: 'inset(100% 0% 0% 0%)',
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'power4.inOut',
          stagger: 0.06,
        },
        '-=0.8'
      )

      .fromTo(
        '.fv__title-line',
        {
          yPercent: 100,
          clipPath: 'inset(0% 0%  100% 0%)',
        },

        {
          yPercent: 0,
          clipPath: 'inset(0% 0%  0% 0%)',
          duration: 1,
          ease: 'power4.inOut',
        },
        '<'
      )
      .fromTo(
        '.fv__subtitle',
        {
          yPercent: 100,
          clipPath: 'inset(0% 0%  100% 0%)',
        },
        {
          yPercent: 0,
          clipPath: 'inset(0% 0%  0% 0%)',
          duration: 1,
          ease: 'power4.inOut',
        },
        '<'
      )

      .to(
        '.fv__image',
        {
          '--clip': 'inset(0% 0% 100% 0%)',
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=0.5'
      )
      .fromTo(
        '.network-animation__dot',
        {
          opacity: 0,
          x: -5,
          y: -5,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power4.inOut',
          stagger: {
            each: 0.01,
            from: 'random',
          },
          onComplete: () => {
            $('.network-animation').addClass('is-active');
          },
        },
        '<'
      )

      .to(
        '.fv__image img',
        {
          transform: 'scale(1)',
          duration: 2.5,
          ease: 'power3.out',
        },
        '<'
      );
  } else {
    // セッション2回目以降はローダーを非表示にしてMVアニメーションのみ実行
    gsap.set('.loader', {
      display: 'none',
    });
    gsap.set('body', {
      opacity: 1,
    });

    const mvTl = gsap.timeline();
    mvTl
      .fromTo(
        '.fv__image',
        {
          clipPath: 'inset(100% 0% 0% 0%)',
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'power4.inOut',
          stagger: 0.06,
        }
      )
      .fromTo(
        '.fv__title-line',
        {
          yPercent: 100,
          clipPath: 'inset(0% 0%  100% 0%)',
        },
        {
          yPercent: 0,
          clipPath: 'inset(0% 0%  0% 0%)',
          duration: 1,
          ease: 'power4.inOut',
        },
        '<'
      )
      .fromTo(
        '.fv__subtitle',
        {
          yPercent: 100,
          clipPath: 'inset(0% 0%  100% 0%)',
        },
        {
          yPercent: 0,
          clipPath: 'inset(0% 0%  0% 0%)',
          duration: 1,
          ease: 'power4.inOut',
        },
        '<'
      )
      .to(
        '.fv__image',
        {
          '--clip': 'inset(0% 0% 100% 0%)',
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=0.5'
      )
      .fromTo(
        '.network-animation__dot',
        {
          opacity: 0,
          x: -5,
          y: -5,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power4.inOut',
          stagger: {
            each: 0.01,
            from: 'random',
          },
          onComplete: () => {
            $('.network-animation').addClass('is-active');
          },
        },
        '<'
      )
      .to(
        '.fv__image img',
        {
          transform: 'scale(1)',
          duration: 2.5,
          ease: 'power3.out',
        },
        '<'
      );
  }
});
