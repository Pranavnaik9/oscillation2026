document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.background = 'transparent';
        }
    });

    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a:not(.dropbtn)').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Handle dropdown click on mobile
        const dropdown = document.querySelector('.dropdown');
        const dropbtn = document.querySelector('.dropbtn');
        if (dropbtn && dropdown) {
            dropbtn.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    }

    // Event Rules Data
    const eventRules = {
        'bgmi': `
            <ul>
                <li>This is a squad-based match (Solo participation not allowed).</li>
                <li>Each team must have 4 players only.</li>
                <li>All matches will be played in Custom Room.</li>
                <li>Emulators are strictly not allowed (Mobile devices only).</li>
                <li>Use of hacks, mods, or cheats will result in immediate disqualification.</li>
                <li>Match details (Room ID & Password) will be shared before the match.</li>
                <li>Late entry will not be allowed once the match starts.</li>
                <li>Team names and in-game names must be appropriate.</li>
                <li>Final decision of the organizers will be binding.</li>
            </ul>
        `,
        'ppt': `
            <ul>
                <li>Participants have to pitch their Startup and Innovation Idea.</li>
                <li>Participation can be individual or in a team (max 4 members).</li>
                <li>Presentation time: 5–7 minutes + 2 minutes Q&A.</li>
                <li>PPT should contain minimum 8 slides and maximum 12 slides.</li>
                <li>Participants must bring their PPT in pen drive or email backup.</li>
                <li>Evaluation will be based on: Innovation, Feasibility, Impact & Presentation.</li>
                <li>Decision of judges will be final.</li>
            </ul>
        `,
        'ai-prompt': `
            <ul>
                <li>This is an individual event.</li>
                <li>Participants will be given a task/problem statement on the spot.</li>
                <li>Only AI tools allowed by the organizers can be used.</li>
                <li>Time limit: 15–20 minutes.</li>
                <li>Prompts must be original and created during the event.</li>
                <li>Copying prompts from others is not allowed.</li>
                <li>Judging criteria: Prompt creativity, Accuracy of output, Efficiency of prompt.</li>
                <li>Organizers’ decision will be final.</li>
            </ul>
        `,
        'quiz': `
            <ul>
                <li>Participation can be individual or team of 2 members.</li>
                <li>Quiz consists of multiple rounds.</li>
                <li>Questions will be based on: Core engineering subjects, Basic programming, General technical knowledge.</li>
                <li>Use of mobile phones or smart devices is strictly prohibited.</li>
                <li>Each question must be answered within the given time limit.</li>
                <li>In case of a tie, tie-breaker questions will be conducted.</li>
                <li>The quiz master’s decision will be final.</li>
            </ul>
        `,
        'circuit': `
            <ul>
                <li>Participation can be individual or team of 2 members.</li>
                <li>Participants will be given a faulty circuit or circuit diagram.</li>
                <li>Time limit: 20–30 minutes.</li>
                <li>Use of only provided components and tools is allowed.</li>
                <li>No external help or internet access is permitted.</li>
                <li>Marks will be awarded based on: Correct identification of fault, Proper circuit connection, Time taken to debug.</li>
                <li>Damaging components intentionally will lead to disqualification.</li>
                <li>Judges’ decision will be final.</li>
            </ul>
        `,
        'trivia': `
            <ul>
                <li>The event will be conducted in online mode.</li>
                <li>Questions will be displayed by screen sharing on the whiteboard.</li>
                <li>Participants must carefully read/watch and submit their answers within the given time.</li>
                <li>Participants must maintain discipline and avoid any unfair means.</li>
                <li>Use of Google, AI tools, or external help is strictly prohibited.</li>
                <li>Each round will have a specific time limit.</li>
                <li>Points will be awarded for correct answers only. In case of a tie, a tie-breaker question will be asked.</li>
                <li>The decision of the judges/organizing committee will be final and binding.</li>
            </ul>
        `
    };

    // Modal Logic
    const modal = document.getElementById('rulesModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-modal');

    // Open Modal Function
    window.openRules = function (eventId, eventName) {
        if (modal && eventRules[eventId]) {
            modalTitle.textContent = eventName + ' Rules';
            modalBody.innerHTML = eventRules[eventId];
            modal.style.display = 'flex';
            // Slight delay to allow display flex to apply before opacity transition
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
    }

    // Close Modal via Button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Wait for transition
        });
    }

    // Close Modal via Outside Click
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });

    // Simple reveal animation for event cards
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.event-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Neural Nexus Particle Animation
    const canvas = document.getElementById('nexus-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = Math.floor((width * height) / 15000); // Responsive count
        const connectionDistance = 150;

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                // Randomly assign type 'orange' or 'blue'
                this.type = Math.random() > 0.5 ? 'orange' : 'blue';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.type === 'orange' ? 'rgba(255, 140, 0, 0.8)' : 'rgba(0, 136, 255, 0.8)';
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Add mouse interaction
        let mouse = { x: null, y: null };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Connect particles to each other
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        // Mix colors based on particle types
                        let strokeColor = '';
                        if (particles[i].type === 'orange' && particles[j].type === 'orange') strokeColor = `rgba(255, 140, 0, ${1 - distance / connectionDistance})`;
                        if (particles[i].type === 'blue' && particles[j].type === 'blue') strokeColor = `rgba(0, 136, 255, ${1 - distance / connectionDistance})`;
                        // If they are different, mix into a whitish/gold or use primary
                        if (particles[i].type !== particles[j].type) strokeColor = `rgba(255, 204, 0, ${1 - distance / connectionDistance})`;

                        ctx.strokeStyle = strokeColor;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                if (mouse.x != null && mouse.y != null) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Slightly stronger connection to mouse
                    if (distance < connectionDistance * 1.5) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 204, 0, ${1 - distance / (connectionDistance * 1.5)})`; // Golden connection
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }

        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Re-initialize to keep density consistent
            particles.length = 0;
            const newCount = Math.floor((width * height) / 15000);
            for (let i = 0; i < newCount; i++) {
                particles.push(new Particle());
            }
        });
    }
    // Countdown Logic
    const targetDate = new Date('March 16, 2026 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');

        if (daysEl && hoursEl && minutesEl) {
            daysEl.textContent = days < 10 ? '0' + days : days;
            hoursEl.textContent = hours < 10 ? '0' + hours : hours;
            minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        }

        if (difference < 0) {
            clearInterval(countdownInterval);
            const countdownContainer = document.querySelector('.hero-countdown');
            if (countdownContainer) {
                countdownContainer.innerHTML = '<h3 class="text-glow">EVENT LIVE!</h3>';
            }
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Urgency Toast Notification
    setTimeout(() => {
        const toast = document.createElement('div');
        toast.className = 'urgency-toast';
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-title">⚠️ REGISTRATION ALERT</span>
                <p>Secure your spot in the Nexus before slots are full!</p>
            </div>
            <button class="toast-close">&times;</button>
        `;
        document.body.appendChild(toast);

        // Close logic
        toast.querySelector('.toast-close').onclick = () => toast.remove();

        // Auto remove after 8 seconds
        setTimeout(() => {
            if (toast) {
                toast.style.transform = 'translateX(120%)';
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 500);
            }
        }, 8000);
    }, 5000); // Appear after 5 seconds
});


