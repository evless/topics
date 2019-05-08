# Таски и микротаски

*Event Loop* — бесконечный цикл, который берет в работу задачу из очереди и выполняет её. В конце либо происходит, либо нет, если оно того требуется и приступает к выполнению следующей таски. Все таски складываются в очередь по принципу LIFO, что гарантирует порядок выполнения очереди.

*Task* — задача, которую нужно выполнить, например вызов функции и последующее её выполнение.
В примере ниже мы складываем вызов `main()` в очередь. `Event Loop` берет задачу из очереди и выполняет её. Делает вызов `main()`. Потом  происходит вызов `console.log()`. Потом работа `main()` заканчивается и стек очищается.
```js
function main() {
    console.log('main');
}

main();
```

*Microtask* — Микротаски - это колбэки, которые передаются в `Promise.then()`. Они выполняются, когда очищается стек или когда закончилась выполнения таска. Если микротаск порождает новый микротаск, то он сразу будет выполнен, а не складываться в очередь.
```js
function first() {
    console.log(1)
}

function second() {
    Promise.resolve().then(() => console.log(2))
}

function third() {
    console.log(3)
}

function main() {
    first()
    second()
    third()
}

main() // 1, 3, 2
```

## Полезные ссылки
* [Иван Тулуп: асинхронщина в JS под капотом](https://habr.com/ru/company/oleg-bunin/blog/417461/)
* [Простой пример работы](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIGNvbnNvbGUubG9nKCdjbGljaycpOyAgICAKfSk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygidGltZW91dCIpOwp9LCA1MDAwKTsKCmNvbnNvbGUubG9nKCJIZWxsbyB3b3JsZCIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
* https://www.youtube.com/watch?v=cCOL7MC4Pl0&feature=youtu.be