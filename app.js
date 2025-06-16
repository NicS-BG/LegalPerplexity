// Application Data
const appData = {
  "states": [
    {"code": "NY", "name": "New York", "lastUpdated": "2025-06-16T11:05:00Z"},
    {"code": "CA", "name": "California", "lastUpdated": "2025-06-16T11:04:00Z"},
    {"code": "TX", "name": "Texas", "lastUpdated": "2025-06-16T11:03:00Z"},
    {"code": "FL", "name": "Florida", "lastUpdated": "2025-06-16T11:02:00Z"},
    {"code": "IL", "name": "Illinois", "lastUpdated": "2025-06-16T11:01:00Z"},
    {"code": "PA", "name": "Pennsylvania", "lastUpdated": "2025-06-16T11:00:00Z"},
    {"code": "OH", "name": "Ohio", "lastUpdated": "2025-06-16T10:59:00Z"},
    {"code": "MI", "name": "Michigan", "lastUpdated": "2025-06-16T10:58:00Z"},
    {"code": "NC", "name": "North Carolina", "lastUpdated": "2025-06-16T10:57:00Z"},
    {"code": "GA", "name": "Georgia", "lastUpdated": "2025-06-16T10:56:00Z"}
  ],
  "regulations": {
    "NY": [
      {"title": "NYC Administrative Code Amendment - ESG Investment Requirements", "effectiveDate": "2025-07-01", "impact": "High", "summary": "New ESG screening requirements for all retirement system investments. Prohibits investments in fossil fuel companies with >50% revenue from coal.", "source": "NYC Administrative Code §16-129.1"},
      {"title": "NY State Fiduciary Rule Update", "effectiveDate": "2025-08-15", "impact": "Medium", "summary": "Enhanced fiduciary standards for investment advisers managing public pension assets.", "source": "NY Financial Services Law §408"}
    ],
    "CA": [
      {"title": "California Climate Risk Disclosure Act", "effectiveDate": "2025-09-01", "impact": "High", "summary": "Mandatory climate risk reporting for institutional investors. Requires stress testing for climate scenarios.", "source": "CA Government Code §7511.5"},
      {"title": "CalPERS Tobacco Divestment Expansion", "effectiveDate": "2025-06-30", "impact": "Medium", "summary": "Expands tobacco divestment to include e-cigarette and vaping companies.", "source": "CalPERS Board Resolution 2025-04"}
    ],
    "TX": [
      {"title": "Texas Anti-ESG Investment Act", "effectiveDate": "2025-10-01", "impact": "High", "summary": "Prohibits state pension funds from considering ESG factors in investment decisions. Requires investment committee certification.", "source": "TX Government Code §815.202"},
      {"title": "Texas Boycott Prohibition Extension", "effectiveDate": "2025-07-15", "impact": "Medium", "summary": "Extends boycott prohibitions to include energy transition companies that restrict fossil fuel business.", "source": "TX Government Code §2270.0002"}
    ],
    "FL": [
      {"title": "Florida Investment Protection Act", "effectiveDate": "2025-09-15", "impact": "High", "summary": "Requires state pension funds to prioritize financial returns over ESG considerations.", "source": "FL Statute §215.47"}
    ],
    "IL": [
      {"title": "Illinois Sustainable Investment Policy", "effectiveDate": "2025-08-01", "impact": "Medium", "summary": "Establishes ESG integration framework for state retirement systems.", "source": "IL Public Act 103-0123"}
    ]
  },
  "news": {
    "NY": [
      {"headline": "NYC Pension Funds Target Net Zero by 2040", "source": "Wall Street Journal", "date": "2025-06-15", "sentiment": 0.3, "summary": "NYC Comptroller announces accelerated timeline for pension fund decarbonization."},
      {"headline": "NY Attorney General Investigates Private Equity Fees", "source": "Financial Times", "date": "2025-06-14", "sentiment": -0.2, "summary": "Investigation into fee structures for NY state pension investments."}
    ],
    "CA": [
      {"headline": "CalPERS Votes Against All Oil Company Directors", "source": "Reuters", "date": "2025-06-15", "sentiment": 0.4, "summary": "CalPERS uses voting power to pressure oil companies on climate transition."},
      {"headline": "California Pension Funding Reaches Record High", "source": "Los Angeles Times", "date": "2025-06-13", "sentiment": 0.6, "summary": "Strong market performance boosts California pension system funding ratios."}
    ],
    "TX": [
      {"headline": "Texas Retirement System Challenges ESG Restrictions", "source": "Dallas Morning News", "date": "2025-06-14", "sentiment": -0.1, "summary": "Teacher retirement system requests clarification on ESG investment limitations."},
      {"headline": "Texas Pension Funds Outperform National Average", "source": "Houston Chronicle", "date": "2025-06-12", "sentiment": 0.5, "summary": "Texas public pension systems report strong returns despite ESG restrictions."}
    ],
    "FL": [
      {"headline": "Florida Pension System Divests from ESG Funds", "source": "Miami Herald", "date": "2025-06-13", "sentiment": -0.3, "summary": "State Board of Administration removes ESG-focused funds from investment options."}
    ],
    "IL": [
      {"headline": "Illinois Teachers' Retirement System Adopts Climate Strategy", "source": "Chicago Tribune", "date": "2025-06-12", "sentiment": 0.4, "summary": "TRS announces comprehensive climate investment strategy."}
    ]
  },
  "aiAnalysis": {
    "NY": {
      "concentrationLimits": "Maximum 5% allocation to single issuer for equity investments",
      "prohibitedInvestments": "Companies with >50% revenue from coal, private prisons, tobacco",
      "esgRequirements": "Mandatory ESG screening and climate risk assessment required",
      "sanctionsCompliance": "Full compliance with OFAC sanctions and anti-boycott laws required",
      "confidenceScore": 0.89
    },
    "CA": {
      "concentrationLimits": "Maximum 3% allocation to single issuer for alternative investments",
      "prohibitedInvestments": "Tobacco, thermal coal, private prisons, Sudan-related investments",
      "esgRequirements": "Climate stress testing and ESG integration mandatory",
      "sanctionsCompliance": "Enhanced due diligence for emerging market investments",
      "confidenceScore": 0.92
    },
    "TX": {
      "concentrationLimits": "Maximum 10% allocation to alternative investments",
      "prohibitedInvestments": "Companies that boycott fossil fuel industries",
      "esgRequirements": "ESG considerations prohibited in investment decisions",
      "sanctionsCompliance": "Standard OFAC compliance required",
      "confidenceScore": 0.85
    },
    "FL": {
      "concentrationLimits": "Maximum 7% allocation to single asset class",
      "prohibitedInvestments": "ESG-focused funds, companies with BDS activities",
      "esgRequirements": "ESG factors cannot be primary investment consideration",
      "sanctionsCompliance": "Standard OFAC compliance required",
      "confidenceScore": 0.87
    },
    "IL": {
      "concentrationLimits": "Maximum 5% allocation to single issuer",
      "prohibitedInvestments": "Companies with poor labor practices, tobacco",
      "esgRequirements": "ESG integration encouraged but not mandatory",
      "sanctionsCompliance": "Enhanced due diligence for foreign investments",
      "confidenceScore": 0.84
    }
  },
  "sentimentScores": {
    "NY": 0.2,
    "CA": 0.4,
    "TX": -0.1,
    "FL": 0.1,
    "IL": 0.3,
    "PA": 0.0,
    "OH": 0.2,
    "MI": 0.1,
    "NC": 0.0,
    "GA": -0.1
  },
  "complianceAlerts": {
    "NY": [
      {"type": "Immediate Action Required", "message": "ESG screening requirements effective July 1, 2025", "riskLevel": "High"},
      {"type": "Monitoring Required", "message": "Proposed fiduciary rule changes under review", "riskLevel": "Medium"}
    ],
    "CA": [
      {"type": "Immediate Action Required", "message": "Climate risk disclosure deadline September 1, 2025", "riskLevel": "High"},
      {"type": "Informational Only", "message": "CalPERS board meeting scheduled for June 20", "riskLevel": "Low"}
    ],
    "TX": [
      {"type": "Immediate Action Required", "message": "Anti-ESG certification required by October 1, 2025", "riskLevel": "High"},
      {"type": "Monitoring Required", "message": "Boycott prohibition expansion under legislative review", "riskLevel": "Medium"}
    ],
    "FL": [
      {"type": "Immediate Action Required", "message": "ESG fund divestment deadline August 15, 2025", "riskLevel": "High"}
    ],
    "IL": [
      {"type": "Monitoring Required", "message": "ESG integration guidelines under development", "riskLevel": "Medium"}
    ]
  }
};

// Global state
let currentState = null;
let isRefreshing = false;

// DOM Elements - Initialize after DOM is loaded
let stateSelector, refreshBtn, currentStateInfo, currentStateName, lastUpdated, sentimentIndicator;
let quickStats, mainDashboard, noStateSelected, loadingOverlay;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    stateSelector = document.getElementById('stateSelector');
    refreshBtn = document.getElementById('refreshBtn');
    currentStateInfo = document.getElementById('currentStateInfo');
    currentStateName = document.getElementById('currentStateName');
    lastUpdated = document.getElementById('lastUpdated');
    sentimentIndicator = document.getElementById('sentimentIndicator');
    quickStats = document.getElementById('quickStats');
    mainDashboard = document.getElementById('mainDashboard');
    noStateSelected = document.getElementById('noStateSelected');
    loadingOverlay = document.getElementById('loadingOverlay');
    
    // Initialize functionality
    initializeStateSelector();
    initializeEventListeners();
    updateLastReportDate();
});

// Initialize State Selector
function initializeStateSelector() {
    if (!stateSelector) return;
    
    // Clear existing options except the first one
    stateSelector.innerHTML = '<option value="">Choose a state...</option>';
    
    // Add all states to dropdown
    appData.states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.code;
        option.textContent = `${state.name} (${state.code})`;
        stateSelector.appendChild(option);
    });
}

// Initialize Event Listeners
function initializeEventListeners() {
    if (stateSelector) {
        stateSelector.addEventListener('change', handleStateChange);
    }
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', handleRefresh);
    }
    
    // Report buttons
    const previewBtn = document.getElementById('previewReportBtn');
    const downloadBtn = document.getElementById('downloadReportBtn');
    
    if (previewBtn) {
        previewBtn.addEventListener('click', handlePreviewReport);
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', handleDownloadReport);
    }
}

// Handle State Change
function handleStateChange(event) {
    const stateCode = event.target.value;
    
    if (!stateCode) {
        showNoStateSelected();
        return;
    }
    
    const state = appData.states.find(s => s.code === stateCode);
    if (state) {
        currentState = state;
        updateUI();
    }
}

// Handle Refresh
function handleRefresh() {
    if (isRefreshing || !currentState) return;
    
    isRefreshing = true;
    showLoadingOverlay();
    
    // Update refresh button
    const refreshText = refreshBtn.querySelector('.refresh-text');
    const refreshSpinner = refreshBtn.querySelector('.refresh-spinner');
    
    if (refreshText && refreshSpinner) {
        refreshText.classList.add('hidden');
        refreshSpinner.classList.remove('hidden');
    }
    refreshBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Update last updated time
        currentState.lastUpdated = new Date().toISOString();
        
        // Update UI
        updateUI();
        hideLoadingOverlay();
        
        // Reset refresh button
        if (refreshText && refreshSpinner) {
            refreshText.classList.remove('hidden');
            refreshSpinner.classList.add('hidden');
        }
        refreshBtn.disabled = false;
        isRefreshing = false;
    }, 2000);
}

// Show/Hide UI Elements
function showNoStateSelected() {
    currentState = null;
    if (currentStateInfo) currentStateInfo.classList.add('hidden');
    if (quickStats) quickStats.classList.add('hidden');
    if (mainDashboard) mainDashboard.classList.add('hidden');
    if (noStateSelected) noStateSelected.classList.remove('hidden');
}

function showLoadingOverlay() {
    if (loadingOverlay) loadingOverlay.classList.remove('hidden');
}

function hideLoadingOverlay() {
    if (loadingOverlay) loadingOverlay.classList.add('hidden');
}

// Update UI
function updateUI() {
    if (!currentState) return;
    
    // Show relevant sections
    if (currentStateInfo) currentStateInfo.classList.remove('hidden');
    if (quickStats) quickStats.classList.remove('hidden');
    if (mainDashboard) mainDashboard.classList.remove('hidden');
    if (noStateSelected) noStateSelected.classList.add('hidden');
    
    // Update state info
    updateStateInfo();
    updateQuickStats();
    updateRegulations();
    updateComplianceAlerts();
    updateNewsContent();
    updateAIAnalysis();
    updateESGContent();
}

// Update State Info
function updateStateInfo() {
    if (currentStateName) {
        currentStateName.textContent = currentState.name;
    }
    if (lastUpdated) {
        lastUpdated.textContent = formatDateTime(currentState.lastUpdated);
    }
    
    // Update sentiment
    const sentiment = appData.sentimentScores[currentState.code] || 0;
    updateSentimentIndicator(sentiment);
}

// Update Sentiment Indicator
function updateSentimentIndicator(sentiment) {
    if (!sentimentIndicator) return;
    
    const sentimentFill = sentimentIndicator.querySelector('.sentiment-fill');
    const sentimentScore = sentimentIndicator.querySelector('.sentiment-score');
    
    if (sentimentFill && sentimentScore) {
        // Convert sentiment (-1 to 1) to percentage (0 to 100)
        const percentage = ((sentiment + 1) / 2) * 100;
        sentimentFill.style.width = `${percentage}%`;
        sentimentScore.textContent = sentiment.toFixed(1);
    }
}

// Update Quick Stats
function updateQuickStats() {
    const regulations = appData.regulations[currentState.code] || [];
    const alerts = appData.complianceAlerts[currentState.code] || [];
    
    const totalRegulationsEl = document.getElementById('totalRegulations');
    const recentChangesEl = document.getElementById('recentChanges');
    const highRiskAlertsEl = document.getElementById('highRiskAlerts');
    const esgUpdatesEl = document.getElementById('esgUpdates');
    
    if (totalRegulationsEl) totalRegulationsEl.textContent = regulations.length;
    if (recentChangesEl) recentChangesEl.textContent = regulations.length;
    if (highRiskAlertsEl) highRiskAlertsEl.textContent = alerts.filter(a => a.riskLevel === 'High').length;
    if (esgUpdatesEl) esgUpdatesEl.textContent = regulations.filter(r => r.title.toLowerCase().includes('esg')).length;
}

// Update Regulations
function updateRegulations() {
    const container = document.getElementById('regulationsContent');
    if (!container) return;
    
    const regulations = appData.regulations[currentState.code] || [];
    
    if (regulations.length === 0) {
        container.innerHTML = '<p class="empty-state">No regulatory changes found for this state</p>';
        return;
    }
    
    container.innerHTML = regulations.map(reg => `
        <div class="regulation-item impact-${reg.impact.toLowerCase()}">
            <div class="regulation-header">
                <h4 class="regulation-title">${reg.title}</h4>
                <span class="regulation-impact ${reg.impact.toLowerCase()}">${reg.impact}</span>
            </div>
            <div class="regulation-meta">
                <span>Effective: ${formatDate(reg.effectiveDate)}</span>
            </div>
            <div class="regulation-summary">${reg.summary}</div>
            <div class="regulation-source">Source: ${reg.source}</div>
        </div>
    `).join('');
}

// Update Compliance Alerts
function updateComplianceAlerts() {
    const container = document.getElementById('alertsContent');
    if (!container) return;
    
    const alerts = appData.complianceAlerts[currentState.code] || [];
    
    if (alerts.length === 0) {
        container.innerHTML = '<p class="empty-state">No compliance alerts for this state</p>';
        return;
    }
    
    container.innerHTML = alerts.map(alert => `
        <div class="alert-item">
            <div class="alert-icon ${alert.riskLevel.toLowerCase()}"></div>
            <div class="alert-content">
                <div class="alert-type">${alert.type}</div>
                <div class="alert-message">${alert.message}</div>
            </div>
        </div>
    `).join('');
}

// Update News Content
function updateNewsContent() {
    const container = document.getElementById('newsContent');
    if (!container) return;
    
    const news = appData.news[currentState.code] || [];
    
    if (news.length === 0) {
        container.innerHTML = '<p class="empty-state">No news found for this state</p>';
        return;
    }
    
    container.innerHTML = news.map(item => `
        <div class="news-item">
            <div class="news-header">
                <h4 class="news-headline">${item.headline}</h4>
                <span class="news-sentiment ${getSentimentClass(item.sentiment)}">
                    ${item.sentiment > 0 ? '+' : ''}${item.sentiment.toFixed(1)}
                </span>
            </div>
            <div class="news-meta">
                <span>${item.source}</span>
                <span>${formatDate(item.date)}</span>
            </div>
            <div class="news-summary">${item.summary}</div>
        </div>
    `).join('');
}

// Update AI Analysis
function updateAIAnalysis() {
    const container = document.getElementById('aiAnalysisContent');
    if (!container) return;
    
    const analysis = appData.aiAnalysis[currentState.code];
    
    if (!analysis) {
        container.innerHTML = '<p class="empty-state">No AI analysis available for this state</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="ai-analysis-grid">
            <div class="analysis-item">
                <div class="analysis-label">Concentration Limits</div>
                <div class="analysis-value">${analysis.concentrationLimits}</div>
            </div>
            <div class="analysis-item">
                <div class="analysis-label">Prohibited Investments</div>
                <div class="analysis-value">${analysis.prohibitedInvestments}</div>
            </div>
            <div class="analysis-item">
                <div class="analysis-label">ESG Requirements</div>
                <div class="analysis-value">${analysis.esgRequirements}</div>
            </div>
            <div class="analysis-item">
                <div class="analysis-label">Sanctions Compliance</div>
                <div class="analysis-value">${analysis.sanctionsCompliance}</div>
            </div>
        </div>
        <div class="confidence-score">
            <div class="confidence-label">AI Confidence Score</div>
            <div class="confidence-value">${(analysis.confidenceScore * 100).toFixed(0)}%</div>
        </div>
    `;
}

// Update ESG Content
function updateESGContent() {
    const container = document.getElementById('esgContent');
    if (!container) return;
    
    const analysis = appData.aiAnalysis[currentState.code];
    
    if (!analysis) {
        container.innerHTML = '<p class="empty-state">No ESG requirements available for this state</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="esg-requirements">
            <div class="esg-item">
                <div class="esg-category">ESG Integration</div>
                <div class="esg-description">${analysis.esgRequirements}</div>
            </div>
            <div class="esg-item">
                <div class="esg-category">Investment Restrictions</div>
                <div class="esg-description">${analysis.prohibitedInvestments}</div>
            </div>
        </div>
    `;
}

// Handle Report Functions
function handlePreviewReport() {
    if (!currentState) return;
    
    alert(`Preview Report for ${currentState.name}\n\nThis would open a preview of the weekly regulatory report including:\n- Regulatory changes\n- Compliance alerts\n- Political developments\n- ESG updates`);
}

function handleDownloadReport() {
    if (!currentState) return;
    
    alert(`Download Report for ${currentState.name}\n\nThis would generate and download a PDF report with comprehensive regulatory monitoring data.`);
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getSentimentClass(sentiment) {
    if (sentiment > 0.1) return 'positive';
    if (sentiment < -0.1) return 'negative';
    return 'neutral';
}

function updateLastReportDate() {
    const lastReportDate = document.getElementById('lastReportDate');
    if (lastReportDate) {
        const now = new Date();
        const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        lastReportDate.textContent = formatDate(lastWeek.toISOString());
    }
}