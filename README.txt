Этапы: 
1)Установить пакеты с помощью npm install
2)Для запуска в консоли ввести gulp
3)Проверить файл fonts.js (ОБЯЗАТЕЛЬНО!!!), в коде оставил коммент на случай ПО, 

Для редактирования файлов .html потребуется расширение в IDEA Path Autocomplete , для замены @ в src на пути или просто не использовать @ в пути к ресурсу и прописывать полный путь.
Для большей информации о плагине см. https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete

СБОРКА СОБРАНА НА ПО Ubuntu, поэтому все этапы стоит проверить все js файлы, т.к. там есть комменты где и что поменять, чтобы всё работало без ошибок


Запуск сборок:
1) Версия для разработки "gulp" или "npm run dev"
2) Версия для продакшена "npm run build"
3) Создание архива прод версии "npm run zip"
4) В файле config/ftp.js указываются данные фтп сервера и далее командой "npm run ftp" заливается за сервер
ВАЖНО путь на сервер будет аналогичен названиям папок, при желании их можно заменить в файле tasks/ftp.js

ПРИЯТНОГО ПОЛЬЗОВАНИЯ
