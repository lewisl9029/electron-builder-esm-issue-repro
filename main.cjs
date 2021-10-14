const electron_ = require('electron')

import('./main.js').then((module) => module.init(electron_))
