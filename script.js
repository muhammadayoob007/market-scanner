// 1. Live Ticker Tape (Now with Crypto!)
function loadTicker() {
    const container = document.getElementById('ticker-container');
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbols": [
            { "proName": "BINANCE:BTCUSDT", "title": "Bitcoin" },
            { "proName": "BINANCE:ETHUSDT", "title": "Ethereum" },
            { "proName": "BINANCE:SOLUSDT", "title": "Solana" },
            { "proName": "OANDA:XAUUSD", "title": "Gold" },
            { "proName": "OANDA:XAGUSD", "title": "Silver" },
            { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500" },
            { "proName": "FOREXCOM:NSXUSD", "title": "Nasdaq 100" }
        ],
        "showSymbolLogo": true,
        "colorTheme": "dark",
        "isTransparent": true,
        "displayMode": "adaptive",
        "locale": "en"
    });
    container.appendChild(script);
}

// 2. Stock Market Heatmap (Top Left)
function loadStockHeatmap() {
    const container = document.getElementById('tradingview-stock-heatmap');
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "exchanges": [],
        "dataSource": "SPX500", 
        "grouping": "sector",
        "blockSize": "market_cap_basic",
        "blockColor": "change",
        "locale": "en",
        "symbolUrl": "",
        "colorTheme": "dark",
        "hasTopBar": true, 
        "isTransparent": true,
        "width": "100%",
        "height": "100%"
    });
    container.appendChild(script);
}

// 3. Cryptocurrency Heatmap (Bottom Left)
function loadCryptoHeatmap() {
    const container = document.getElementById('tradingview-crypto-heatmap');
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "dataSource": "CRYPTO",
        "blockSize": "market_cap_calc",
        "blockColor": "change",
        "locale": "en",
        "symbolUrl": "",
        "colorTheme": "dark",
        "hasTopBar": true,
        "isTransparent": true,
        "width": "100%",
        "height": "100%"
    });
    container.appendChild(script);
}

// 4. Searchable Advanced Chart (Right Side)
function loadChart() {
    const container = document.getElementById('tradingview-chart');
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
        new TradingView.widget({
            "autosize": true,
            "symbol": "OANDA:XAUUSD", 
            "interval": "15",
            "timezone": "Asia/Kuala_Lumpur",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "enable_publishing": false,
            "backgroundColor": "rgba(19, 23, 34, 1)",
            "gridColor": "#2a2e39",
            "hide_top_toolbar": false, 
            "hide_legend": false,
            "save_image": false,
            "container_id": "tradingview-chart",
            "toolbar_bg": "#131722",
            "studies": [
                "Volume@tv-basicstudies",
                "RSI@tv-basicstudies"
            ]
        });
    };
    container.appendChild(script);
}

// Execute all scripts when the page loads
window.onload = () => {
    loadTicker();
    loadStockHeatmap();
    loadCryptoHeatmap();
    loadChart();
};