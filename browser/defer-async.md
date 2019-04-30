# Асинхронные скрипты defer и async

## Проблема
Есть проблема при подключении скриптов и блокировке страницы, ибо всё выполняется синхронно. Если скрипт весит много, а после него будет идти интерфейс, то мы будем дожидаться загрузки и исполнения скрипта, а уже потом продолжать отображение документа, потому что парсер будет останавливаться на чтение и выполнение скрипта.
```html
<body>
    <p>first paragraph</p>
    <script>
        alert(1)
        alert(2)
        alert(3)
    </script>
    <!-- В этом случае мы будем дожидаться выполнения всех алертов и только потом покажется второй параграф -->
    <p>second paragraph</p>
</body>
```

## Решения
* Все скрипты выносить во внешние скрипты и подключать файлами
* Убирать все скрипты в конец `body`, что бы пользователь видел кусок `DOM-дерева`, который идет до скриптов, а потом уже ждать из загрузки
* Добавить аттрибут `async`. В этом случае браузер не будет блочить `DOM-дерево`, которое следует после этого скрипта, а будет загружать скрипт, а после его загрузки уже будет выполняться. Но если загрузка произошла раньше готовности документа, то он будет выполнен, а парсинг документа будет приастоновлен.
* Добавить аттрибут `defer`. Он делает тоже самое, что и `async`, но с тем отличием, что скрипты с аттрибутом `defer` будут выполнять в том же порядке, что они и подключены. Еще одно отличие в том, что `defer` дожидается готовности документа и только потом начнет своё выполнение.
```html
<!--
Если скрипт 2 загрузился раньше 1, то он будет дожидаться, когда подгрузится скрипт 1 и только потом будет выполняться.
-->
<script defer src="1.js"></script>
<script defer src="2.js"></script>
```

## Замечания
* При указании и `async` и `defer` будет использон только `async`, если он не поддерживается браузером, то будет использоваться `defer`
* Аттрибуты работают только для внешних скриптов
```html
<!-- Будет работать -->
<script defer src="1.js"></script>

<!-- Не будет работать -->
<script defer>
    alert(0)
</script>
```
* Без указания аттрибутов `defer` или `async` порядок выполнения скриптов будет таким же, в каком порядке они подключены
```html
<!-- Сначала выполнился big, а потом уже small, даже если small загрузится раньше -->
<script src="big.js"></script>
<script src="small.js"></script>

<!-- Тут начнет своё исполнение раньше тот, который раньше загрузился -->
<script async src="big.js"></script>
<script async src="small.js"></script>

<!-- Тут они будут выполняться в том же порядке, что и подключены, потому что defer следит за порядком выполнения скриптов -->
<script defer src="big.js"></script>
<script defer src="small.js"></script>
```

## Полезные ссылки
* [Внешние скрипты, порядок исполнения](https://learn.javascript.ru/external-script)
* [Асинхронный JavaScript против отложенного](https://habr.com/ru/post/323790/)