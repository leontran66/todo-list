import './Footer.css';

class Footer {
  constructor() {
    const footer = document.createElement('div');
    footer.id = 'footer';
    this.footer = footer;
  }

  getFooter() {
    return this.footer;
  }

  addCopyright(text) {
    const copyright = document.createElement('div');
    copyright.classList.add('copyright');
    copyright.textContent = text;
    this.footer.appendChild(copyright);
  }
}

export default Footer;
