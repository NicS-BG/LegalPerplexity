// StateRegWatch Pro Enhanced - Regulatory Monitoring Dashboard
// Application state and data management

class StateRegWatchApp {
    constructor() {
        this.currentState = 'NY';
        this.isLoading = false;
        this.helpMode = false;
        this.tooltip = null;
        
        // Real data from provided JSON
        this.stateData = {
            "NY": {
                "name": "New York",
                "regulations": [
                    {
                        "title": "NYDFS Cybersecurity Regulation Amendments",
                        "impact": "High",
                        "date": "2024-08-28",
                        "summary": "Updated cybersecurity requirements for covered entities include enhanced penetration testing and board oversight. Class A organizations face additional obligations.",
                        "source": "https://www.schellman.com/blog/cybersecurity/nydfs-cybersecurity-regulation-comprehensive-guide",
                        "confidence": 92
                    },
                    {
                        "title": "Climate Corporate Data Accountability Act",
                        "impact": "High", 
                        "date": "2025-02-06",
                        "summary": "Senate Bill 3456 requires companies with $1B+ revenue to disclose GHG emissions. Scope 1 and 2 reporting starts 2027, Scope 3 in 2028.",
                        "source": "https://www.esgdive.com/news/new-york-reintroduces-bills-seeking-climate-risk-emissions-disclosures/739365/",
                        "confidence": 88
                    },
                    {
                        "title": "NYCERS Net Zero Implementation Plan",
                        "impact": "Medium",
                        "date": "2023-02-15",
                        "summary": "NYC pension system committed to net zero GHG emissions by 2040 with comprehensive divestment and engagement strategies.",
                        "source": "https://comptroller.nyc.gov/reports/nycers-net-zero-implementation-plan/",
                        "confidence": 85
                    }
                ],
                "news": [
                    {
                        "headline": "NYC Pension Plan Anti-ESG Lawsuit Dismissed",
                        "date": "2024-07-23",
                        "summary": "Court dismisses challenge to NYC pension plan fossil fuel divestment, ruling plaintiffs lack standing in defined benefit plans.",
                        "source": "https://corpgov.law.harvard.edu/2024/07/23/nyc-pension-plan-suit-is-thrown-out-gop-anti-esg-fiduciary-duty-theory-remains-to-be-tested/",
                        "sentiment": 0.3
                    },
                    {
                        "headline": "NY Climate Disclosure Laws Reintroduced",
                        "date": "2025-01-29",
                        "summary": "New York reintroduces climate risk and emissions disclosure bills for large corporations operating in the state.",
                        "source": "https://nexioprojects.com/new-yorks-climate-challenge-getting-ready-for-disclosure-requirements/",
                        "sentiment": 0.2
                    }
                ],
                "sentiment": 0.1,
                "riskScore": 7.2,
                "alerts": [
                    {
                        "title": "Climate Disclosure Compliance",
                        "description": "Prepare for upcoming climate disclosure requirements affecting large corporations",
                        "urgency": "High",
                        "type": "Action Required"
                    },
                    {
                        "title": "Cybersecurity Regulation Updates",
                        "description": "Review enhanced cybersecurity requirements for covered entities",
                        "urgency": "Medium",
                        "type": "Monitoring Required"
                    }
                ]
            },
            "CA": {
                "name": "California",
                "regulations": [
                    {
                        "title": "DFPI Investment Adviser Representative CE Rule",
                        "impact": "Medium",
                        "date": "2024-05-01",
                        "summary": "California adopts IAR continuing education requirement: 12 annual credits split between Products/Practice and Ethics/Professional Responsibility.",
                        "source": "https://dfpi.ca.gov/rules-enforcement/laws-and-regulations/law-and-regulations-corporate-securities-law/",
                        "confidence": 94
                    },
                    {
                        "title": "DFPI Earned Wage Access Regulations",
                        "impact": "High",
                        "date": "2025-02-15",
                        "summary": "New registration requirements for financial service providers including debt settlement, education financing, and income-based advances.",
                        "source": "https://www.consumerfinancialserviceslawmonitor.com/2024/11/registration-information-released-for-california-dfpis-earned-wage-access-regulations/",
                        "confidence": 89
                    }
                ],
                "news": [
                    {
                        "headline": "California IAR CE Implementation Update",
                        "date": "2024-07-30",
                        "summary": "DFPI confirms acceptance of CE credits completed throughout 2024 calendar year for compliance purposes.",
                        "source": "https://www.questce.com/update-on-californias-proposed-iar-ce-requirement/",
                        "sentiment": 0.1
                    }
                ],
                "sentiment": 0.5,
                "riskScore": 6.8,
                "alerts": [
                    {
                        "title": "IAR Continuing Education Compliance",
                        "description": "Ensure 12 annual CE credits are completed for investment adviser representatives",
                        "urgency": "Medium",
                        "type": "Monitoring Required"
                    }
                ]
            },
            "TX": {
                "name": "Texas",
                "regulations": [
                    {
                        "title": "Federal Court Halts DOL Fiduciary Rule",
                        "impact": "High",
                        "date": "2024-07-25",
                        "summary": "Eastern District of Texas issues nationwide stay on DOL fiduciary-only rule, finding it conflicts with ERISA and exceeds DOL authority.",
                        "source": "https://advocacy.naifa.org/news/federal-court-in-texas-halts-the-dols-fiduciary-only-rule",
                        "confidence": 96
                    },
                    {
                        "title": "ERISA Fiduciary Rule Challenge",
                        "impact": "High",
                        "date": "2024-07-26",
                        "summary": "Northern District of Texas court grants stay in NAIFA/ACLI challenge to fiduciary rule and PTE amendments affecting retirement investors.",
                        "source": "https://www.sidley.com/en/insights/newsupdates/2024/07/erisa-fiduciary-advice-rule-wars-texas-courts-strike-back",
                        "confidence": 91
                    }
                ],
                "news": [
                    {
                        "headline": "Texas Courts Block Federal Fiduciary Rules",
                        "date": "2024-07-31",
                        "summary": "Multiple federal courts in Texas issue stays against DOL fiduciary advice rules, creating uncertainty for investment advisers.",
                        "source": "https://www.sidley.com/en/insights/newsupdates/2024/07/erisa-fiduciary-advice-rule-wars-texas-courts-strike-back",
                        "sentiment": -0.4
                    }
                ],
                "sentiment": -0.4,
                "riskScore": 8.1,
                "alerts": [
                    {
                        "title": "Fiduciary Rule Compliance Review",
                        "description": "Monitor ongoing litigation regarding DOL fiduciary rule implementation",
                        "urgency": "High",
                        "type": "Action Required"
                    }
                ]
            },
            "FL": {
                "name": "Florida",
                "regulations": [
                    {
                        "title": "State Investment Adviser Registration Updates",
                        "impact": "Medium",
                        "date": "2024-12-31",
                        "summary": "Florida OFR provides updated guidance on annual renewal requirements and branch office notice-filing obligations for state-registered advisers.",
                        "source": "https://flofr.gov/divisions-offices/division-of-securities/state-registered-advisers-firm",
                        "confidence": 87
                    },
                    {
                        "title": "Investment Adviser Guide Revision",
                        "impact": "Low",
                        "date": "2024-06-19",
                        "summary": "Updated compliance guide for newly-registered investment advisers including annual renewal and financial statement filing requirements.",
                        "source": "https://flofr.gov/docs/default-source/documents/florida---guide-for-investment-advisers.pdf?sfvrsn=c5db2ff5_1",
                        "confidence": 83
                    }
                ],
                "news": [
                    {
                        "headline": "Florida Investment Adviser Renewals Due",
                        "date": "2024-11-30",
                        "summary": "Florida OFR reminds investment advisers of December 31 renewal deadline and FINRA deposit requirements.",
                        "source": "https://flofr.gov/divisions-offices/division-of-securities/state-registered-advisers-firm",
                        "sentiment": 0.0
                    }
                ],
                "sentiment": 0.2,
                "riskScore": 5.4,
                "alerts": [
                    {
                        "title": "Annual Registration Renewal",
                        "description": "December 31 deadline for investment adviser registration renewal",
                        "urgency": "Medium",
                        "type": "Monitoring Required"
                    }
                ]
            },
            "IL": {
                "name": "Illinois",
                "regulations": [
                    {
                        "title": "Secure Choice Program Expansion",
                        "impact": "Medium",
                        "date": "2021-08-05",
                        "summary": "Illinois expands mandatory retirement savings program to employers with 5+ employees, includes automatic contribution increases up to 10%.",
                        "source": "https://www.benefitslawadvisor.com/2021/08/articles/state-mandated-retirement-plan/illinois-expands-its-secure-choice-mandatory-retirement-savings-program/",
                        "confidence": 86
                    }
                ],
                "news": [
                    {
                        "headline": "Illinois Secure Choice Compliance Requirements",
                        "date": "2023-10-06",
                        "summary": "Employers must offer state-run IRA program or provide qualified retirement plan to avoid $250-500 per employee penalties.",
                        "source": "https://ogletree.com/insights-resources/blog-posts/mandatory-retirement-plans-in-illinois/",
                        "sentiment": 0.1
                    }
                ],
                "sentiment": 0.3,
                "riskScore": 6.1,
                "alerts": [
                    {
                        "title": "Secure Choice Compliance",
                        "description": "Ensure compliance with Illinois mandatory retirement savings program",
                        "urgency": "Medium",
                        "type": "Monitoring Required"
                    }
                ]
            }
        };

        // Tooltips data
        this.tooltips = {
            "regulatoryChanges": "Tracks new regulations, amendments, and guidance affecting investment management activities in the selected state",
            "aiAnalysis": "AI-powered analysis of regulatory text to identify investment restrictions, ESG requirements, and compliance obligations",
            "politicalSentiment": "Sentiment analysis of political statements and policy developments that may affect regulatory interpretation",
            "newsFeeds": "State-specific news coverage of regulatory developments, enforcement actions, and policy changes", 
            "complianceAlerts": "Urgent notifications about regulatory changes requiring immediate attention or ongoing monitoring",
            "confidenceScore": "AI confidence level in analysis accuracy based on source quality and text clarity (0-100%)",
            "impactLevel": "Assessment of regulation's effect on investment management operations: High (immediate action), Medium (monitoring), Low (informational)",
            "sentimentGauge": "Political climate score from -1 (hostile to investment management) to +1 (supportive)",
            "riskScore": "Overall regulatory risk assessment combining change frequency, political sentiment, and enforcement activity"
        };

        this.initializeApp();
    }

    initializeApp() {
        this.setupEventListeners();
        this.setupTooltips();
        this.updateDashboard();
        this.updateLastUpdated();
    }

    setupEventListeners() {
        // State selector change
        const stateSelect = document.getElementById('stateSelect');
        stateSelect.addEventListener('change', (e) => {
            this.currentState = e.target.value;
            this.updateDashboard();
        });

        // Manual refresh button
        const refreshBtn = document.getElementById('refreshBtn');
        refreshBtn.addEventListener('click', () => {
            this.refreshData();
        });

        // Help toggle
        const helpToggle = document.getElementById('helpToggle');
        helpToggle.addEventListener('click', () => {
            this.toggleHelp();
        });
    }

    setupTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        const tooltip = document.getElementById('tooltip');

        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                const text = e.target.getAttribute('data-tooltip');
                this.showTooltip(e, text);
            });

            element.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });

            element.addEventListener('mousemove', (e) => {
                this.updateTooltipPosition(e);
            });
        });
    }

    showTooltip(event, text) {
        const tooltip = document.getElementById('tooltip');
        tooltip.textContent = text;
        tooltip.classList.remove('hidden');
        this.updateTooltipPosition(event);
    }

    updateTooltipPosition(event) {
        const tooltip = document.getElementById('tooltip');
        const rect = tooltip.getBoundingClientRect();
        
        let x = event.pageX - rect.width / 2;
        let y = event.pageY - rect.height - 10;
        
        // Adjust if tooltip goes off screen
        if (x < 0) x = 10;
        if (x + rect.width > window.innerWidth) x = window.innerWidth - rect.width - 10;
        if (y < 0) y = event.pageY + 10;
        
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }

    hideTooltip() {
        const tooltip = document.getElementById('tooltip');
        tooltip.classList.add('hidden');
    }

    toggleHelp() {
        this.helpMode = !this.helpMode;
        const helpTexts = document.querySelectorAll('.help-text');
        const helpToggleText = document.getElementById('helpToggleText');
        
        helpTexts.forEach(text => {
            if (this.helpMode) {
                text.classList.remove('hidden');
            } else {
                text.classList.add('hidden');
            }
        });
        
        helpToggleText.textContent = this.helpMode ? 'Hide Help' : 'Show Help';
    }

    refreshData() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.showLoadingState();
        
        // Simulate API call with timeout
        setTimeout(() => {
            this.updateDashboard();
            this.updateLastUpdated();
            this.hideLoadingState();
            this.isLoading = false;
        }, 1500);
    }

    showLoadingState() {
        const spinner = document.getElementById('refreshSpinner');
        const refreshText = document.getElementById('refreshText');
        const dashboard = document.querySelector('.dashboard');
        
        spinner.classList.remove('hidden');
        refreshText.textContent = 'Refreshing...';
        dashboard.classList.add('loading');
    }

    hideLoadingState() {
        const spinner = document.getElementById('refreshSpinner');
        const refreshText = document.getElementById('refreshText');
        const dashboard = document.querySelector('.dashboard');
        
        spinner.classList.add('hidden');
        refreshText.textContent = 'Refresh Data';
        dashboard.classList.remove('loading');
    }

    updateLastUpdated() {
        const now = new Date();
        const timestamp = now.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        document.getElementById('lastUpdated').textContent = `Last updated: ${timestamp}`;
    }

    updateDashboard() {
        const data = this.stateData[this.currentState] || this.getDefaultStateData();
        
        this.updateAIAnalysis(data);
        this.updatePoliticalSentiment(data);
        this.updateRegulatoryChanges(data);
        this.updateNewsFeed(data);
        this.updateComplianceAlerts(data);
    }

    getDefaultStateData() {
        return {
            name: "State",
            sentiment: 0.0,
            riskScore: 6.0,
            regulations: [],
            news: [],
            alerts: []
        };
    }

    updateAIAnalysis(data) {
        const avgConfidence = data.regulations.length > 0 ? 
            Math.round(data.regulations.reduce((sum, reg) => sum + reg.confidence, 0) / data.regulations.length) : 75;
        
        document.getElementById('confidenceScore').textContent = `${avgConfidence}%`;
        
        const riskLevel = data.riskScore >= 7.5 ? 'High' : data.riskScore >= 5.5 ? 'Medium' : 'Low';
        const riskLevelElement = document.getElementById('riskLevel');
        riskLevelElement.textContent = riskLevel;
        riskLevelElement.className = `metric-value risk-level ${riskLevel.toLowerCase()}`;
        
        document.getElementById('riskScore').textContent = data.riskScore.toFixed(1);
        
        const keyFindings = this.generateKeyFindings(data);
        const findingsList = document.getElementById('keyFindings');
        findingsList.innerHTML = keyFindings.map(finding => `<li>${finding}</li>`).join('');
    }

    generateKeyFindings(data) {
        const findings = [];
        
        if (data.regulations.length > 0) {
            const highImpactCount = data.regulations.filter(reg => reg.impact === 'High').length;
            if (highImpactCount > 0) {
                findings.push(`${highImpactCount} high-impact regulatory changes requiring immediate attention`);
            }
            
            const recentChanges = data.regulations.filter(reg => new Date(reg.date) > new Date('2024-01-01')).length;
            findings.push(`${recentChanges} regulatory updates in the past year`);
        }
        
        if (data.sentiment > 0.2) {
            findings.push(`Favorable regulatory environment with positive sentiment (${data.sentiment.toFixed(1)})`);
        } else if (data.sentiment < -0.2) {
            findings.push(`Challenging regulatory climate with restrictive sentiment (${data.sentiment.toFixed(1)})`);
        }
        
        findings.push(`Overall risk assessment: ${data.riskScore >= 7.5 ? 'High' : data.riskScore >= 5.5 ? 'Medium' : 'Low'} complexity environment`);
        
        return findings.slice(0, 4);
    }

    updatePoliticalSentiment(data) {
        const sentimentValue = document.getElementById('sentimentValue');
        const gauge = document.getElementById('sentimentGauge');
        
        sentimentValue.textContent = data.sentiment.toFixed(1);
        
        // Update gauge needle position (convert -1 to 1 range to 0 to 180 degrees)
        const rotation = ((data.sentiment + 1) / 2) * 180;
        gauge.style.setProperty('--needle-rotation', `${rotation}deg`);
    }

    updateRegulatoryChanges(data) {
        const container = document.getElementById('regulatoryChanges');
        container.innerHTML = '';
        
        if (data.regulations.length === 0) {
            container.innerHTML = '<p class="no-data">No recent regulatory changes for this state.</p>';
            return;
        }
        
        data.regulations.forEach(regulation => {
            const regulationElement = this.createRegulationElement(regulation);
            container.appendChild(regulationElement);
        });
    }

    createRegulationElement(regulation) {
        const div = document.createElement('div');
        div.className = 'regulation-item';
        
        div.innerHTML = `
            <div class="regulation-header">
                <h3 class="regulation-title">${regulation.title}</h3>
                <span class="impact-badge impact-${regulation.impact.toLowerCase()}">${regulation.impact} Impact</span>
            </div>
            <p class="regulation-description">${regulation.summary}</p>
            <div class="regulation-footer">
                <div class="regulation-meta">
                    <span class="effective-date">Date: ${new Date(regulation.date).toLocaleDateString()}</span>
                    <span class="confidence-indicator">Confidence: ${regulation.confidence}%</span>
                </div>
                <a href="${regulation.source}" target="_blank" class="source-link">View Source Document</a>
            </div>
        `;
        
        return div;
    }

    updateNewsFeed(data) {
        const container = document.getElementById('newsFeed');
        container.innerHTML = '';
        
        if (data.news.length === 0) {
            container.innerHTML = '<p class="no-data">No recent news for this state.</p>';
            return;
        }
        
        data.news.forEach(article => {
            const articleElement = this.createNewsElement(article);
            container.appendChild(articleElement);
        });
    }

    createNewsElement(article) {
        const div = document.createElement('div');
        div.className = 'news-item';
        
        const sentimentClass = article.sentiment > 0.1 ? 'positive' : 
                              article.sentiment < -0.1 ? 'negative' : 'neutral';
        const sentimentText = article.sentiment > 0.1 ? 'Favorable' : 
                             article.sentiment < -0.1 ? 'Concerning' : 'Neutral';
        
        div.innerHTML = `
            <div class="news-header">
                <h3 class="news-title">${article.headline}</h3>
                <span class="sentiment-indicator sentiment-${sentimentClass}">${sentimentText}</span>
            </div>
            <p class="news-summary">${article.summary}</p>
            <div class="news-meta">
                <span class="news-date">${new Date(article.date).toLocaleDateString()}</span>
                <a href="${article.source}" target="_blank" class="source-link">Read Full Article</a>
            </div>
        `;
        
        return div;
    }

    updateComplianceAlerts(data) {
        const container = document.getElementById('complianceAlerts');
        container.innerHTML = '';
        
        if (data.alerts.length === 0) {
            container.innerHTML = '<p class="no-data">No compliance alerts for this state.</p>';
            return;
        }
        
        data.alerts.forEach(alert => {
            const alertElement = this.createAlertElement(alert);
            container.appendChild(alertElement);
        });
    }

    createAlertElement(alert) {
        const div = document.createElement('div');
        div.className = 'alert-item';
        
        div.innerHTML = `
            <div class="alert-header">
                <h3 class="alert-title">${alert.title}</h3>
                <span class="urgency-badge urgency-${alert.urgency.toLowerCase()}">${alert.urgency}</span>
            </div>
            <p class="alert-description">${alert.description}</p>
            <div class="alert-type">Type: ${alert.type}</div>
        `;
        
        return div;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StateRegWatchApp();
});