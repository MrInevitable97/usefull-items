//Помощник для редактирования файлов
import replace from 'gulp-replace' // Поиск и замена
import plumber from 'gulp-plumber' //Для обработки ошибок
import notify from 'gulp-notify' // Для подсказок в виде сообщений
import browsersync from 'browser-sync'
import newer from 'gulp-newer'
import ifPlugin from 'gulp-if'

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync:browsersync,
	newer:newer,
	if: ifPlugin,
}