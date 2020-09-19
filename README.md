# project_b4w_vuetify
Vue.js (vuetify) and Blend4Web (blender 2.79)

EN

The project was created as an experimental platform for testing vue.js and blend4web.
Code comments will supplement general information about the project. So, let's begin..

Required programs and conditions

Manjaro OS (win10 - you have to try, but there are few differences)

Download and run blender 2.79 (https://download.blender.org/release/Blender2.79/), download and add blend4web add-on (https://www.blend4web.com/en/downloads/).
Vuejs code based on vuetify (https://vuetifyjs.com/)

Sequencing

Then there are two ways, you can download this project and install it locally next to your other projects. Or participate in development by connecting to the project via github.

Change the BI engine to B4W in blender. The development server starts and you go to the project manager. When you go to the .html page, you can see how vue and blend4web work. The project now has the ability to dynamically change projects without overloading the page.

The latter was done for a reason. The purpose of these experiments: to make it possible, like vuejs, to work reactively with 3d objects, different scenes, as well as different webgl engines.

For server posting, read comments in the .html file and change links. Build b4w does not work correctly (dependencies that need to be dealt with).
To work on the server, you need all the files in the build folder, except for .html

In the near future:
testing the code in separate .vue files
temporarily blocking project buttons when dynamically loading scenes (looking for a vuejs variant)
replacement of canvas when switching to the side menu of another engine (b4w - json, verge3d / threejs - glTF)

If you have any questions:
blend3dweb@gmail.com (unless the answer is urgent)
https://discord.gg/2mk7Hy5
PM on the website: https://www.blend3dweb.ru/

RU

Проект создан, как экспериментальная площадка для проверки работы vue.js и  blend4web.
Комментарии к коду будут дополнять  общую информацию о проекте. Итак начнём..

Необходимые программы и  условия

ОС Manjaro ( win10 — надо пробовать, но отличий мало)

Скачайте и запустите  программу blender 2.79 (https://download.blender.org/release/Blender2.79/),  скачайте и добавьте аддон blend4web (https://www.blend4web.com/en/downloads/).
Код vuejs на базе vuetify (https://vuetifyjs.com/)

Последовательность действий

Дальше два пути, вы можете скачать данный проект и установить локально рядом с другими вашими проектами. Или участвовать в разработке, подключившись к проекту через github.

В программе blender меняем движок BI на B4W.  Запускается сервер разработки и вы переходите в менеджер проектов.  При переходе на страницу .html, вы можете видеть как работает vue и blend4web. В проект добавлена возможность динамически менять проекты, не перегружая страницу.

Последнее сделано не просто так. Цель данных экспериментов: сделать возможным, как и vuejs, реактивно работать с 3d объектами, разными сценами, а также разными движками webgl.

Для размещения на сервере, читайте комментарии в файле .html и меняйте ссылки.  Build b4w работает некорректно ( зависимости, в которых нужно разбираться).
Для работы на сервере нужны все файлы в папке build, кроме .html

В ближайших планах:
тестирование работы  кода в отдельных файлах .vue
временное блокирование кнопок проектов при динамической загрузке  сцен (ищу вариант  vuejs)
замена канвас при переходе на боковое меню другого движка ( b4w — json, verge3d/threejs — glTF)

Если будут вопросы:
blend3dweb@gmail.com (если ответ не срочный)
https://discord.gg/2mk7Hy5
ЛС на сайте: https://www.blend3dweb.ru/
