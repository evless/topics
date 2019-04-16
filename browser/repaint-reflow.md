# Repaint and Reflow

- Repaint - Вызывается, когда происходят изменения color, background-color, border-radius border-color, ...
- Reflow - Вызывается, когда происходит какая-то трансформация font-size, width, height, ...
- При вызове Reflow в конце будет также вызван Repaint

### Примеры:

- `display: none` вызывает и repaint и reflow. А вот `visibility: hidden` вызывает только repaint, потому что не требует никаких трансформаций

```js
const element = document.body.style;

// Тут на каждое действие будет происходить отдельный вызов
// reflow и repaint, сейчас браузеры оптимизированы под это
// но лучше всё равно не полагаться на браузер всегда
element.padding = '5px' // reflow, repaint
element.color = 'red' // reflow

element.offsetTop // reflow, repaint
```

### Советы:

- Лучше изменять свойства элемента через CSS классы, так как будет вызываться только 1 reflow, repaint.
- Элементы лучше создавать сначала в памяти, а уже потом добавлять в DOM-дерево, что бы сократть кол-во repaint'ов
- Уменьшить кол-во DOM элементов, потому что это влияет при reflow на рассчет всех потомков


### Полезные ссылки:
- http://chikuyonok.ru/2010/11/optimization-story/
- https://habr.com/ru/company/yandex/blog/239169/
- https://webo.in/articles/all/2009/31-rending-restyle-reflow-relayout/
- https://webo.in/articles/habrahabr/38-css-efficiency-tests-3/
- https://webo.in/articles/habrahabr/53-semantic-dom-tree/