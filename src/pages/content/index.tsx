import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'

const root = document.createElement('div')

root.id = 'chrome-extension-youtube-ad-blocker'

document.body.append(root)

const rootIntoShadow = document.createElement('div')
rootIntoShadow.id = 'shadow-root'

const shadowRoot = root.attachShadow({ mode: 'open' })
shadowRoot.appendChild(rootIntoShadow)

createRoot(rootIntoShadow).render(<Home />)
