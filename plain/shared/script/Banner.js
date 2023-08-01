import politeLoadImages from '@mediamonks/display-temple/util/politeLoadImages';
const WebFont = require('webfontloader');


export default class Banner {

  constructor(config) {
    // add required components here
    this.config = config;
  }

  // fontLoading module for the lazy loading of fonts - default is openSans
  async loadFonts() {
    let webFontConfig = {}

    webFontConfig = {
      custom: {
        families: this.config.content.defaultFonts,
        urls: [this.config.content.defaultFontUrl]
      }
    }

    webFontConfig.fontactive = (e) => {
      // console.log(`${e}, was detected. The document is ready and font loading is active`)
    }

    const prom = new Promise(resolve => {
      webFontConfig.active = resolve
    });

    WebFont.load(webFontConfig);
    return prom;
  }

  async init() {
    this.banner = document.body.querySelector('.banner');
    await politeLoadImages(this.banner);

    this.domMainExit = document.body.querySelector('.mainExit');

    this.domMainExit.addEventListener('click', this.handleClick);
    this.domMainExit.addEventListener('mouseover', this.handleRollOver);
    this.domMainExit.addEventListener('mouseout', this.handleRollOut);
  }

  setAnimation(animation) {
    this.animation = animation;
    //creates new timeline and pauses it
    this.animation.getTimeline().paused(true);
    // this.animation.getTimeline().eventCallback('onComplete', this.handleAnimationComplete);
  }

  handleExit = () => {
    window.open(window.clickTag, '_blank');
    this.animation.getTimeline().progress(1);
  };

  /**
   * When client clicks this function will be triggerd.
   */
  handleClick = () => {
    this.handleExit();
  };

  /**
   * When mouse rolls over unit.
   */
  handleRollOver = () => {
    if (!this.animation.getTimeline().isActive()) {
    gsap.to("#ctaButton", { duration: .4, backgroundColor: '#8d2f9a', border: '2px white solid', ease: 'power4.out' })
    gsap.to("#ctaCopy", { duration: .2, filter: 'brightness(6)', ease: 'power4.out' })
    gsap.to("#square", { duration: .4, scale: 1.1, opacity: 0, transformOrigin: 'center', filter: 'blur(2px)', ease: 'power4.out' })
    gsap.to(['#hand', '#bg'], { duration: .4, filter: 'blur(1px)', ease: 'power4.out' })
    gsap.to('#hand', { duration: .4, scale: .98, ease: 'power4.out' })
    gsap.to('#bg', { duration: .4, scale: 1.02, ease: 'power4.out' })
    gsap.to('#product', { duration: .4, scale: 1.02, ease: 'power4.out' })
    }
  };

  /**
   * When mouse rolls out unit.
   */
  handleRollOut = () => {
    if (!this.animation.getTimeline().isActive()) {
    gsap.to("#ctaButton", { duration: .4, backgroundColor: '#ffffff', ease: 'power4.out' })
    gsap.to("#ctaCopy", { duration: .2, filter: 'brightness(0.8)', ease: 'power4.out' })
    gsap.to("#square", { duration: .4, scale: 1, opacity: 1, transformOrigin: 'center', filter: 'blur(0px)', ease: 'power4.out' })
    gsap.to(['#hand', '#bg'], { duration: .4, filter: 'blur(0px)', ease: 'power4.out' })
    gsap.to(['#hand', '#bg', '#product'], { duration: .4, scale: 1, ease: 'power4.out' })
    }
  };

  start() {
    this.animation.play();
  }
}

