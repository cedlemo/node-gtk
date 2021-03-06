/*
 * signal__with_details.js
 */

const gi = require('../lib/')
const Gtk = gi.require('Gtk', '3.0')
const Gdk = gi.require('Gdk', '3.0')
const common = require('./__common__.js')

gi.startLoop()
Gtk.init()

{

  let didNotify = false

  const button = new Gtk.Button()
  button.connect('notify::label', (...args) => {
    console.log('notify::label called', ...args)
    didNotify = true
  })
  button.setLabel('test')

  common.assert(button.getLabel() === 'test', 'button.setLabel did not set the label, got: ' + button.getLabel())
  common.assert(didNotify, 'notify::label not emitted')
}

console.log('done')
