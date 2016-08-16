import {names} from './sub.js'
import $ from 'jquery'
import 'babel-polyfill'

function index() {

    $('<h1>Names</h1>').appendTo('body');
    const ul = $('<ul></ul>').appendTo('body');
    for (const name of names) {
        $('<li></li>').text(name).appendTo(ul);
    }
}
module.exports = index
