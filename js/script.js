// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Custom Alert System
    const customAlert = {
        container: document.getElementById('customAlertContainer'),
        modalOverlay: null,
        alertCount: 0,
        
        // Create a modal backdrop if needed
        createModalOverlay() {
            if (!this.modalOverlay) {
                this.modalOverlay = document.createElement('div');
                this.modalOverlay.className = 'custom-alert-modal-overlay';
                document.body.appendChild(this.modalOverlay);
            }
            return this.modalOverlay;
        },
        
        // Create a basic alert
        create(options) {
            const defaults = {
                type: 'info', // info, success, error, loading
                title: '',
                message: '',
                icon: true,
                closeButton: true,
                autoClose: false,
                duration: 3000,
                mode: 'toast', // toast or modal
                onConfirm: null,
                onCancel: null,
                confirmText: 'OK',
                cancelText: 'Cancel',
                showCancel: false
            };
            
            const settings = {...defaults, ...options};
            const id = `alert-${++this.alertCount}`;
            
            // Create alert element
            const alertElement = document.createElement('div');
            alertElement.id = id;
            alertElement.className = `custom-alert ${settings.type} ${settings.mode}`;
            
            // Add icon and title
            let iconHTML = '';
            if (settings.icon) {
                switch(settings.type) {
                    case 'success':
                        iconHTML = '<i class="icon fas fa-check-circle"></i>';
                        break;
                    case 'error':
                        iconHTML = '<i class="icon fas fa-exclamation-circle"></i>';
                        break;
                    case 'loading':
                        iconHTML = '<span class="loader"></span>';
                        break;
                    default:
                        iconHTML = '<i class="icon fas fa-info-circle"></i>';
                }
            }
            
            let titleHTML = '';
            if (settings.title) {
                titleHTML = `<div class="custom-alert-title">${iconHTML}${settings.title}</div>`;
            }
            
            // Add content
            let contentHTML = '';
            if (settings.message) {
                contentHTML = `<div class="custom-alert-content">${settings.message}</div>`;
            }
            
            // Add buttons if needed
            let buttonsHTML = '';
            if (settings.onConfirm || settings.onCancel) {
                buttonsHTML = '<div class="custom-alert-buttons">';
                if (settings.showCancel) {
                    buttonsHTML += `<button class="btn-cancel">${settings.cancelText}</button>`;
                }
                buttonsHTML += `<button class="btn-confirm">${settings.confirmText}</button>`;
                buttonsHTML += '</div>';
            }
            
            // Add close button
            let closeButtonHTML = '';
            if (settings.closeButton && settings.type !== 'loading') {
                closeButtonHTML = '<button class="close-btn">&times;</button>';
            }
            
            // Combine all parts
            alertElement.innerHTML = `${titleHTML}${contentHTML}${buttonsHTML}${closeButtonHTML}`;
            
            // Handle modal mode
            if (settings.mode === 'modal') {
                const overlay = this.createModalOverlay();
                overlay.appendChild(alertElement);
                setTimeout(() => {
                    overlay.classList.add('show');
                    alertElement.classList.add('show');
                }, 10);
            } else {
                // Add to container
                this.container.appendChild(alertElement);
                setTimeout(() => alertElement.classList.add('show'), 10);
            }
            
            // Set up event listeners
            if (settings.closeButton) {
                const closeBtn = alertElement.querySelector('.close-btn');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => this.close(id));
                }
            }
            
            const confirmBtn = alertElement.querySelector('.btn-confirm');
            if (confirmBtn && settings.onConfirm) {
                confirmBtn.addEventListener('click', () => {
                    settings.onConfirm();
                    this.close(id);
                });
            }
            
            const cancelBtn = alertElement.querySelector('.btn-cancel');
            if (cancelBtn && settings.onCancel) {
                cancelBtn.addEventListener('click', () => {
                    settings.onCancel();
                    this.close(id);
                });
            }
            
            // Auto close if needed
            if (settings.autoClose && settings.type !== 'loading') {
                setTimeout(() => this.close(id), settings.duration);
            }
            
            return id;
        },
        
        // Close an alert by ID
        close(id) {
            const alertElement = document.getElementById(id);
            if (!alertElement) return;
            
            alertElement.classList.remove('show');
            
            setTimeout(() => {
                // Check if it's a modal
                if (alertElement.classList.contains('modal')) {
                    if (this.modalOverlay) {
                        this.modalOverlay.classList.remove('show');
                        setTimeout(() => {
                            this.modalOverlay.removeChild(alertElement);
                            if (this.modalOverlay.children.length === 0) {
                                document.body.removeChild(this.modalOverlay);
                                this.modalOverlay = null;
                            }
                        }, 300);
                    }
                } else {
                    // Regular toast alert
                    this.container.removeChild(alertElement);
                }
            }, 300);
        },
        
        // Close all alerts
        closeAll() {
            const alerts = document.querySelectorAll('.custom-alert');
            alerts.forEach(alert => {
                if (alert.id) {
                    this.close(alert.id);
                }
            });
        },
        
        // Helper methods for common alert types
        success(message, title = 'Success', options = {}) {
            return this.create({
                type: 'success',
                title,
                message,
                autoClose: true,
                ...options
            });
        },
        
        error(message, title = 'Error', options = {}) {
            return this.create({
                type: 'error',
                title,
                message,
                ...options
            });
        },
        
        info(message, title = 'Information', options = {}) {
            return this.create({
                type: 'info',
                title,
                message,
                ...options
            });
        },
        
        loading(message = 'Please wait...', title = 'Loading', options = {}) {
            return this.create({
                type: 'loading',
                title,
                message,
                closeButton: false,
                ...options
            });
        },
        
        // Create a modal dialog with confirm/cancel options
        confirm(message, onConfirm, onCancel = null, options = {}) {
            return this.create({
                type: 'info',
                title: options.title || 'Confirm',
                message,
                mode: 'modal',
                onConfirm,
                onCancel,
                showCancel: true,
                confirmText: options.confirmText || 'Confirm',
                cancelText: options.cancelText || 'Cancel',
                ...options
            });
        }
    };

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== "#" && !this.hasAttribute('data-bs-toggle')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });

                // Update active link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Theme toggler functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const htmlTag = document.querySelector('body');

    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlTag.setAttribute('data-bs-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        // Use device preference
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = prefersDarkMode ? 'dark' : 'light';
        htmlTag.setAttribute('data-bs-theme', theme);
        updateThemeIcon(theme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlTag.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        updateThemeIcon(newTheme);
        
        // Show a toast notification
        customAlert.success(`Switched to ${newTheme} mode`, 'Theme Changed', {
            duration: 2000,
            mode: 'toast'
        });
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // Contact form validation and submission with custom alerts
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Validate the form
            let isValid = true;
            
            // Name validation
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('is-invalid');
                isValid = false;
            } else {
                nameInput.classList.remove('is-invalid');
                nameInput.classList.add('is-valid');
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
                emailInput.classList.add('is-valid');
            }
            
            // Message validation
            if (messageInput.value.trim() === '') {
                messageInput.classList.add('is-invalid');
                isValid = false;
            } else {
                messageInput.classList.remove('is-invalid');
                messageInput.classList.add('is-valid');
            }
            
            // If the form is valid, process the submission
            if (isValid) {
                // In a real application, you would send the form data to a server here
                
                // Create a simple success alert directly in the DOM
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-success contact-success-alert';
                alertDiv.innerHTML = `
                    <div class="success-icon-container">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thanks for reaching out, <strong>${nameInput.value.trim()}</strong>.<br>
                    I'll get back to you soon at ${emailInput.value.trim()}.</p>
                    <button class="btn btn-primary mt-3 close-alert-btn">Done</button>
                `;
                
                // Get the modal body and clear previous alerts
                const modalBody = document.querySelector('.modal-body');
                const existingAlerts = modalBody.querySelectorAll('.alert');
                existingAlerts.forEach(alert => alert.remove());
                
                // Add the alert to the top of the modal body
                const firstChild = modalBody.firstChild;
                modalBody.insertBefore(alertDiv, firstChild);
                
                // Hide the form
                const formElements = modalBody.querySelectorAll('.mb-3');
                formElements.forEach(el => el.style.display = 'none');
                
                // Hide the modal footer
                const modalFooter = document.querySelector('.modal-footer');
                if (modalFooter) {
                    modalFooter.style.display = 'none';
                }
                
                // Add event listener to the Done button
                const closeBtn = alertDiv.querySelector('.close-alert-btn');
                closeBtn.addEventListener('click', function() {
                    // Reset the form
                    contactForm.reset();
                    
                    // Remove validation classes
                    nameInput.classList.remove('is-valid');
                    emailInput.classList.remove('is-valid');
                    messageInput.classList.remove('is-valid');
                    
                    // Close the modal
                    const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
                    if (contactModal) {
                        contactModal.hide();
                    }
                    
                    // Set a timeout to reset the form display after the modal is closed
                    setTimeout(() => {
                        // Show the form elements again
                        formElements.forEach(el => el.style.display = '');
                        
                        // Show the modal footer again
                        if (modalFooter) {
                            modalFooter.style.display = '';
                        }
                        
                        // Remove the alert
                        if (alertDiv.parentNode) {
                            alertDiv.parentNode.removeChild(alertDiv);
                        }
                    }, 500);
                });
            } else {
                // Show error message
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-danger contact-error-alert';
                alertDiv.innerHTML = `
                    <div class="error-icon-container">
                        <i class="fas fa-exclamation-circle"></i>
                    </div>
                    <h4>Please Check Your Form</h4>
                    <ul class="error-list">
                        ${!nameInput.validity.valid ? '<li>Enter your name</li>' : ''}
                        ${!emailInput.validity.valid ? '<li>Enter a valid email address</li>' : ''}
                        ${!messageInput.validity.valid ? '<li>Enter your message</li>' : ''}
                    </ul>
                `;
                
                // Get the modal body and clear previous alerts
                const modalBody = document.querySelector('.modal-body');
                const existingAlerts = modalBody.querySelectorAll('.alert');
                existingAlerts.forEach(alert => alert.remove());
                
                // Add the alert to the top of the modal body
                const firstChild = modalBody.firstChild;
                modalBody.insertBefore(alertDiv, firstChild);
                
                // Auto-remove the error alert after 5 seconds
                setTimeout(() => {
                    if (alertDiv.parentNode) {
                        alertDiv.parentNode.removeChild(alertDiv);
                    }
                }, 5000);
            }
        });
    } else {
        console.error('Contact form not found in the DOM');
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Initialize Bootstrap tooltips if any
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}); 