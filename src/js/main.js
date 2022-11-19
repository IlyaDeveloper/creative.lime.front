const resetScroll = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
    clearTimeout();
  }, 0);
}

const customScroll = () => {
  let win = document.querySelector('html').classList,
    checkPlatform = window.navigator.platform.includes('Win');

  checkPlatform
    ? win.add('--custom-scroll')
    : win.remove('--custom-scroll');
}

const app = () => {
  resetScroll();
  // customScroll();
}

window.addEventListener('DOMContentLoaded', () => {
  console.group('Initialization page')
  app()
  console.groupEnd()
  console.log('✅ Finally Loaded Page')
});
