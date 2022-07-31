/** running animation list */
let animationList: string[] = []

/**
 * Define Animation
 * @param {object} animation animation description
 * @param {number} durationTime animation duration time
 */
export default function defineAnimation(animation: StyleSheet, durationTime = 2, runCount = 1) {

  /** make keyframe template */
  const keyframesTemplate = `
    {
      100% { 
        ${Object.keys(animation).map(key => `${key}: ${animation[key]};`).join('')}
      }
    }
  `

  /**
   * Apply animation to elements
   * @param {HTMLElement} element element
   * @param {number} time animation duration time
   * @returns 
   */
  function to(element: HTMLElement, time: number, count: number) {
    // generate name
    let keyframeName = _generateName()
    while(animationList.includes(keyframeName)) keyframeName = _generateName()
    animationList.push(keyframeName)
    const keyframes = `@keyframes ${keyframeName} ${keyframesTemplate}`

    // generate css style
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = keyframes;
    const head = document.querySelector('head')!
    head.appendChild(style)

    // apply animation to element
    element.style.animation = `${keyframeName} ${time || durationTime}s ${count || runCount}`
    element.style.animationFillMode = 'forwards'

    let completion: Function

    /**
     * Define the animation completion function
     * @param {Function} callback animation completion function
     */
    function end(callback: Function) { completion = callback }

    const animationendCallback = () => {
      Object.keys(animation).forEach(key => {
        element.style[key] = animation[key]
      })
      head.removeChild(style)
      animationList = animationList.filter(name => name !== keyframeName)
      completion?.()
      element.removeEventListener('animationend', animationendCallback)
    }

    element.addEventListener('animationend', animationendCallback)

    return {
      end
    }
  }

  return {
    to
  }
}

/**
 * generate keyframes name
 */
function _generateName() {
  const letters: string[] = []

  for(let i = 0; i < 10; i++) {
    const code = parseInt(`${Math.random() * 26 + 65}`)
    const character = String.fromCharCode(code)
    letters.push(character)
  }

  return letters.join('')
}
