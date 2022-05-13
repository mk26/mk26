import React from 'react'
import { createRoot } from 'react-dom/client';

import App from './App'

import registerServiceWorker from './registerServiceWorker'
import { ParallaxProvider } from 'react-scroll-parallax'

import 'react-photoswipe/lib/photoswipe.css'
import './index.scss'

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
)
registerServiceWorker()
