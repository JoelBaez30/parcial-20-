/**
 * Clase encargada de manejar las animaciones de aparición al hacer scroll (Observer API)
 */
class ScrollAnimator {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.initObserver();
    }

    initObserver() {
        const options = { threshold: 0.15 };

        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observerInstance.unobserve(entry.target);
                }
            });
        }, options);

        this.elements.forEach(element => observer.observe(element));
    }
}

// Inicialización de la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const animator = new ScrollAnimator('.animate-on-scroll');
});