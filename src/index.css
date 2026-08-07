@import "tailwindcss";

@layer base {
  :root {
    --primary: #0a0a0a;
    --secondary: #444;
    --border: rgba(0,0,0,0.1);
    --bg: #ffffff;
  }
  
  body.dark-mode {
    --primary: #f5f5f5;
    --secondary: #888;
    --border: rgba(255,255,255,0.1);
    --bg: #0a0a0a;
    background-color: var(--bg);
  }

  body {
    background-color: var(--bg);
    color: var(--primary);
    @apply transition-colors duration-500 font-sans;
  }
}

.rainbow-mode {
  animation: rainbow 0.5s linear infinite;
}
.rainbow-mode * {
  animation: rainbow 0.5s linear infinite;
}

@keyframes rainbow {
  0% { color: #ff0000; border-color: #ff0000; }
  17% { color: #ff00ff; border-color: #ff00ff; }
  33% { color: #0000ff; border-color: #0000ff; }
  50% { color: #00ffff; border-color: #00ffff; }
  67% { color: #00ff00; border-color: #00ff00; }
  83% { color: #ffff00; border-color: #ffff00; }
  100% { color: #ff0000; border-color: #ff0000; }
}

@keyframes fall {
  0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
}

.confetti-piece {
  position: fixed;
  top: -10px;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  animation: fall 3s linear forwards;
  pointer-events: none;
  z-index: 50;
}

@media print {
  @page {
    margin-top: 2cm;
    margin-bottom: 2cm;
    margin-left: 1.5cm;
    margin-right: 1.5cm;
  }

  body {
    background-color: white !important;
    color: black !important;
  }
  
  /* Hide UI elements that shouldn't be printed */
  button[aria-label="Back to top"], button[aria-label*="Print"], button[aria-label*="Theme"] {
    display: none !important;
  }

  /* Reset spacing for print */
  main {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }

  /* Ensure colors and backgrounds print correctly */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Prevent page breaks inside important items instead of whole sections */
  .print-avoid-break {
    page-break-inside: avoid;
    break-inside: avoid;
  }
}