/*
========================================
NIET Hub - Complete JavaScript
Created by: Devesh Giri
========================================
*/

let modalState = {
    branch: null,
    year: null,
    semester: null
};

let currentRating = 0;

const materials = {
    'cse': {
        '1': {
            '1': {
                study: [
                    { name: 'Mathematics-I Complete Notes', type: 'PDF', size: '2.5 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Physics Fundamentals', type: 'PDF', size: '3.2 MB', icon: 'fas fa-file-pdf' },
                    { name: 'C Programming Guide', type: 'PDF', size: '4.1 MB', icon: 'fas fa-file-pdf' },
                    { name: 'English Communication', type: 'DOC', size: '1.8 MB', icon: 'fas fa-file-word' },
                    { name: 'Engineering Graphics', type: 'PPT', size: '12.5 MB', icon: 'fas fa-file-powerpoint' }
                ],
                pyq: [
                    { name: 'Math Mid Term 2024', type: 'PDF', size: '856 KB', icon: 'fas fa-file-alt' },
                    { name: 'Physics End Term 2024', type: 'PDF', size: '1.2 MB', icon: 'fas fa-file-alt' },
                    { name: 'C Programming Quiz 2024', type: 'PDF', size: '980 KB', icon: 'fas fa-file-alt' },
                    { name: 'Engineering Graphics 2024', type: 'PDF', size: '1.5 MB', icon: 'fas fa-file-alt' }
                ]
            },
            '2': {
                study: [
                    { name: 'Mathematics-II Advanced', type: 'PDF', size: '3.2 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Data Structures Intro', type: 'PPT', size: '8.9 MB', icon: 'fas fa-file-powerpoint' },
                    { name: 'OOP Concepts', type: 'PDF', size: '5.5 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Digital Electronics', type: 'PDF', size: '4.2 MB', icon: 'fas fa-file-pdf' }
                ],
                pyq: [
                    { name: 'Math-II Final 2024', type: 'PDF', size: '1.1 MB', icon: 'fas fa-file-alt' },
                    { name: 'DS Quiz Papers 2024', type: 'PDF', size: '1.5 MB', icon: 'fas fa-file-alt' },
                    { name: 'OOP Final 2024', type: 'PDF', size: '1.3 MB', icon: 'fas fa-file-alt' }
                ]
            }
        },
        '2': {
            '3': {
                study: [
                    { name: 'Discrete Mathematics', type: 'PDF', size: '4.2 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Computer Architecture', type: 'PPT', size: '18.7 MB', icon: 'fas fa-file-powerpoint' },
                    { name: 'Advanced OOP', type: 'PDF', size: '6.8 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Database Management', type: 'PDF', size: '5.9 MB', icon: 'fas fa-file-pdf' }
                ],
                pyq: [
                    { name: 'Discrete Math Mid 2024', type: 'PDF', size: '1.3 MB', icon: 'fas fa-file-alt' },
                    { name: 'Computer Arch Final 2024', type: 'PDF', size: '1.8 MB', icon: 'fas fa-file-alt' },
                    { name: 'DBMS Practicals 2024', type: 'PDF', size: '2.1 MB', icon: 'fas fa-file-alt' }
                ]
            },
            '4': {
                study: [
                    { name: 'Algorithm Design', type: 'PDF', size: '5.1 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Database Systems', type: 'PPT', size: '22.4 MB', icon: 'fas fa-file-powerpoint' },
                    { name: 'Operating Systems', type: 'PDF', size: '7.9 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Computer Networks', type: 'PDF', size: '6.5 MB', icon: 'fas fa-file-pdf' }
                ],
                pyq: [
                    { name: 'Algorithms Final 2024', type: 'PDF', size: '1.6 MB', icon: 'fas fa-file-alt' },
                    { name: 'DBMS Practical 2024', type: 'PDF', size: '1.9 MB', icon: 'fas fa-file-alt' },
                    { name: 'OS End Term 2024', type: 'PDF', size: '1.7 MB', icon: 'fas fa-file-alt' }
                ]
            }
        },
        '3': {
            '5': {
                study: [
                    { name: 'Machine Learning Basics', type: 'PDF', size: '8.3 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Software Engineering', type: 'PPT', size: '15.2 MB', icon: 'fas fa-file-powerpoint' },
                    { name: 'Web Technologies', type: 'PDF', size: '6.7 MB', icon: 'fas fa-file-pdf' }
                ],
                pyq: [
                    { name: 'ML Mid Term 2024', type: 'PDF', size: '2.1 MB', icon: 'fas fa-file-alt' },
                    { name: 'SE Final 2024', type: 'PDF', size: '1.8 MB', icon: 'fas fa-file-alt' }
                ]
            },
            '6': {
                study: [
                    { name: 'Cloud Computing', type: 'PDF', size: '7.5 MB', icon: 'fas fa-file-pdf' },
                    { name: 'AI Fundamentals', type: 'PPT', size: '19.8 MB', icon: 'fas fa-file-powerpoint' },
                    { name: 'Blockchain Technology', type: 'PDF', size: '5.4 MB', icon: 'fas fa-file-pdf' }
                ],
                pyq: [
                    { name: 'Cloud Computing 2024', type: 'PDF', size: '1.9 MB', icon: 'fas fa-file-alt' },
                    { name: 'AI Final 2024', type: 'PDF', size: '2.3 MB', icon: 'fas fa-file-alt' }
                ]
            }
        }
    },
    'it': {
        '1': {
            '1': {
                study: [
                    { name: 'IT Fundamentals', type: 'PDF', size: '2.8 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Network Basics', type: 'PPT', size: '10.2 MB', icon: 'fas fa-file-powerpoint' },
                    { name: 'Database Concepts', type: 'PDF', size: '3.5 MB', icon: 'fas fa-file-pdf' }
                ],
                pyq: [
                    { name: 'IT Fundamentals Exam 2024', type: 'PDF', size: '950 KB', icon: 'fas fa-file-alt' },
                    { name: 'Network Quiz 2024', type: 'PDF', size: '1.2 MB', icon: 'fas fa-file-alt' }
                ]
            },
            '2': {
                study: [
                    { name: 'Advanced Networking', type: 'PDF', size: '4.5 MB', icon: 'fas fa-file-pdf' },
                    { name: 'Web Development Intro', type: 'PPT', size: '11.3 MB', icon: 'fas fa-file-powerpoint' }
                ],
                pyq: [
                    { name: 'Networking Final 2024', type: 'PDF', size: '1.4 MB', icon: 'fas fa-file-alt' }
                ]
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    init();
});

function init() {
    setupNavigation();
    setupFilters();
    setupRating();
    setupScroll();
    console.log('NIET Hub loaded successfully!');
    console.log('Made by Devesh Giri - er.deveshgiri@gmail.com');
}

function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    const searchInput = document.getElementById('branch-search');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.branch-chip');
    const schools = document.querySelectorAll('.school-compact');
    
    let hasResults = false;
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'flex';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    schools.forEach(school => {
        const visibleChips = school.querySelectorAll('.branch-chip[style*="flex"]');
        if (visibleChips.length === 0 && query !== '') {
            school.style.display = 'none';
        } else {
            school.style.display = 'block';
        }
    });
}

function startVoice() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
            showToast('Listening...', 'info');
        };
        
        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            document.getElementById('branch-search').value = text;
            handleSearch({ target: { value: text } });
        };
        
        recognition.onerror = () => {
            showToast('Voice search failed. Please try again.', 'error');
        };
        
        recognition.start();
    } else {
        showToast('Voice search not supported in your browser', 'error');
    }
}

function openBranchModal(id, name) {
    modalState.branch = { id, name };
    
    document.getElementById('currentBranch').textContent = name;
    
    const modal = document.getElementById('modalOverlay');
    modal.classList.add('active');
    
    showModalView('yearView');
    
    document.body.style.overflow = 'hidden';
    
    showToast(`Selected: ${name}`, 'success');
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    
    modalState = { branch: null, year: null, semester: null };
    
    document.body.style.overflow = '';
}

function resetToHome() {
    closeModal();
    scrollTo('academic-resources');
}

function showModalView(viewId) {
    document.querySelectorAll('.modal-view').forEach(view => {
        view.classList.add('hidden');
    });
    document.getElementById(viewId).classList.remove('hidden');
}

function selectYearModal(num, name) {
    modalState.year = { num, name };
    
    updateModalBreadcrumb();
    
    generateSemestersModal(num);
    
    showModalView('semesterView');
    
    showToast(`Selected: ${name}`, 'success');
}

function generateSemestersModal(year) {
    const grid = document.getElementById('semesterGridModal');
    const start = (year - 1) * 2 + 1;
    const end = year * 2;
    
    grid.innerHTML = '';
    
    for (let i = start; i <= end; i++) {
        const card = document.createElement('div');
        card.className = 'semester-card-modal';
        card.onclick = () => selectSemesterModal(i, `Semester ${i}`);
        
        card.innerHTML = `
            <h4>Semester ${i}</h4>
            <p>${getSemesterDesc(i)}</p>
        `;
        
        grid.appendChild(card);
    }
}

function getSemesterDesc(num) {
    const desc = {
        1: "Foundation & Basic Sciences",
        2: "Mathematics & Programming",
        3: "Core Computer Concepts",
        4: "Advanced Core Topics",
        5: "Specialization Subjects",
        6: "Advanced Specialization",
        7: "Industry Projects & Training",
        8: "Final Project & Placement"
    };
    return desc[num] || "Academic Semester";
}

function selectSemesterModal(num, name) {
    modalState.semester = { num, name };
    
    updateModalBreadcrumb();
    
    loadMaterialsModal();
    
    showModalView('materialsView');
    
    showToast('Loading materials...', 'success');
}

function loadMaterialsModal() {
    const studyList = document.getElementById('studyListModal');
    const pyqList = document.getElementById('pyqListModal');
    
    const data = materials[modalState.branch.id]?.[modalState.year.num]?.[modalState.semester.num];
    
    if (data) {
        studyList.innerHTML = generateMaterialsHTML(data.study);
        pyqList.innerHTML = generateMaterialsHTML(data.pyq);
    } else {
        const noData = `
            <div style="text-align: center; padding: 40px; color: #64748b;">
                <i class="fas fa-folder-open" style="font-size: 48px; opacity: 0.3; margin-bottom: 16px;"></i>
                <p style="margin-bottom: 8px;">Materials coming soon</p>
                <p style="font-size: 14px;">Contact: <strong>er.deveshgiri@gmail.com</strong></p>
            </div>
        `;
        studyList.innerHTML = noData;
        pyqList.innerHTML = noData;
    }
}

function generateMaterialsHTML(items) {
    if (!items || items.length === 0) {
        return '<p style="text-align: center; color: #94a3b8; padding: 20px;">No materials available</p>';
    }
    
    return items.map(item => `
        <div class="material-item">
            <div class="material-info">
                <div class="material-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div class="material-details">
                    <h5>${item.name}</h5>
                    <p>${item.type} • ${item.size}</p>
                </div>
            </div>
            <div class="material-actions">
                <button class="btn-view" onclick="viewMaterial('${item.name}')">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="btn-download" onclick="downloadMaterial('${item.name}')">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        </div>
    `).join('');
}

function viewMaterial(name) {
    showToast(`Opening ${name} for preview...`, 'info');
}

function downloadMaterial(name) {
    showToast(`Downloading ${name}...`, 'success');
}

function updateModalBreadcrumb() {
    const breadcrumb = document.getElementById('modalBreadcrumb');
    let html = `
        <span class="breadcrumb-item clickable" onclick="resetToHome()">
            <i class="fas fa-home"></i> Home
        </span>
        <i class="fas fa-chevron-right"></i>
        <span class="breadcrumb-item clickable" onclick="goBackToBranchModal()">
            ${modalState.branch.name}
        </span>
    `;
    
    if (modalState.year) {
        html += `
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-item clickable" onclick="goBackToYearModal()">
                ${modalState.year.name}
            </span>
        `;
    }
    
    if (modalState.semester) {
        html += `
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-item active">
                Semester ${modalState.semester.num}
            </span>
        `;
    }
    
    breadcrumb.innerHTML = html;
}

function goBackToBranchModal() {
    modalState.year = null;
    modalState.semester = null;
    showModalView('yearView');
    updateModalBreadcrumb();
}

function goBackToYearModal() {
    modalState.semester = null;
    showModalView('semesterView');
    generateSemestersModal(modalState.year.num);
    updateModalBreadcrumb();
}

function goBackToSemesterModal() {
    showModalView('semesterView');
    updateModalBreadcrumb();
}

function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.tutorial-card');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function setupRating() {
    const stars = document.querySelectorAll('.rating-stars i');
    
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStars(index + 1);
            showToast(`Rated ${currentRating} stars`, 'success');
        });
        
        star.addEventListener('mouseenter', () => {
            updateStars(index + 1);
        });
    });
    
    const container = document.querySelector('.rating-stars');
    if (container) {
        container.addEventListener('mouseleave', () => {
            updateStars(currentRating);
        });
    }
}

function updateStars(rating) {
    const stars = document.querySelectorAll('.rating-stars i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitFeedback(e) {
    e.preventDefault();
    
    if (currentRating === 0) {
        showToast('Please provide a rating before submitting', 'error');
        return;
    }
    
    const btn = e.target.querySelector('.btn-submit');
    const originalHTML = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    
    setTimeout(() => {
        showToast('Thank you for your valuable feedback!', 'success');
        e.target.reset();
        currentRating = 0;
        updateStars(0);
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    }, 2000);
}

function setupScroll() {
    const scrollBtn = document.getElementById('scrollTop');
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (scrolled > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        const offset = 80;
        const pos = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
    }
}

function showDashboard() {
    showToast('Dashboard coming soon! Stay tuned for amazing features 🚀', 'info');
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    let icon = 'fa-info-circle';
    let color = '#667eea';
    
    if (type === 'success') {
        icon = 'fa-check-circle';
        color = '#10b981';
    } else if (type === 'error') {
        icon = 'fa-exclamation-circle';
        color = '#ef4444';
    }
    
    toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <i class="fas ${icon}" style="color: ${color}; font-size: 24px;"></i>
            <span style="flex: 1; color: #0f172a; font-weight: 500;">${message}</span>
            <button onclick="hideToast()" style="background: none; border: none; color: #64748b; cursor: pointer; font-size: 20px;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        hideToast();
    }, 4000);
}

function hideToast() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.remove('show');
    }
}

document.addEventListener('click', (e) => {
    const modal = document.getElementById('modalOverlay');
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log('%c🎓 NIET Student Hub', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%c💻 Created by Devesh Giri', 'font-size: 14px; color: #64748b;');
console.log('%c📧 er.deveshgiri@gmail.com', 'font-size: 12px; color: #06b6d4;');
console.log('%c🚀 Made with ❤️ for NIET Students', 'font-size: 12px; color: #10b981;');
