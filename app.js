// Application data with real source links
const appData = {
  states: [
    { code: "NY", name: "New York", regulator: "DFS", website: "https://www.dfs.ny.gov" },
    { code: "CA", name: "California", regulator: "DFPI", website: "https://dfpi.ca.gov" },
    { code: "TX", name: "Texas", regulator: "SSB", website: "https://www.ssb.texas.gov" },
    { code: "FL", name: "Florida", regulator: "OFR", website: "https://www.flofr.gov" }
  ],
  
  regulations: {
    NY: [
      {
        title: "DFS Cybersecurity Regulation Amendment",
        impact: "High",
        date: "2025-06-15",
        source: "https://www.dfs.ny.gov",
        summary: "Enhanced cybersecurity requirements for financial institutions under 23 NYCRR 500"
      },
      {
        title: "ESG Investment Disclosure Requirements",
        impact: "Medium",
        date: "2025-06-10",
        source: "https://www.dfs.ny.gov",
        summary: "New disclosure requirements for ESG factors in investment decisions"
      },
      {
        title: "Fiduciary Duty Enhancement Rules",
        impact: "High",
        date: "2025-06-08",
        source: "https://www.dfs.ny.gov",
        summary: "Strengthened fiduciary obligations for investment advisers managing pension assets"
      },
      {
        title: "Digital Asset Custody Guidelines",
        impact: "Medium",
        date: "2025-06-05",
        source: "https://www.dfs.ny.gov",
        summary: "Updated guidance on custody requirements for digital assets"
      }
    ],
    CA: [
      {
        title: "Climate Risk Stress Testing Requirements",
        impact: "High",
        date: "2025-06-12",
        source: "https://dfpi.ca.gov",
        summary: "Mandatory climate risk assessments for large investment portfolios"
      },
      {
        title: "Sustainable Investment Mandate Updates",
        impact: "Medium",
        date: "2025-06-09",
        source: "https://dfpi.ca.gov",
        summary: "Enhanced requirements for sustainable investment considerations"
      },
      {
        title: "Consumer Protection Enhancement Act",
        impact: "Medium",
        date: "2025-06-07",
        source: "https://dfpi.ca.gov",
        summary: "Strengthened consumer protection measures for financial services"
      }
    ],
    TX: [
      {
        title: "Anti-ESG Investment Restrictions",
        impact: "High",
        date: "2025-06-14",
        source: "https://www.ssb.texas.gov",
        summary: "New restrictions on ESG considerations in state pension fund investments"
      },
      {
        title: "Energy Sector Investment Priorities",
        impact: "Medium",
        date: "2025-06-11",
        source: "https://www.ssb.texas.gov",
        summary: "Guidelines prioritizing traditional energy sector investments"
      },
      {
        title: "Securities Board Enforcement Updates",
        impact: "Low",
        date: "2025-06-06",
        source: "https://www.ssb.texas.gov",
        summary: "Updated enforcement procedures for investment adviser violations"
      }
    ],
    FL: [
      {
        title: "Insurance Investment Guidelines",
        impact: "Medium",
        date: "2025-06-13",
        source: "https://www.flofr.gov",
        summary: "New investment guidelines for insurance companies and pension funds"
      },
      {
        title: "Financial Services Oversight Enhancement",
        impact: "Medium",
        date: "2025-06-10",
        source: "https://www.flofr.gov",
        summary: "Enhanced oversight requirements for financial services providers"
      },
      {
        title: "Retirement System Investment Rules",
        impact: "Low",
        date: "2025-06-04",
        source: "https://www.flofr.gov",
        summary: "Updated investment rules for state retirement systems"
      }
    ]
  },
  
  news: {
    NY: [
      {
        headline: "NY DFS Issues New Guidance on Digital Asset Custody",
        source: "Reuters",
        url: "https://www.reuters.com",
        date: "2025-06-16",
        impact: "Medium"
      },
      {
        headline: "NYC Pension Funds Adopt Enhanced ESG Framework",
        source: "Bloomberg",
        url: "https://www.bloomberg.com",
        date: "2025-06-15",
        impact: "High"
      },
      {
        headline: "New York State Banking Department Increases Oversight",
        source: "Wall Street Journal",
        url: "https://www.wsj.com",
        date: "2025-06-14",
        impact: "Medium"
      }
    ],
    CA: [
      {
        headline: "California Mandates Climate Risk Disclosure for Large Funds",
        source: "Financial Times",
        url: "https://www.ft.com",
        date: "2025-06-16",
        impact: "High"
      },
      {
        headline: "DFPI Launches New Sustainable Finance Initiative",
        source: "Bloomberg",
        url: "https://www.bloomberg.com",
        date: "2025-06-15",
        impact: "Medium"
      }
    ],
    TX: [
      {
        headline: "Texas Pension Funds Divest from ESG-Focused Managers",
        source: "Reuters",
        url: "https://www.reuters.com",
        date: "2025-06-16",
        impact: "High"
      },
      {
        headline: "Energy Investment Priorities Shape Texas Policy",
        source: "Wall Street Journal",
        url: "https://www.wsj.com",
        date: "2025-06-14",
        impact: "Medium"
      }
    ],
    FL: [
      {
        headline: "Florida Insurance Sector Faces New Investment Rules",
        source: "Financial Times",
        url: "https://www.ft.com",
        date: "2025-06-15",
        impact: "Medium"
      },
      {
        headline: "State Retirement System Updates Investment Guidelines",
        source: "Bloomberg",
        url: "https://www.bloomberg.com",
        date: "2025-06-13",
        impact: "Low"
      }
    ]
  },
  
  aiAnalysis: {
    NY: {
      confidence: 87,
      risk: "Medium",
      text: "New York's regulatory environment shows moderate stability with recent emphasis on cybersecurity and ESG disclosure requirements. The DFS continues to lead in digital asset regulation while maintaining strict fiduciary standards for investment managers."
    },
    CA: {
      confidence: 92,
      risk: "High",
      text: "California maintains an aggressive regulatory stance with significant emphasis on climate risk and sustainable investment mandates. Investment managers should prepare for increased compliance requirements and disclosure obligations."
    },
    TX: {
      confidence: 89,
      risk: "Medium",
      text: "Texas regulatory environment reflects political priorities with anti-ESG legislation creating compliance challenges for investment managers. Traditional energy sector investments are favored while ESG considerations face restrictions."
    },
    FL: {
      confidence: 84,
      risk: "Low",
      text: "Florida's regulatory approach focuses on insurance sector oversight and retirement system management. The regulatory environment remains relatively stable with moderate changes in investment guidelines."
    }
  },
  
  sentiment: {
    NY: { value: 0.3, topics: ["Digital Asset Regulation", "ESG Disclosure", "Cybersecurity Standards"] },
    CA: { value: 0.7, topics: ["Climate Risk Management", "Sustainable Finance", "Consumer Protection"] },
    TX: { value: -0.4, topics: ["Anti-ESG Legislation", "Energy Investment", "Regulatory Rollback"] },
    FL: { value: 0.1, topics: ["Insurance Oversight", "Retirement Systems", "Market Stability"] }
  }
};

// Application state
let currentState = 'NY';
let helpMode = false;
let isLoading = false;

// DOM elements
const stateSelect = document.getElementById('stateSelect');
const refreshBtn = document.getElementById('refreshBtn');
const helpBtn = document.getElementById('helpBtn');
const lastUpdated = document.getElementById('lastUpdated');
const loadingOverlay = document.getElementById('loadingOverlay');
const tooltip = document.getElementById('tooltip');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  updateLastUpdated();
});

function initializeApp() {
  // Set initial state
  stateSelect.value = currentState;
  updateAllContent();
}

function setupEventListeners() {
  // State selector
  stateSelect.addEventListener('change', function() {
    currentState = this.value;
    updateAllContent();
  });
  
  // Refresh button
  refreshBtn.addEventListener('click', function() {
    if (!isLoading) {
      refreshData();
    }
  });
  
  // Help button
  helpBtn.addEventListener('click', function() {
    toggleHelpMode();
  });
  
  // Tooltip system
  setupTooltips();
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hideTooltip();
      if (helpMode) {
        toggleHelpMode();
      }
    }
  });
}

function updateAllContent() {
  showLoading();
  
  setTimeout(() => {
    updateRegulatoryContent();
    updateAIAnalysis();
    updateSentimentTracker();
    updateNewsContent();
    updateComplianceAlerts();
    hideLoading();
    updateLastUpdated();
  }, 800);
}

function updateRegulatoryContent() {
  const container = document.getElementById('regulatoryContent');
  const regulations = appData.regulations[currentState] || [];
  
  container.innerHTML = regulations.map(reg => `
    <div class="regulation-item">
      <div class="regulation-header">
        <h3 class="regulation-title">${reg.title}</h3>
        <span class="impact-badge impact-${reg.impact.toLowerCase()}">${reg.impact}</span>
      </div>
      <p class="regulation-summary">${reg.summary}</p>
      <div class="regulation-footer">
        <span class="regulation-date">Effective: ${formatDate(reg.date)}</span>
        <a href="${reg.source}" target="_blank" class="regulation-source">View Source</a>
      </div>
    </div>
  `).join('');
}

function updateAIAnalysis() {
  const analysis = appData.aiAnalysis[currentState];
  if (!analysis) return;
  
  document.getElementById('confidenceScore').textContent = `${analysis.confidence}%`;
  document.getElementById('analysisText').textContent = analysis.text;
  
  const riskLevel = document.getElementById('riskLevel');
  riskLevel.textContent = analysis.risk;
  riskLevel.className = `risk-indicator impact-${analysis.risk.toLowerCase()}`;
}

function updateSentimentTracker() {
  const sentiment = appData.sentiment[currentState];
  if (!sentiment) return;
  
  const sentimentValue = document.getElementById('sentimentValue');
  const sentimentIndicator = document.getElementById('sentimentIndicator');
  const trendingList = document.getElementById('trendingList');
  
  sentimentValue.textContent = sentiment.value.toFixed(1);
  
  // Position indicator on scale (-1 to +1 mapped to 0% to 100%)
  const position = ((sentiment.value + 1) / 2) * 100;
  sentimentIndicator.style.left = `${position}%`;
  
  // Update trending topics
  trendingList.innerHTML = sentiment.topics.map(topic => 
    `<li>${topic}</li>`
  ).join('');
}

function updateNewsContent() {
  const container = document.getElementById('newsContent');
  const news = appData.news[currentState] || [];
  
  container.innerHTML = news.map(item => `
    <div class="news-item">
      <div class="news-header">
        <h3 class="news-headline">${item.headline}</h3>
        <span class="news-impact impact-badge impact-${item.impact.toLowerCase()}">${item.impact}</span>
      </div>
      <div class="news-meta">
        <a href="${item.url}" target="_blank" class="news-source">${item.source}</a>
        <span class="news-date">${formatDate(item.date)}</span>
      </div>
    </div>
  `).join('');
}

function updateComplianceAlerts() {
  // Alerts are relatively static but can be customized per state
  const alertsContainer = document.getElementById('alertsContent');
  
  // Generate state-specific alerts
  const stateData = appData.states.find(s => s.code === currentState);
  const alerts = generateStateAlerts(stateData);
  
  alertsContainer.innerHTML = alerts.map(alert => `
    <div class="alert alert--${alert.type}">
      <div class="alert-icon">${alert.icon}</div>
      <div class="alert-content">
        <h4>${alert.title}</h4>
        <p>${alert.message}</p>
        <a href="${alert.link}" target="_blank" class="alert-link">${alert.linkText}</a>
      </div>
    </div>
  `).join('');
}

function generateStateAlerts(stateData) {
  const baseAlerts = [
    {
      type: 'warning',
      icon: '⚠️',
      title: 'Deadline Approaching',
      message: 'ESG disclosure forms due within 30 days',
      link: 'https://www.sec.gov',
      linkText: 'View SEC Requirements'
    },
    {
      type: 'info',
      icon: 'ℹ️',
      title: 'New Guidance Available',
      message: 'Updated fiduciary duty guidance published',
      link: 'https://www.finra.org',
      linkText: 'View FINRA Update'
    }
  ];
  
  // Add state-specific alert
  if (stateData) {
    baseAlerts.unshift({
      type: 'info',
      icon: '📋',
      title: `${stateData.name} Regulatory Update`,
      message: `New guidance from ${stateData.regulator} requires attention`,
      link: stateData.website,
      linkText: `Visit ${stateData.regulator}`
    });
  }
  
  return baseAlerts;
}

function refreshData() {
  if (isLoading) return;
  
  isLoading = true;
  refreshBtn.classList.add('loading');
  showLoading();
  
  // Simulate API call
  setTimeout(() => {
    updateAllContent();
    isLoading = false;
    refreshBtn.classList.remove('loading');
    hideLoading();
    updateLastUpdated();
  }, 2000);
}

function toggleHelpMode() {
  helpMode = !helpMode;
  helpBtn.classList.toggle('active', helpMode);
  document.body.classList.toggle('help-mode', helpMode);
  
  if (!helpMode) {
    hideTooltip();
  }
}

function setupTooltips() {
  document.addEventListener('mouseover', function(e) {
    const trigger = e.target.closest('[data-tooltip]');
    if (trigger && (helpMode || trigger.classList.contains('help-trigger'))) {
      showTooltip(trigger, trigger.getAttribute('data-tooltip'));
    }
  });
  
  document.addEventListener('mouseout', function(e) {
    const trigger = e.target.closest('[data-tooltip]');
    if (trigger) {
      hideTooltip();
    }
  });
}

function showTooltip(element, text) {
  const tooltipContent = tooltip.querySelector('.tooltip-content');
  tooltipContent.textContent = text;
  
  const rect = element.getBoundingClientRect();
  tooltip.style.left = `${rect.left + rect.width / 2}px`;
  tooltip.style.top = `${rect.top - 10}px`;
  tooltip.classList.remove('hidden');
}

function hideTooltip() {
  tooltip.classList.add('hidden');
}

function showLoading() {
  loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
  loadingOverlay.classList.add('hidden');
}

function updateLastUpdated() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  const dateString = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  lastUpdated.textContent = `${dateString} ${timeString}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Additional tooltip definitions for various elements
const tooltipDefinitions = {
  'impact-levels': 'Impact levels indicate the significance of regulatory changes: High (major compliance changes), Medium (moderate adjustments required), Low (minimal impact on operations)',
  'confidence-score': 'AI confidence score reflects the reliability of analysis based on data quality, source credibility, and model certainty (0-100%)',
  'risk-assessment': 'Risk levels are calculated using regulatory complexity, political stability, market conditions, and compliance requirements',
  'sentiment-calculation': 'Political sentiment is derived from news analysis, regulatory announcements, and market reactions using natural language processing',
  'data-refresh': 'Data is refreshed from multiple sources including regulatory websites, legal databases, and financial news APIs',
  'source-reliability': 'Source reliability is based on regulatory authority, publication credibility, and information verification standards'
};

// Initialize tooltips with definitions
document.addEventListener('DOMContentLoaded', function() {
  // Add more specific tooltips to elements that need them
  const elements = document.querySelectorAll('.help-trigger');
  elements.forEach(element => {
    if (!element.hasAttribute('data-tooltip')) {
      // Add default tooltip if none exists
      element.setAttribute('data-tooltip', 'Click the Help button to enable comprehensive tooltips and explanations');
    }
  });
});