# Repaint and Reflow

- Repaint - Вызывается, когда происходят изменения color, background-color, border-radius border-color, ...
- Reflow(re-layout) - Вызывается, когда происходит какая-то трансформация font-size, width, height, ...
- При вызове Reflow в конце будет также вызван Repaint

### Примеры:

- `display: none` вызывает и repaint и reflow. А вот `visibility: hidden` вызывает только repaint, потому что не требует никаких трансформаций
- Добавление/удаление/обновление любого элемента будет вызывать перерасчет дерева (reflow)
- Анимация DOM-элемента на странице
- Добавление файла стилей, добавление класса для элемента
- Прокрутка страницы, изменение окна браузера
- Вызов offsetTop, offsetLeft, offsetWidth, offsetHeight вызовут моментальную перерисовку и всю скопившуюся очередь

```js
const element = document.body.style;

// Тут на каждое действие будет происходить отдельный вызов
// reflow и repaint, сейчас браузеры оптимизированы под это
// они будут складывать изменения в очередь, что бы единожды это выполнить
// но лучше всё равно не полагаться на браузер всегда
element.padding = '5px' // reflow + repaint
element.border = "10ps solid black" // +1 reflow + repaint
element.color = 'red' // reflow

element.offsetTop // reflow, repaint
```

### Живые примеры:
```js
// Нужно написать живые примеры
// 1. Пример с выезжающим меню
// 2. Примеры с замерами в дебаггере
```

### Советы:

- Лучше изменять свойства элемента через CSS классы, так как будет вызываться только 1 reflow, repaint.
- Элементы лучше создавать сначала в памяти, а уже потом добавлять в DOM-дерево, что бы сократть кол-во repaint'ов
- Уменьшить кол-во DOM элементов, потому что это влияет при reflow на рассчет всех потомков
- Если нужно изменять свойства напрямую, то лучше сначала прятать элемент `display: none` (1 reflow + repaint), изменять значения стилей, а потом убирать `display: none`
- Вместо того, что бы каждый раз вызывать offsetTop, offsetLeft, offsetWidth, offsetHeight, лучше их кэшировать в переменные 
```js
    var top = element.offsetTop;
    var left = element.offsetLeft;
    var width = element.offsetWidth;
    var height = element.offsetHeight;

    left += 10;
    top += 10
    element.left = left;
    element.top = top;
```
- Если задать элемету `position: absolute`, то это не будет вызывать reflow всех дочерних элементов, а максимум будет repaint всех дочерних элементов


### Полезные ссылки:
- [История одной оптимизации](http://chikuyonok.ru/2010/11/optimization-story/)
- [Аппаратное ускорение в жизни верстальщика. Семинар в Яндексе](https://habr.com/ru/company/yandex/blog/239169/)
- [Рендеринг: отрисовка, перерасчет дерева / макета, стилизация](https://webo.in/articles/all/2009/31-rending-restyle-reflow-relayout/)
- https://webo.in/articles/habrahabr/38-css-efficiency-tests-3/
- https://webo.in/articles/habrahabr/53-semantic-dom-tree/
- https://webkit.org/blog/114/webcore-rendering-i-the-basics/
- https://dev.opera.com/articles/efficient-javascript/?page=3#reflow