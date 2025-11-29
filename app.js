// Application Logic for Robot Error Code Lookup

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Get DOM elements
    const errorCodeInput = document.getElementById('errorCodeInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultsContainer = document.getElementById('resultsContainer');
    const errorCodesList = document.getElementById('errorCodesList');

    // Event listeners
    searchBtn.addEventListener('click', handleSearch);
    clearBtn.addEventListener('click', handleClear);
    errorCodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Populate error codes list
    populateErrorCodesList();

    function handleSearch() {
        const searchTerm = errorCodeInput.value.trim().toUpperCase();
        
        if (!searchTerm) {
            resultsContainer.innerHTML = `
                <div class="warning-message">
                    ⚠️ Please enter an error code to search.
                </div>
            `;
            return;
        }

        // Search for exact match
        if (errorDatabase[searchTerm]) {
            displayResult(searchTerm, errorDatabase[searchTerm]);
        } else {
            // Search for partial matches
            const matches = Object.keys(errorDatabase).filter(code => 
                code.includes(searchTerm) || 
                errorDatabase[code].title.toUpperCase().includes(searchTerm) ||
                errorDatabase[code].description.toUpperCase().includes(searchTerm)
            );

            if (matches.length > 0) {
                displayMultipleResults(matches);
            } else {
                resultsContainer.innerHTML = `
                    <div class="no-results">
                        <p>❌ No error codes found matching: <strong>${searchTerm}</strong></p>
                        <p>Please check the code and try again.</p>
                    </div>
                `;
            }
        }
    }

    function handleClear() {
        errorCodeInput.value = '';
        resultsContainer.innerHTML = `
            <div class="welcome-message">
                <p>Enter an error code above to search for its description and remedy.</p>
                <p class="code-examples">Common error codes: E001, E002, A010, A020, W100</p>
            </div>
        `;
        errorCodeInput.focus();
    }

    function displayResult(code, errorInfo) {
        const categoryColor = getCategoryColor(errorInfo.category);
        
        const html = `
            <div class="result-card ${errorInfo.category.toLowerCase()}">
                <div class="result-header">
                    <span class="error-code">${code}</span>
                    <span class="category" style="background-color: ${categoryColor}">${errorInfo.category}</span>
                </div>
                <h2 class="error-title">${errorInfo.title}</h2>
                <div class="error-section">
                    <h3>Description</h3>
                    <p>${errorInfo.description}</p>
                </div>
                <div class="error-section remedy">
                    <h3>🔧 Remedy / Solution</h3>
                    <div class="remedy-text">${formatRemedy(errorInfo.remedy)}</div>
                </div>
            </div>
        `;
        
        resultsContainer.innerHTML = html;
    }

    function displayMultipleResults(matches) {
        let html = `<div class="multiple-results">
            <p>Found ${matches.length} error code(s) matching your search:</p>
            <div class="results-list">`;

        matches.forEach(code => {
            const errorInfo = errorDatabase[code];
            const categoryColor = getCategoryColor(errorInfo.category);
            html += `
                <div class="result-item" onclick="searchErrorCode('${code}')">
                    <div class="result-item-header">
                        <span class="error-code">${code}</span>
                        <span class="category" style="background-color: ${categoryColor}">${errorInfo.category}</span>
                    </div>
                    <p class="error-title">${errorInfo.title}</p>
                    <p class="error-description">${errorInfo.description}</p>
                </div>
            `;
        });

        html += `</div></div>`;
        resultsContainer.innerHTML = html;

        // Add click handlers
        document.querySelectorAll('.result-item').forEach(item => {
            item.style.cursor = 'pointer';
        });
    }

    function populateErrorCodesList() {
        let html = '';
        Object.keys(errorDatabase).sort().forEach(code => {
            const errorInfo = errorDatabase[code];
            const categoryColor = getCategoryColor(errorInfo.category);
            html += `
                <div class="code-card" onclick="searchErrorCode('${code}')">
                    <div class="code-header">
                        <span class="code">${code}</span>
                        <span class="cat" style="background-color: ${categoryColor}">${errorInfo.category}</span>
                    </div>
                    <p class="code-title">${errorInfo.title}</p>
                </div>
            `;
        });
        errorCodesList.innerHTML = html;
    }

    function formatRemedy(remedy) {
        if (remedy.includes('\n')) {
            const steps = remedy.split('\n');
            return '<ol>' + steps.map(step => `<li>${step.replace(/^\d+\.\s*/, '')}</li>`).join('') + '</ol>';
        }
        return `<p>${remedy}</p>`;
    }

    function getCategoryColor(category) {
        const colors = {
            'Error': '#dc3545',
            'Alert': '#ffc107',
            'Warning': '#ff9800',
            'Status': '#28a745',
            'Critical': '#8b0000'
        };
        return colors[category] || '#6c757d';
    }
}

// Global function for onclick handlers
function searchErrorCode(code) {
    const input = document.getElementById('errorCodeInput');
    input.value = code;
    input.focus();
    document.getElementById('searchBtn').click();
}
