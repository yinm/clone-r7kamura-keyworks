import Action from '../actions/Action'

export default class ScrollDownAction extends Action {
  run() {
    window.scroll(0, 100)
  }
}
