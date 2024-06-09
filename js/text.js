// class TextScramble {
//   constructor(el) {
//     this.el = el;
//     this.chars = "!<>-_\\/[]{}—=+*^?#________";
//     this.update = this.update.bind(this);
//   }
//   setText(newText) {
//     const oldText = this.el.innerText;
//     const length = Math.max(oldText.length, newText.length);
//     const promise = new Promise((resolve) => (this.resolve = resolve));
//     this.queue = [];
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || "";
//       const to = newText[i] || "";
//       const start = Math.floor(Math.random() * 40);
//       const end = start + Math.floor(Math.random() * 40);
//       this.queue.push({ from, to, start, end });
//     }
//     cancelAnimationFrame(this.frameRequest);
//     this.frame = 0;
//     this.update();
//     return promise;
//   }
//   update() {
//     let output = "";
//     let complete = 0;
//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i];
//       if (this.frame >= end) {
//         complete++;
//         output += to;
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.28) {
//           char = this.randomChar();
//           this.queue[i].char = char;
//         }
//         output += `<span class="dud">${char}</span>`;
//       } else {
//         output += from;
//       }
//     }
//     this.el.innerHTML = output;
//     if (complete === this.queue.length) {
//       this.resolve();
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update);
//       this.frame++;
//     }
//   }
//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)];
//   }
// }

// // Récupérer tous les spans dans .skills-collumns
// const spans = document.querySelectorAll('.skills-collumns span');

// // Appliquer l'effet de scramble sur un span aléatoire toutes les 15 secondes
// setInterval(() => {
//   const randomIndex = Math.floor(Math.random() * spans.length);
//   const span = spans[randomIndex];
//   const fx = new TextScramble(span);
//   fx.setText(span.innerText);
//   setTimeout(() => {
//     fx.setText(span.innerText);
//   }, 1000);
// }, 5000);

// class TextScramble {
//   constructor(el) {
//     this.el = el;
//     this.chars = "!<>-_\\/[]{}—=+*^?#________";
//     this.update = this.update.bind(this);
//   }
//   setText(newText) {
//     const oldText = this.el.innerText;
//     const length = Math.max(oldText.length, newText.length);
//     const promise = new Promise((resolve) => (this.resolve = resolve));
//     this.queue = [];
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || "";
//       const to = newText[i] || "";
//       const start = Math.floor(Math.random() * 20); // Réduction du nombre de caractères aléatoires
//       const end = start + Math.floor(Math.random() * 20); // Réduction du nombre de caractères aléatoires
//       this.queue.push({ from, to, start, end });
//     }
//     cancelAnimationFrame(this.frameRequest);
//     this.frame = 0;
//     this.update();
//     return promise;
//   }
//   update() {
//     let output = "";
//     let complete = 0;
//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i];
//       if (this.frame >= end) {
//         complete++;
//         output += to;
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.5) { // Réduire la probabilité de substitution
//           char = this.randomChar();
//           this.queue[i].char = char;
//         }
//         output += `<span class="dud">${char}</span>`;
//       } else {
//         output += from;
//       }
//     }
//     this.el.innerHTML = output;
//     if (complete === this.queue.length) {
//       this.resolve();
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update);
//       this.frame++;
//     }
//   }
//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)];
//   }
// }

// // Récupérer tous les spans dans .skills-collumns
// const spans = document.querySelectorAll('.skills-collumns span');

// // Appliquer l'effet de scramble sur un span aléatoire toutes les 15 secondes
// setInterval(() => {
//   const randomIndex = Math.floor(Math.random() * spans.length);
//   const span = spans[randomIndex];
//   const fx = new TextScramble(span);
//   fx.setText(span.innerText);
//   setTimeout(() => {
//     fx.setText(span.innerText);
//   }, 1000);
// }, 5000);

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 20); // Réduction du nombre de caractères aléatoires
      const end = start + Math.floor(Math.random() * 20); // Réduction du nombre de caractères aléatoires
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.5) { // Réduire la probabilité de substitution
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Récupérer tous les spans dans .skills-collumns
const spans = document.querySelectorAll('.skills-collumns span');

// Appliquer l'effet de scramble sur un span aléatoire toutes les 15 secondes
setInterval(() => {
  const randomIndex = Math.floor(Math.random() * spans.length);
  const span = spans[randomIndex];
  const originalText = span.innerText;
  const fx = new TextScramble(span);
  fx.setText(originalText);
  setTimeout(() => {
    fx.setText(originalText);
  }, 1000);
}, 5000);