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


