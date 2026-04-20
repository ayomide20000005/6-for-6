/**
 * 6 for 6 - Venue Management System
 * Physical QR Scan Flow + Dark Mode Toggle
 * Clean Text UI - No Icons/Emojis
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Dark Mode Toggle =====
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // ===== Navigation =====
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            const pageId = this.dataset.page;
            document.getElementById('page-' + pageId).classList.add('active');
        });
    });
    
    // ===== Modals =====
    const scanQRModal = document.getElementById('scanQRModal');
    const scanSuccessModal = document.getElementById('scanSuccessModal');
    const viewSessionModal = document.getElementById('viewSessionModal');
    
    const scanQRModalClose = document.getElementById('scanQRModalClose');
    const scanSuccessModalClose = document.getElementById('scanSuccessModalClose');
    const viewSessionModalClose = document.getElementById('viewSessionModalClose');
    
    // Scan QR Buttons (Physical QR Flow)
    const scanBtns = document.querySelectorAll('.scan-btn');
    const scanNewBtn = document.getElementById('scanNewBtn');
    const successRoom = document.getElementById('successRoom');
    const successTime = document.getElementById('successTime');
    
    function openScanModal(roomName = '') {
        scanQRModal.classList.add('active');
        if (roomName) {
            successRoom.textContent = roomName;
        }
    }
    
    scanBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const room = this.dataset.room;
            openScanModal(room);
        });
    });
    
    scanNewBtn.addEventListener('click', function() {
        openScanModal('');
    });
    
    scanQRModalClose.addEventListener('click', function() {
        scanQRModal.classList.remove('active');
    });
    
    // Simulate Scan (Demo)
    document.getElementById('simulateScan').addEventListener('click', function() {
        scanQRModal.classList.remove('active');
        
        // Set current time
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
        successTime.textContent = time;
        
        // Show success
        setTimeout(() => {
            scanSuccessModal.classList.add('active');
        }, 500);
    });
    
    scanSuccessModalClose.addEventListener('click', function() {
        scanSuccessModal.classList.remove('active');
    });
    
    // View Session Buttons
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewSessionModal.classList.add('active');
        });
    });
    
    viewSessionModalClose.addEventListener('click', function() {
        viewSessionModal.classList.remove('active');
    });
    
    // End Session Buttons
    const endSessionBtns = document.querySelectorAll('.end-session-btn');
    endSessionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('End this session? Room will be marked as available.')) {
                alert('Session ended. Room is now available.');
                scanSuccessModal.classList.remove('active');
            }
        });
    });
    
    // Close modals on outside click
    window.addEventListener('click', function(e) {
        if (e.target === scanQRModal) scanQRModal.classList.remove('active');
        if (e.target === scanSuccessModal) scanSuccessModal.classList.remove('active');
        if (e.target === viewSessionModal) viewSessionModal.classList.remove('active');
    });
    
    // ===== Console Info =====
    console.log('6 for 6 - CS Department Venue System');
    console.log('Physical QR Scan Flow + Dark Mode');
    console.log('Portfolio Build - Static HTML/CSS/JS');
});