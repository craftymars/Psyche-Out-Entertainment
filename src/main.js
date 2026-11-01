/*
  PROJECT: Psyche Out Entertainment
  DESIGNER & DEVELOPER: Mariah Crafts
  ROLE: Founder & Web Developer
*/

import './styles/global.css'
import './styles/header.css'
import './styles/home.css'

import { createHeader } from './components/header.js'
import { createHome } from './components/home.js'
import { createFooter } from './components/footer.js'

const app = document.querySelector('#app')

app.innerHTML = `
  ${createHeader()}
  ${createHome()}
  ${createFooter()}
`












