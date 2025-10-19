// Données des métiers avec leurs salaires
const jobData = {
    '-0.36': { name: 'Average Trencher', salary: -0.36, type: 'loss' },
    '7.25': { name: 'Minimum Wager', salary: 7.25 },
    '13.27': { name: 'MCDO Employee', salary: 13.27 },
    '28.16': { name: 'Average salary US', salary: 28.16 },
    '67.63': { name: 'Software Engineer', salary: 67.63 },
    '241.60': { name: 'PUMPFUN OWNER', salary: 41667 },
    '2080': { name: 'Cupsey', salary: 2080 },
    '9088': { name: 'Fortune 500 CEO', salary: 9088 },
    '331055': { name: 'Twitter Revenue', salary: 331055 },
    '91324': { name: 'Pumpfun revenue', salary: 91324 },
    '408653': { name: 'U.S. Military Spending', salary: 408653 },
    '865385': { name: 'U.S. Deficit Increase', salary: 865385 }
};

// Fonction pour copier l'adresse Solana
function copyAddress() {
    const addressInput = document.getElementById('solana-address');
    addressInput.select();
    addressInput.setSelectionRange(0, 99999); // Pour mobile
    
    try {
        document.execCommand('copy');
        // Feedback visuel
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ Copied!';
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '#007bff';
        }, 2000);
    } catch (err) {
        console.error('Erreur lors de la copie:', err);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeMoneyStreams();
    initializeSlider();
});

// Initialiser le slider personnalisé
function initializeSlider() {
    const slider = document.getElementById('salary-slider');
    const display = document.getElementById('custom-salary-display');
    const customSection = document.querySelector('.custom-salary');
    
    slider.addEventListener('input', function() {
        const value = parseFloat(this.value);
        display.textContent = `$${value.toFixed(2)}`;
        
        // Mettre à jour l'attribut data-salary
        customSection.setAttribute('data-salary', value);
        
        // Recalculer la vitesse d'animation
        updateCustomAnimationSpeed(value);
        
        // Recréer les billets avec la nouvelle vitesse
        const dollarBillsContainer = customSection.querySelector('.dollar-bills');
        dollarBillsContainer.innerHTML = '';
        createDollarBills(dollarBillsContainer, value);
    });
}

// Mettre à jour la vitesse d'animation pour le slider - VITESSES ULTRA LENTES
function updateCustomAnimationSpeed(salary) {
    const customSection = document.querySelector('.custom-salary');
    const dollarBills = customSection.querySelector('.dollar-bills');
    
    // Calculer la vitesse basée sur le salaire - VITESSES ULTRA RALENTIES
    let duration;
    if (salary <= 0) {
        duration = 60; // Ultra lent pour les valeurs négatives
    } else if (salary <= 10) {
        duration = 50;
    } else if (salary <= 25) {
        duration = 40;
    } else if (salary <= 50) {
        duration = 30;
    } else if (salary <= 100) {
        duration = 20;
    } else if (salary <= 500) {
        duration = 15;
    } else if (salary <= 1000) {
        duration = 10; // Beaucoup plus lent
    } else if (salary <= 10000) {
        duration = 8;
    } else {
        duration = 6; // Le plus rapide mais encore très lent
    }
    
    dollarBills.style.setProperty('--animation-duration', duration + 's');
}

// Créer les streams d'argent pour chaque métier
function initializeMoneyStreams() {
    const jobSections = document.querySelectorAll('.job-section');
    
    jobSections.forEach(section => {
        const salary = section.dataset.salary;
        const dollarBillsContainer = section.querySelector('.dollar-bills');
        
        // Créer suffisamment de billets pour remplir l'écran
        createDollarBills(dollarBillsContainer, salary);
    });
}

// Créer les billets d'un dollar avec vraies images
function createDollarBills(container, salary) {
    // Calculer le nombre de billets nécessaires pour une animation vraiment infinie
    const screenWidth = window.innerWidth;
    const billWidth = 158; // 155px + 3px margin
    const numberOfBills = Math.ceil(screenWidth / billWidth) * 2; // Double pour duplication parfaite
    
    // Déterminer quelle image utiliser selon la vitesse
    const billImageUrl = getBillImageUrl(salary);
    
    // Créer les billets
    for (let i = 0; i < numberOfBills; i++) {
        const bill = document.createElement('div');
        bill.className = 'dollar-bill';
        bill.style.backgroundImage = `url('${billImageUrl}')`;
        
        container.appendChild(bill);
    }
    
    // Dupliquer exactement les mêmes billets pour une continuité parfaite
    for (let i = 0; i < numberOfBills; i++) {
        const bill = document.createElement('div');
        bill.className = 'dollar-bill';
        bill.style.backgroundImage = `url('${billImageUrl}')`;
        
        container.appendChild(bill);
    }
}

// Déterminer l'URL de l'image selon le salaire (vitesse)
function getBillImageUrl(salary) {
    const baseUrl = 'https://neal.fun/printing-money/minimized/';
    
    // Selon la vitesse d'animation, utiliser différentes images
    if (salary <= 0) {
        // Valeurs négatives - animation très lente
        return baseUrl + 'dollar-3.png';
    } else if (salary <= 15) {
        // Très bas salaires - image détaillée
        return baseUrl + 'dollar-3.png';
    } else if (salary <= 50) {
        // Salaires moyens - image moyennement détaillée
        return baseUrl + '1000.png';
    } else if (salary <= 500) {
        // Salaires élevés - image moins détaillée
        return baseUrl + '1000-3.png';
    } else {
        // Très hauts salaires - image simplifiée
        return baseUrl + '1000-3-3.png';
    }
}



// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    // Recréer les billets si nécessaire
    const jobSections = document.querySelectorAll('.job-section');
    
    jobSections.forEach(section => {
        const dollarBillsContainer = section.querySelector('.dollar-bills');
        const salary = section.dataset.salary;
        
        // Vider et recréer
        dollarBillsContainer.innerHTML = '';
        createDollarBills(dollarBillsContainer, salary);
    });
});

// Fonction pour calculer le temps pour gagner 1$
function calculateTimeForOneDollar(hourlyRate) {
    const secondsPerHour = 3600;
    const secondsPerDollar = secondsPerHour / hourlyRate;
    return secondsPerDollar;
}

// Fonction pour formater le temps
function formatTime(seconds) {
    if (seconds < 1) {
        return `${Math.round(seconds * 1000)}ms`;
    } else if (seconds < 60) {
        return `${seconds.toFixed(1)}s`;
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}m ${remainingSeconds}s`;
    } else {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    }
}

// Ajouter des informations de temps aux sections (optionnel)
function addTimeInformation() {
    const jobSections = document.querySelectorAll('.job-section');
    
    jobSections.forEach(section => {
        const salary = parseFloat(section.dataset.salary);
        const timeForDollar = calculateTimeForOneDollar(salary);
        const formattedTime = formatTime(timeForDollar);
        
        // Ajouter une info-bulle ou un texte avec le temps
        const timeInfo = document.createElement('div');
        timeInfo.className = 'time-info';
        timeInfo.textContent = `Time to earn $1: ${formattedTime}`;
        timeInfo.style.cssText = `
            font-size: 12px;
            color: #666;
            margin-top: 10px;
            text-align: center;
        `;
        
        section.appendChild(timeInfo);
    });
}

// Démarrer les informations de temps
setTimeout(addTimeInformation, 1000);

// Export des fonctions pour utilisation externe
window.PrintingMoney = {
    calculateTimeForOneDollar,
    formatTime,
    jobData
};
