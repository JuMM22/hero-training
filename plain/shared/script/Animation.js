import FrameAnimation from "@mediamonks/display-temple/animation/FrameAnimation";
import { DrawSVGPlugin } from "gsap/all";

export default class Animation extends FrameAnimation {
  /**
   *
   * @param {HTMLDivElement} container
   * @param {null} config
   */
  constructor(container, config) {
    super();

    gsap.registerPlugin(DrawSVGPlugin);

    this.container = container;
    this.config = config;
  }

  /**
   *
   * @param {gsap.core.Timeline} tl
   */
  frame0(tl) {
    tl.to('.content', { duration: 1, opacity: 1 }, 'frame0')
    tl.from('#hand', { duration: 1, x: 17, y: -17, scale: .97, ease: 'back.out(.7)' }, 'frame0')
    tl.from('#product', { duration: 1, y: 10, filter: 'blur(2px)', opacity: 0, ease: 'power4.out' }, 'frame0')

    tl.from('#square', { duration: 1, drawSVG: '0', ease: 'power.in' }, 'frame0+=.5')
    tl.from('#square', { duration: .5, opacity: 0, filter: 'blur(2px)' }, 'frame0+=.5')
  }

  frame1(tl) {
    tl.addLabel('frame1', 'frame0+=.5')

    if(this.config.content.isMobile) {
      tl.from(['#copy1A', '#copy1B', '#copy1C', '#copy1D'], { duration: 1, opacity: 0, stagger: .15, x: 20, filter: 'blur(2px)', ease: 'power4.out' }, 'frame1')
  
      tl.from("#copy2", { duration: 1, opacity: 0, filter: 'blur(2px)', ease: 'power4.out' }, 'frame1+=1')
  
      tl.from('#ctaButton', { duration: .7, scale: .9, transformOrigin: 'center', opacity: 0, ease: 'power4.out' }, 'frame1+=1.2')
    } else {
      tl.from(['#copy1A', '#copy1B', '#copy1C', '#copy1D'], { duration: 1, opacity: 0, stagger: .15, x: 20, filter: 'blur(2px)', ease: 'power4.out' }, 'frame1')
  
      tl.from("#copy2", { duration: 1, opacity: 0, filter: 'blur(2px)', ease: 'power4.out' }, 'frame1+=1.2')
  
      tl.from('#ctaButton', { duration: .7, scale: .9, transformOrigin: 'center', opacity: 0, ease: 'power4.out' }, 'frame1+=1')
    }
  }
}
