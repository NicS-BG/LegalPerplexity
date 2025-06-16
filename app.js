// RegTech Monitor Pro - Application Logic

// Application data
const appData = {
  "dashboard_metrics": {
    "active_alerts": 27,
    "jurisdictions_monitored": 15,
    "ai_analysis_pending": 8,
    "weekly_reports_generated": 142
  },
  "recent_alerts": [
    {
      "id": 1,
      "title": "NY State Climate Act Implementation Updates",
      "jurisdiction": "New York State",
      "priority": "High",
      "date": "2025-06-12",
      "category": "ESG",
      "impact": "Affects investment mandates for NY retirement systems",
      "source": "NY DEC"
    },
    {
      "id": 2,
      "title": "NYC Administrative Code Amendment - Fiduciary Standards",
      "jurisdiction": "New York City",
      "priority": "High",
      "date": "2025-06-11",
      "category": "Fiduciary",
      "impact": "New restrictions on certain investment vehicles",
      "source": "NYC Comptroller Office"
    },
    {
      "id": 3,
      "title": "Federal ESG Disclosure Requirements Update",
      "jurisdiction": "Federal",
      "priority": "Medium",
      "date": "2025-06-10",
      "category": "ESG",
      "impact": "Enhanced reporting requirements for fund managers",
      "source": "SEC"
    }
  ],
  "jurisdictions": [
    {
      "name": "New York State",
      "status": "Active",
      "last_update": "2025-06-12",
      "alert_count": 12,
      "sources": ["NY Legislature API", "NY State Gov", "Thomson Reuters"]
    },
    {
      "name": "New York City",
      "status": "Active", 
      "last_update": "2025-06-11",
      "alert_count": 8,
      "sources": ["NYC.gov", "NYC Administrative Code", "Bloomberg Law"]
    },
    {
      "name": "California",
      "status": "Active",
      "last_update": "2025-06-10",
      "alert_count": 15,
      "sources": ["CA Legislature", "CalPERS", "Legal Database APIs"]
    }
  ],
  "ai_analysis": [
    {
      "title": "NY Retirement Plan Investment Restrictions Analysis",
      "status": "Completed",
      "date": "2025-06-12",
      "key_findings": [
        "No new country restrictions identified",
        "Enhanced ESG requirements for fossil fuel investments",
        "Concentration limits remain at 5% for single issuer",
        "New climate disclosure requirements effective 2026"
      ],
      "confidence": 92,
      "sources_analyzed": 47
    },
    {
      "title": "ESG Regulatory Convergence Analysis", 
      "status": "In Progress",
      "date": "2025-06-12",
      "progress": 75
    }
  ],
  "political_sentiment": {
    "current_trend": "Positive for ESG initiatives",
    "trend_direction": "up",
    "key_indicators": [
      {
        "indicator": "NY Attorney General ESG Stance",
        "sentiment": "Strongly Supportive",
        "impact": "High"
      },
      {
        "indicator": "NYC Council Climate Initiatives",
        "sentiment": "Supportive", 
        "impact": "Medium"
      }
    ]
  },
  "clients": [
    {
      "name": "NYC Teachers Retirement System",
      "jurisdiction": "New York City",
      "mandate_type": "Public Pension",
      "compliance_status": "Current",
      "last_review": "2025-06-05",
      "key_requirements": ["ESG Integration", "Fossil Fuel Restrictions", "Local Investment Preferences"]
    },
    {
      "name": "NY State Common Retirement Fund",
      "jurisdiction": "New York State", 
      "mandate_type": "State Pension",
      "compliance_status": "Under Review",
      "last_review": "2025-06-01",
      "key_requirements": ["Climate Risk Disclosure", "Shareholder Engagement", "Diversification Limits"]
    }
  ],
  "weekly_reports": [
    {
      "week": "June 5-11, 2025",
      "changes_detected": 23,
      "high_priority": 5,
      "clients_affected": 8,
      "status": "Published"
    },
    {
      "week": "May 29 - June 4, 2025", 
      "changes_detected": 31,
      "high_priority": 7,
      "clients_affected": 12,
      "status": "Published"
    }
  ]
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadDashboardData();
    loadAlertsData();
    loadJurisdictionsData();
    loadAIAnalysisData();
    loadPoliticalSentimentData();
    loadReportingData();
    loadClientsData();
    createSentimentChart();
});

// Navigation handling
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            showSection(targetSection);
            
            // Update active nav button
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Load dashboard metrics
function loadDashboardData() {
    const metrics = appData.dashboard_metrics;
    
    document.getElementById('active-alerts').textContent = metrics.active_alerts;
    document.getElementById('jurisdictions-monitored').textContent = metrics.jurisdictions_monitored;
    document.getElementById('ai-analysis-pending').textContent = metrics.ai_analysis_pending;
    document.getElementById('weekly-reports').textContent = metrics.weekly_reports_generated;
}

// Load alerts data
function loadAlertsData() {
    const alertsList = document.getElementById('alerts-list');
    const alerts = appData.recent_alerts;
    
    alertsList.innerHTML = '';
    
    alerts.forEach(alert => {
        const alertElement = document.createElement('div');
        alertElement.className = `alert-item ${alert.priority.toLowerCase()}-priority`;
        
        alertElement.innerHTML = `
            <div class="alert-header">
                <div class="alert-title">${alert.title}</div>
                <div class="alert-priority ${alert.priority.toLowerCase()}">${alert.priority}</div>
            </div>
            <div class="alert-meta">
                <span><strong>Jurisdiction:</strong> ${alert.jurisdiction}</span>
                <span><strong>Date:</strong> ${formatDate(alert.date)}</span>
                <span><strong>Category:</strong> ${alert.category}</span>
                <span><strong>Source:</strong> ${alert.source}</span>
            </div>
            <div class="alert-impact">${alert.impact}</div>
        `;
        
        alertsList.appendChild(alertElement);
    });
}

// Load jurisdictions data
function loadJurisdictionsData() {
    const jurisdictionDetails = document.getElementById('jurisdiction-details');
    const jurisdictions = appData.jurisdictions;
    
    jurisdictionDetails.innerHTML = '';
    
    jurisdictions.forEach(jurisdiction => {
        const jurisdictionElement = document.createElement('div');
        jurisdictionElement.className = 'jurisdiction-item';
        
        jurisdictionElement.innerHTML = `
            <div class="jurisdiction-header">
                <div class="jurisdiction-name">${jurisdiction.name}</div>
                <div class="jurisdiction-status">${jurisdiction.status}</div>
            </div>
            <div class="jurisdiction-details">
                <span><strong>Last Update:</strong> ${formatDate(jurisdiction.last_update)}</span>
                <span><strong>Alerts:</strong> ${jurisdiction.alert_count}</span>
            </div>
            <div style="margin-top: 12px;">
                <strong>Sources:</strong> ${jurisdiction.sources.join(', ')}
            </div>
        `;
        
        jurisdictionDetails.appendChild(jurisdictionElement);
    });
}

// Load AI analysis data
function loadAIAnalysisData() {
    const analysisListEl = document.getElementById('ai-analysis-list');
    const analyses = appData.ai_analysis;
    
    analysisListEl.innerHTML = '';
    
    analyses.forEach(analysis => {
        const analysisElement = document.createElement('div');
        analysisElement.className = 'analysis-item';
        
        let content = `
            <div class="analysis-title">${analysis.title}</div>
            <div class="analysis-meta">
                <span><strong>Status:</strong> ${analysis.status}</span>
                <span><strong>Date:</strong> ${formatDate(analysis.date)}</span>
        `;
        
        if (analysis.confidence) {
            content += `<span class="confidence-score">
                <strong>Confidence:</strong> ${analysis.confidence}%
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: ${analysis.confidence}%"></div>
                </div>
            </span>`;
        }
        
        if (analysis.sources_analyzed) {
            content += `<span><strong>Sources Analyzed:</strong> ${analysis.sources_analyzed}</span>`;
        }
        
        content += `</div>`;
        
        if (analysis.key_findings) {
            content += `
                <div style="margin-top: 12px;">
                    <strong>Key Findings:</strong>
                    <ul class="key-findings">
                        ${analysis.key_findings.map(finding => `<li>${finding}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        if (analysis.progress) {
            content += `
                <div style="margin-top: 12px;">
                    <strong>Progress:</strong> ${analysis.progress}%
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${analysis.progress}%"></div>
                    </div>
                </div>
            `;
        }
        
        analysisElement.innerHTML = content;
        analysisListEl.appendChild(analysisElement);
    });
}

// Load political sentiment data
function loadPoliticalSentimentData() {
    const indicatorsEl = document.getElementById('political-indicators');
    const indicators = appData.political_sentiment.key_indicators;
    
    indicatorsEl.innerHTML = '';
    
    indicators.forEach(indicator => {
        const indicatorElement = document.createElement('div');
        indicatorElement.className = 'indicator-item';
        
        indicatorElement.innerHTML = `
            <div class="indicator-name">${indicator.indicator}</div>
            <div>
                <div class="indicator-sentiment">${indicator.sentiment}</div>
                <div style="font-size: 12px; color: var(--color-text-secondary);">Impact: ${indicator.impact}</div>
            </div>
        `;
        
        indicatorsEl.appendChild(indicatorElement);
    });
}

// Load reporting data
function loadReportingData() {
    const reportsListEl = document.getElementById('reports-list');
    const reports = appData.weekly_reports;
    
    reportsListEl.innerHTML = '';
    
    reports.forEach(report => {
        const reportElement = document.createElement('div');
        reportElement.className = 'report-item';
        
        reportElement.innerHTML = `
            <div class="report-week">${report.week}</div>
            <div class="report-stats">
                <div><strong>Changes:</strong> ${report.changes_detected}</div>
                <div><strong>High Priority:</strong> ${report.high_priority}</div>
                <div><strong>Clients Affected:</strong> ${report.clients_affected}</div>
            </div>
            <div style="margin-top: 8px;">
                <span class="status status--success">${report.status}</span>
            </div>
        `;
        
        reportsListEl.appendChild(reportElement);
    });
}

// Load clients data
function loadClientsData() {
    const clientsListEl = document.getElementById('clients-list');
    const clients = appData.clients;
    
    clientsListEl.innerHTML = '';
    
    clients.forEach(client => {
        const clientElement = document.createElement('div');
        clientElement.className = 'client-item';
        
        const statusClass = client.compliance_status.toLowerCase().replace(' ', '-');
        
        clientElement.innerHTML = `
            <div class="client-header">
                <div class="client-name">${client.name}</div>
                <div class="compliance-status ${statusClass}">${client.compliance_status}</div>
            </div>
            <div class="client-details">
                <div><strong>Jurisdiction:</strong> ${client.jurisdiction}</div>
                <div><strong>Mandate Type:</strong> ${client.mandate_type}</div>
                <div><strong>Last Review:</strong> ${formatDate(client.last_review)}</div>
            </div>
            <div style="margin-top: 16px;">
                <strong>Key Requirements:</strong>
                <ul class="requirements-list">
                    ${client.key_requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
        `;
        
        clientsListEl.appendChild(clientElement);
    });
}

// Create sentiment chart
function createSentimentChart() {
    const ctx = document.getElementById('sentimentChart');
    if (!ctx) return;
    
    // Sample sentiment data over time
    const sentimentData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'ESG Sentiment Score',
            data: [65, 72, 78, 75, 82, 88],
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            fill: true,
            tension: 0.4
        }, {
            label: 'Regulatory Stability',
            data: [70, 68, 75, 72, 78, 85],
            borderColor: '#FFC185',
            backgroundColor: 'rgba(255, 193, 133, 0.1)',
            fill: true,
            tension: 0.4
        }]
    };
    
    new Chart(ctx, {
        type: 'line',
        data: sentimentData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Quick access button handlers
document.addEventListener('DOMContentLoaded', function() {
    const quickButtons = document.querySelectorAll('.quick-btn');
    
    quickButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            switch(buttonText) {
                case 'New York Focus':
                    showSection('jurisdictions');
                    updateActiveNavButton('jurisdictions');
                    break;
                case 'ESG Regulations':
                    showSection('ai-analysis');
                    updateActiveNavButton('ai-analysis');
                    break;
                case 'Political Sentiment':
                    showSection('sentiment');
                    updateActiveNavButton('sentiment');
                    break;
                case 'Investment Restrictions':
                    showSection('ai-analysis');
                    updateActiveNavButton('ai-analysis');
                    break;
                case 'Weekly Reports':
                    showSection('reporting');
                    updateActiveNavButton('reporting');
                    break;
                case 'Client Alerts':
                    showSection('clients');
                    updateActiveNavButton('clients');
                    break;
            }
        });
    });
});

function updateActiveNavButton(sectionId) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    const targetButton = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
}

// Map item interactions
document.addEventListener('DOMContentLoaded', function() {
    const mapItems = document.querySelectorAll('.map-item');
    
    mapItems.forEach(item => {
        item.addEventListener('click', function() {
            const jurisdiction = this.dataset.jurisdiction;
            
            // Remove active class from all items
            mapItems.forEach(mapItem => mapItem.classList.remove('selected'));
            
            // Add selected class to clicked item
            this.classList.add('selected');
            
            // Here you could filter the jurisdiction list or show details
            console.log(`Selected jurisdiction: ${jurisdiction}`);
        });
    });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click handlers for alert items
    const alertItems = document.querySelectorAll('.alert-item');
    alertItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            // Toggle expanded view or show details modal
            this.classList.toggle('expanded');
        });
    });
});