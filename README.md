# Answers

## 2019

- [x] Что такое Reflow/Repaint [Ссылка](https://github.com/evless/topics/blob/master/browser/repaint-reflow/README.md)
- [x] Написать примеры для Reflow/Repaint [Ссылка](https://github.com/evless/topics/blob/master/browser/repaint-reflow/example.html)
- [x] Аттрибут defer/async [Ссылка](https://github.com/evless/topics/blob/master/browser/defer-async/README.md)
- [x] Разобраться со способами кэширования статики и с тем, как можно управлять порядком загрузки ресурсов на странице. [Ссылка](https://github.com/evless/topics/blob/master/cache/README.md)
- [x] Разобраться с тем, как рендерится страница. [Ссылка](https://github.com/evless/topics/blob/master/browser/render/README.md)
- [x] Написать демо-приложение/приложения, где будут на примере разобраны проблемы производительности. [С использованием async](https://github.com/evless/topics/blob/master/browser/render/example/with-async.html) [Без использования async](https://github.com/evless/topics/blob/master/browser/render/example/without-async.html)
- [x] Написать свой redux (можно опираться на материалы из интервента), разобраться в том, как работает redux. [Ссылка](https://github.com/evless/DuckX)
- [x] Попробовать интегрировать кэширование в connect. [Ссылка](https://github.com/evless/DuckX)
- [x] Переписать redux, но уже с использованием стримов (RxJS). [Ссылка](https://github.com/evless/DuckX/tree/rxjs)
- [x] Как устроен интерпритатор Javascript [Ссылка](https://github.com/evless/topics/blob/master/engine/README.md)
- [x] Работа тасок и микротасок [Ссылка](https://github.com/evless/topics/blob/master/engine/README.md)
- [x] Нарисовать схемку работы Тасок и микротасок [Ссылка](https://github.com/evless/topics/blob/master/engine/README.md)
- [x] Разобраться в нюансах работы интерпретатора/vm/gc/event loop
- [x] Как работают интерпретаторы современных ЯП (в частности JS)? [Ссылка](https://github.com/evless/topics/blob/master/engine/README.md)
- [x] Чем отличаются интерпретируемые языки от компилируемых? [Ссылка](https://github.com/evless/topics/blob/master/engine/README.md)
- [x] Для чего нужны виртуальные машины языкам программирования? [Ссылка](https://github.com/evless/topics/blob/master/engine/README.md)
- [x] Что такое JIT-компиляция, для чего она нужна? [Ссылка](https://github.com/evless/topics/blob/master/engine/README.md)
- [ ] Рассказать про структуры данных, рассказать какие структуры данных используются в js, в его интерпретаторе. [Ссылка](https://github.com/evless/topics/blob/master/data-structure/README.md)
- [x] Прочитать про кэширование в общем смысле (изучить распространенные алгоритмы кэширования, типа LRU). [Ссылка](https://github.com/evless/topics/blob/master/cache/README.md)
- [x] Реализовать собственную in memory db и использовать ее для кэширования запросов к демо-приложению на node.js. [Ссылка](https://github.com/evless/in-memory-db)
- [x] Опубликовать демо приложение с in memory db на своём домене [Ссылка](http://evless.me/in-memory-db-test/)
- [x] Попытаться максимально увеличить кол-во запросов при помощи оптимизаций в своей in memory db, но при этом важно не поломать релевантность ответов (то есть данные должны быть валидными).
- [x] Провести нагрузочное тестирование. [Ссылка](http://s.csssr.ru/U7RQKLD4J/Aggregate_Graph.jmx_UsersevlessAggregate_Graph.jmx_-_Apache_JMeter_5.1.1_r1855137_2019-05-11_13-56-42.jpg)   [Зеркало](https://github.com/evless/in-memory-db/blob/master/Jmeter-test.jpg?raw=true)
- [x] Написать приложения, имплементирующие REST API на ноде (асинхронное однопоточное приложение) и java (многопоточное приложение). [Ссылка](https://github.com/evless/thread-and-async)
- [ ] Разобраться с тем, что такое потоки (и какие бывают потоки), и что такое процессы.
- [ ] Чем отличаются потоки от процессов.

## 2020

- [x] Разобраться в особенностях WebAssembly. [Ссылка](https://habr.com/ru/post/475778/)
  - [x] Выяснить, какую задачу решает эта технология, насколько она готова к использованию, стоит ли сейчас использовать где-то в своих приложениях [Сслка на пример использования](https://d2jta7o2zej4pf.cloudfront.net/)
  - [x] Написать небольшую библиотеку на любом языке с трансляцией в web assembly, которая бы наглядно демонстрировала особенности и возможные преимущества данной технологии. [Ссылка](https://github.com/evless/webassembly-example)
- [ ] Углубить знания в алгоритмах и структурах данных. [Ссылка](https://github.com/evless/topics/blob/master/algorithms/README.md)
  - [ ] Прочитать книги:
    - [x] Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
    - [ ] Алгоритмы. Построение и анализ
    - [ ] Алгоритмы на Java
    - [x] (Опционально) пройти какой-нибудь курс по данной теме [Ссылка](https://youtu.be/KdZ4HF1SrFs)
  - [x] Использовать любой низкоуровневый язык: C, C++, etc. [Ссылка](https://github.com/evless/webassembly-example)
  - [x] Разобраться с тем, как работает память компьютера. Как мы можем взаимодействовать с ней. [Ссылка](https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%8F_%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D1%8C) [Ссылка](https://habr.com/ru/post/489360/)
  - [ ] (Опционально) Какие проблемы есть при прямом управлении памятью?
  - [x] Познакомиться с Persistent Data Structures. Разобраться, в чем их основное преимущество по сравнению с классическими неизменяемыми структурами данных. [Ссылка](https://en.wikipedia.org/wiki/Persistent_data_structure) [Пример библиотеки](https://github.com/immutable-js/immutable-js)
- [ ] Изучить паттерны проектирования и лучшие практики программирования в целом. [Ссылка](https://github.com/evless/topics/blob/master/patterns/README.md)
  - [x] Рассказать о  паттернах на текущем проекте. [Ссылка](https://github.com/evless/topics/blob/master/patterns/README.md)
  - [ ] Прочитать следующие книги:
    - [ ] Head First «​​Паттерны проектирования»​​
    - [x] GOF «​​Паттерны проектирования»​
    - [ ] (Опционально) Роберт Мартин «​​Чистый код»​​
    - [ ] (Опционально) Мартин Фаулер «​​Рефакторинг»​ (возможно, уже выйдет с примерами на JS)
  - [ ] Рассказать, какие паттерны кажутся устаревшими. Какие паттерны есть в ФП.
- [ ] (Опционально) Изучить нейронные сети (машинное обучение).
  - [ ] Разобраться с Tensorflow.js: как нейронные сети можно применять в вебе.
  - [ ] Реализовать демо приложение
