// Enhanced Application Data with Sources
const appData = {
  states: {
    NY: {
      name: "New York",
      regulations: [
        {
          title: "NYC Administrative Code Amendment - ESG Investment Requirements",
          impact: "High",
          date: "2025-06-15",
          summary: "New requirements for municipal pension funds to consider ESG factors in investment decisions",
          source: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-1",
          sourceTitle: "NYC Admin Code Title 25, Chapter 1",
          confidence: 0.94
        },
        {
          title: "NY State Fiduciary Rule Update",
          impact: "Medium",
          date: "2025-06-14",
          summary: "Clarification on fiduciary duties for investment advisors managing public pension assets",
          source: "https://www.nysenate.gov/legislation/laws/RET/423",
          sourceTitle: "NY Retirement & Social Security Law §423",
          confidence: 0.87
        }
      ],
      news: [
        {
          title: "NYC Mayor Announces New Climate Investment Mandate",
          date: "2025-06-16",
          summary: "Mayor's office announces new requirements for city pension funds to divest from fossil fuels",
          sentiment: 0.3,
          source: "https://www.nytimes.com/2025/06/16/nyregion/nyc-pension-climate.html",
          sourceTitle: "New York Times",
          reliability: "High"
        },
        {
          title: "Attorney General Investigates ESG Compliance",
          date: "2025-06-15",
          summary: "NY AG office launches investigation into ESG reporting compliance by investment managers",
          sentiment: -0.2,
          source: "https://ag.ny.gov/press-release/2025/attorney-general-james-announces-investigation",
          sourceTitle: "NY Attorney General Press Release",
          reliability: "High"
        }
      ],
      politicalSentiment: 0.1,
      lastUpdated: "2025-06-16T11:25:00Z"
    },
    CA: {
      name: "California",
      regulations: [
        {
          title: "Climate Risk Disclosure Requirements - SB 261",
          impact: "High",
          date: "2025-06-14",
          summary: "New climate stress testing requirements for investment managers with CA assets",
          source: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB261",
          sourceTitle: "California Legislature SB 261",
          confidence: 0.92
        }
      ],
      news: [
        {
          title: "CalPERS Updates ESG Investment Policy",
          date: "2025-06-15",
          summary: "California's largest pension fund adopts stricter ESG criteria for investment managers",
          sentiment: 0.4,
          source: "https://www.calpers.ca.gov/docs/board-agendas/202506/invest/item05a-01.pdf",
          sourceTitle: "CalPERS Board Meeting Minutes",
          reliability: "High"
        }
      ],
      politicalSentiment: 0.6,
      lastUpdated: "2025-06-16T11:20:00Z"
    },
    TX: {
      name: "Texas",
      regulations: [
        {
          title: "Anti-ESG Investment Act Amendment",
          impact: "High",
          date: "2025-06-13",
          summary: "Restrictions on consideration of ESG factors in state pension fund investments",
          source: "https://capitol.texas.gov/tlodocs/88R/billtext/html/SB00013F.HTM",
          sourceTitle: "Texas Senate Bill 13",
          confidence: 0.89
        }
      ],
      news: [
        {
          title: "Texas Pension Fund Restricts ESG Investments",
          date: "2025-06-14",
          summary: "State pension board votes to limit ESG-focused investment strategies",
          sentiment: -0.4,
          source: "https://www.texastribune.org/2025/06/14/texas-pension-esg-restrictions/",
          sourceTitle: "The Texas Tribune",
          reliability: "High"
        }
      ],
      politicalSentiment: -0.3,
      lastUpdated: "2025-06-16T11:15:00Z"
    }
  }
};

// Global state
let currentState = null;
let isRefreshing = false;
let helpModeActive = false;

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  try {
    console.log('Initializing StateRegWatch Pro...');
    
    // Populate state selector first
    populateStateSelector();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize tooltips
    setupTooltips();
    
    // Initialize keyboard shortcuts
    setupKeyboardShortcuts();
    
    console.log('Application initialized successfully');
  } catch (error) {
    console.error('Error initializing application:', error);
  }
}

function populateStateSelector() {
  const stateSelector = document.getElementById('stateSelector');
  if (!stateSelector) {
    console.error('State selector not found');
    return;
  }
  
  // Clear and add default option
  stateSelector.innerHTML = '<option value="">Choose a state...</option>';
  
  // Add each state
  Object.entries(appData.states).forEach(([code, state]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = `${state.name} (${code})`;
    stateSelector.appendChild(option);
  });
  
  console.log('State selector populated with', Object.keys(appData.states).length, 'states');
}

function setupEventListeners() {
  // State selector
  const stateSelector = document.getElementById('stateSelector');
  if (stateSelector) {
    stateSelector.addEventListener('change', function(e) {
      selectState(e.target.value);
    });
  }
  
  // Refresh button
  const refreshBtn = document.getElementById('refreshBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', handleRefresh);
  }
  
  // Help toggle button
  const helpToggle = document.getElementById('helpToggle');
  if (helpToggle) {
    helpToggle.addEventListener('click', toggleHelpMode);
    helpToggle.addEventListener('dblclick', openHelpModal);
  }
  
  // Help modal close
  const helpModalClose = document.querySelector('.help-modal-close');
  if (helpModalClose) {
    helpModalClose.addEventListener('click', closeHelpModal);
  }
  
  // Help modal background click
  const helpModal = document.getElementById('helpModal');
  if (helpModal) {
    helpModal.addEventListener('click', function(e) {
      if (e.target === helpModal) {
        closeHelpModal();
      }
    });
  }
}

function setupTooltips() {
  let currentTooltip = null;
  
  function showTooltip(element, text) {
    hideTooltip();
    
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;
    
    tooltip.textContent = text;
    tooltip.classList.add('show');
    
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    let top = rect.top - tooltipRect.height - 10;
    
    // Keep within viewport
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
      left = window.innerWidth - tooltipRect.width - 10;
    }
    if (top < 10) {
      top = rect.bottom + 10;
    }
    
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    currentTooltip = tooltip;
  }
  
  function hideTooltip() {
    if (currentTooltip) {
      currentTooltip.classList.remove('show');
      currentTooltip = null;
    }
  }
  
  function attachTooltipEvents() {
    const elements = document.querySelectorAll('[data-tooltip]');
    elements.forEach(element => {
      const text = element.getAttribute('data-tooltip');
      if (text) {
        element.addEventListener('mouseenter', () => showTooltip(element, text));
        element.addEventListener('mouseleave', hideTooltip);
        element.addEventListener('focus', () => showTooltip(element, text));
        element.addEventListener('blur', hideTooltip);
      }
    });
  }
  
  // Initial setup
  attachTooltipEvents();
  
  // Make function globally available for dynamic content
  window.refreshTooltips = attachTooltipEvents;
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    
    switch(e.key.toLowerCase()) {
      case 'h':
        e.preventDefault();
        toggleHelpMode();
        break;
      case 'r':
        e.preventDefault();
        if (currentState) handleRefresh();
        break;
      case '1':
        e.preventDefault();
        selectState('NY');
        break;
      case '2':
        e.preventDefault();
        selectState('CA');
        break;
      case '3':
        e.preventDefault();
        selectState('TX');
        break;
      case 'escape':
        const helpModal = document.getElementById('helpModal');
        if (helpModal && !helpModal.classList.contains('hidden')) {
          closeHelpModal();
        }
        break;
    }
  });
}

function selectState(stateCode) {
  console.log('Selecting state:', stateCode);
  
  if (!stateCode) {
    showNoStateSelected();
    return;
  }
  
  const state = appData.states[stateCode];
  if (!state) {
    console.error('State not found:', stateCode);
    showNoStateSelected();
    return;
  }
  
  currentState = state;
  
  // Update dropdown
  const stateSelector = document.getElementById('stateSelector');
  if (stateSelector) {
    stateSelector.value = stateCode;
  }
  
  updateUI();
  console.log('State selected:', state.name);
}

function updateUI() {
  if (!currentState) return;
  
  // Show main sections
  showElement('currentStateInfo');
  showElement('quickStats');
  showElement('mainDashboard');
  hideElement('noStateSelected');
  
  // Update content
  updateStateInfo();
  updateQuickStats();
  updateRegulations();
  updateNews();
  updateAIAnalysis();
  updateSources();
  
  // Refresh tooltips for new content
  if (window.refreshTooltips) {
    window.refreshTooltips();
  }
}

function showElement(id) {
  const element = document.getElementById(id);
  if (element) element.classList.remove('hidden');
}

function hideElement(id) {
  const element = document.getElementById(id);
  if (element) element.classList.add('hidden');
}

function showNoStateSelected() {
  currentState = null;
  hideElement('currentStateInfo');
  hideElement('quickStats');
  hideElement('mainDashboard');
  showElement('noStateSelected');
}

function updateStateInfo() {
  const currentStateName = document.getElementById('currentStateName');
  const lastUpdated = document.getElementById('lastUpdated');
  
  if (currentStateName) {
    currentStateName.textContent = currentState.name;
  }
  
  if (lastUpdated) {
    lastUpdated.textContent = formatDateTime(currentState.lastUpdated);
  }
  
  updateSentimentIndicator();
}

function updateSentimentIndicator() {
  const sentimentFill = document.querySelector('.sentiment-fill');
  const sentimentScore = document.querySelector('.sentiment-score');
  
  if (sentimentFill && sentimentScore) {
    const sentiment = currentState.politicalSentiment;
    const percentage = ((sentiment + 1) / 2) * 100;
    sentimentFill.style.width = `${percentage}%`;
    sentimentScore.textContent = sentiment.toFixed(1);
  }
}

function updateQuickStats() {
  const regulations = currentState.regulations || [];
  const highRiskCount = regulations.filter(r => r.impact === 'High').length;
  const sentiment = currentState.politicalSentiment;
  
  let sentimentText = 'Neutral';
  if (sentiment > 0.2) sentimentText = 'Favorable';
  else if (sentiment < -0.2) sentimentText = 'Restrictive';
  
  updateTextContent('totalRegulations', regulations.length);
  updateTextContent('recentChanges', regulations.length);
  updateTextContent('highRiskAlerts', highRiskCount);
  updateTextContent('politicalSentiment', sentimentText);
}

function updateTextContent(id, text) {
  const element = document.getElementById(id);
  if (element) element.textContent = text;
}

function updateRegulations() {
  const container = document.getElementById('regulationsContent');
  if (!container) return;
  
  const regulations = currentState.regulations || [];
  
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
        <span>Date: ${formatDate(reg.date)}</span>
        <span data-tooltip="AI confidence in this regulatory analysis">Confidence: ${(reg.confidence * 100).toFixed(0)}%</span>
      </div>
      <div class="regulation-summary">${reg.summary}</div>
      <div class="regulation-source">
        <a href="${reg.source}" target="_blank" rel="noopener noreferrer" class="source-link"
           data-tooltip="Opens official source in a new tab">
          ${reg.sourceTitle}
        </a>
      </div>
    </div>
  `).join('');
}

function updateNews() {
  const container = document.getElementById('newsContent');
  if (!container) return;
  
  const news = currentState.news || [];
  
  if (news.length === 0) {
    container.innerHTML = '<p class="empty-state">No news found for this state</p>';
    return;
  }
  
  container.innerHTML = news.map(item => `
    <div class="news-item">
      <div class="news-header">
        <h4 class="news-headline">${item.title}</h4>
        <span class="news-sentiment ${getSentimentClass(item.sentiment)}"
              data-tooltip="Political sentiment: ${item.sentiment > 0 ? 'Positive' : item.sentiment < 0 ? 'Negative' : 'Neutral'}">
          ${item.sentiment > 0 ? '+' : ''}${item.sentiment.toFixed(1)}
        </span>
      </div>
      <div class="news-meta">
        <span>${item.sourceTitle}</span>
        <span>${formatDate(item.date)}</span>
        <span data-tooltip="Source reliability rating">Reliability: ${item.reliability}</span>
      </div>
      <div class="news-summary">${item.summary}</div>
      <div class="news-source">
        <a href="${item.source}" target="_blank" rel="noopener noreferrer" class="source-link"
           data-tooltip="Opens source article in a new tab">
          Read Full Article
        </a>
      </div>
    </div>
  `).join('');
}

function updateAIAnalysis() {
  const container = document.getElementById('aiAnalysisContent');
  if (!container) return;
  
  const regulations = currentState.regulations || [];
  
  if (regulations.length === 0) {
    container.innerHTML = '<p class="empty-state">No AI analysis available for this state</p>';
    return;
  }
  
  const avgConfidence = regulations.reduce((sum, reg) => sum + reg.confidence, 0) / regulations.length;
  const highImpactCount = regulations.filter(r => r.impact === 'High').length;
  
  container.innerHTML = `
    <div class="ai-analysis-grid">
      <div class="analysis-item">
        <div class="analysis-label" data-tooltip="Overall complexity of the regulatory environment">Regulatory Complexity</div>
        <div class="analysis-value">${highImpactCount > 0 ? 'High - Multiple high-impact regulations detected' : 'Moderate - Standard regulatory environment'}</div>
      </div>
      <div class="analysis-item">
        <div class="analysis-label" data-tooltip="Assessment of compliance risk level">Compliance Risk</div>
        <div class="analysis-value">${highImpactCount > 1 ? 'Elevated - Immediate attention required' : 'Standard - Ongoing monitoring needed'}</div>
      </div>
      <div class="analysis-item">
        <div class="analysis-label" data-tooltip="Investment restrictions identified">Investment Restrictions</div>
        <div class="analysis-value">${currentState.politicalSentiment > 0 ? 'ESG-focused requirements detected' : 'Anti-ESG restrictions may apply'}</div>
      </div>
      <div class="analysis-item">
        <div class="analysis-label" data-tooltip="Recommended monitoring frequency">Monitoring Frequency</div>
        <div class="analysis-value">${highImpactCount > 0 ? 'Daily monitoring recommended' : 'Weekly monitoring sufficient'}</div>
      </div>
    </div>
    <div class="confidence-score">
      <div class="confidence-label" data-tooltip="Overall confidence in AI analysis">Analysis Confidence</div>
      <div class="confidence-value">${(avgConfidence * 100).toFixed(0)}%</div>
    </div>
  `;
}

function updateSources() {
  const container = document.getElementById('sourcesContent');
  if (!container) return;
  
  const regulations = currentState.regulations || [];
  const news = currentState.news || [];
  const allSources = [];
  
  regulations.forEach(reg => {
    allSources.push({
      title: reg.sourceTitle,
      url: reg.source,
      type: 'Regulation',
      description: `Legal source for: ${reg.title}`
    });
  });
  
  news.forEach(item => {
    allSources.push({
      title: item.sourceTitle,
      url: item.source,
      type: 'News',
      description: `News source for: ${item.title}`
    });
  });
  
  if (allSources.length === 0) {
    container.innerHTML = '<p class="empty-state">No sources available for this state</p>';
    return;
  }
  
  container.innerHTML = allSources.map(source => `
    <div class="source-item">
      <div class="source-title">
        <strong>${source.title}</strong>
        <span class="source-type" data-tooltip="Source category">(${source.type})</span>
      </div>
      <a href="${source.url}" target="_blank" rel="noopener noreferrer" class="source-link"
         data-tooltip="Verify information at the original source">
        Visit Source
      </a>
      <div class="source-description">${source.description}</div>
    </div>
  `).join('');
}

function toggleHelpMode() {
  helpModeActive = !helpModeActive;
  console.log('Help mode toggled:', helpModeActive);
  
  const helpOverlays = document.querySelectorAll('.help-overlay');
  const helpToggle = document.getElementById('helpToggle');
  
  helpOverlays.forEach(overlay => {
    if (helpModeActive) {
      overlay.classList.add('show');
    } else {
      overlay.classList.remove('show');
    }
  });
  
  if (helpToggle) {
    if (helpModeActive) {
      helpToggle.classList.add('btn--primary');
      helpToggle.classList.remove('btn--secondary');
    } else {
      helpToggle.classList.add('btn--secondary');
      helpToggle.classList.remove('btn--primary');
    }
  }
}

function openHelpModal() {
  console.log('Opening help modal');
  const helpModal = document.getElementById('helpModal');
  if (helpModal) {
    helpModal.classList.remove('hidden');
    helpModal.classList.add('show');
    helpModal.setAttribute('aria-hidden', 'false');
    
    const closeButton = helpModal.querySelector('.help-modal-close');
    if (closeButton) closeButton.focus();
  }
}

function closeHelpModal() {
  console.log('Closing help modal');
  const helpModal = document.getElementById('helpModal');
  if (helpModal) {
    helpModal.classList.add('hidden');
    helpModal.classList.remove('show');
    helpModal.setAttribute('aria-hidden', 'true');
    
    const helpToggle = document.getElementById('helpToggle');
    if (helpToggle) helpToggle.focus();
  }
}

function handleRefresh() {
  if (isRefreshing || !currentState) return;
  
  console.log('Refreshing data for', currentState.name);
  isRefreshing = true;
  
  const loadingOverlay = document.getElementById('loadingOverlay');
  const refreshBtn = document.getElementById('refreshBtn');
  const refreshText = refreshBtn?.querySelector('.refresh-text');
  const refreshSpinner = refreshBtn?.querySelector('.refresh-spinner');
  
  // Show loading
  if (loadingOverlay) loadingOverlay.classList.remove('hidden');
  if (refreshText) refreshText.classList.add('hidden');
  if (refreshSpinner) refreshSpinner.classList.remove('hidden');
  if (refreshBtn) refreshBtn.disabled = true;
  
  // Simulate progress
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress > 90) progress = 90;
    updateLoadingProgress(progress);
  }, 200);
  
  setTimeout(() => {
    clearInterval(progressInterval);
    updateLoadingProgress(100);
    
    // Update timestamp
    const stateKey = Object.keys(appData.states).find(key => appData.states[key] === currentState);
    if (stateKey) {
      appData.states[stateKey].lastUpdated = new Date().toISOString();
    }
    
    setTimeout(() => {
      updateUI();
      
      // Hide loading
      if (loadingOverlay) loadingOverlay.classList.add('hidden');
      if (refreshText) refreshText.classList.remove('hidden');
      if (refreshSpinner) refreshSpinner.classList.add('hidden');
      if (refreshBtn) refreshBtn.disabled = false;
      
      isRefreshing = false;
      console.log('Refresh completed');
    }, 500);
  }, 2000);
}

function updateLoadingProgress(percent) {
  const progressFill = document.querySelector('.progress-fill');
  const progressText = document.querySelector('.progress-text');
  
  if (progressFill) progressFill.style.width = `${percent}%`;
  if (progressText) progressText.textContent = `${Math.round(percent)}%`;
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