document.addEventListener('DOMContentLoaded', () => {
    const marketData = {
        'AAPL': 150,
        'GOOGL': 2800,
        'AMZN': 3400,
        'MSFT': 300,
        'TSLA': 700
    };

    const portfolio = {};

    const marketDataTable = document.getElementById('market-data-table').getElementsByTagName('tbody')[0];
    const portfolioTable = document.getElementById('portfolio-table').getElementsByTagName('tbody')[0];
    const portfolioValueDisplay = document.getElementById('portfolio-value');

    const stockSymbolInput = document.getElementById('stock-symbol');
    const stockQuantityInput = document.getElementById('stock-quantity');
    const buyStockButton = document.getElementById('buy-stock');
    const sellStockButton = document.getElementById('sell-stock');

    function populateMarketData() {
        marketDataTable.innerHTML = '';
        for (const [symbol, price] of Object.entries(marketData)) {
            const row = marketDataTable.insertRow();
            row.insertCell(0).textContent = symbol;
            row.insertCell(1).textContent = '$${price.toFixed(2)}';
        }
    }

    function updatePortfolioDisplay() {
        portfolioTable.innerHTML = '';
        let totalValue = 0;
        for (const [symbol, data] of Object.entries(portfolio)) {
            const row = portfolioTable.insertRow();
            row.insertCell(0).textContent = symbol;
            row.insertCell(1).textContent = data.quantity;
            row.insertCell(2).textContent = '$${data.averagePrice.toFixed(2)}';
            totalValue += data.quantity * marketData[symbol];
        }
        portfolioValueDisplay.textContent = totalValue.toFixed(2);
    }

    function buyStock(symbol, quantity) {
        const price = marketData[symbol];
        if (!portfolio[symbol]) {
            portfolio[symbol] = { quantity: 0, averagePrice: 0 };
        }
        const totalCost = portfolio[symbol].quantity * portfolio[symbol].averagePrice + quantity * price;
        portfolio[symbol].quantity += quantity;
        portfolio[symbol].averagePrice = totalCost / portfolio[symbol].quantity;
        updatePortfolioDisplay();
    }

    function sellStock(symbol, quantity) {
        if (portfolio[symbol] && portfolio[symbol].quantity >= quantity) {
            portfolio[symbol].quantity -= quantity;
            if (portfolio[symbol].quantity === 0) {
                delete portfolio[symbol];
            }
            updatePortfolioDisplay();
        } else {
            alert('Not enough shares to sell.');
        }
    }

    buyStockButton.addEventListener('click', () => {
        const symbol = stockSymbolInput.value.toUpperCase();
        const quantity = parseInt(stockQuantityInput.value);
        if (marketData[symbol] && quantity > 0) {
            buyStock(symbol, quantity);
        } else {
            alert('Invalid stock symbol or quantity.');
        }
    });

    sellStockButton.addEventListener('click', () => {
        const symbol = stockSymbolInput.value.toUpperCase();
        const quantity = parseInt(stockQuantityInput.value);
        if (marketData[symbol] && quantity > 0) {
            sellStock(symbol, quantity);
        } else {
            alert('Invalid stock symbol or quantity.');
        }
    });

    populateMarketData();
});