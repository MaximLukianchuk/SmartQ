# SmartQ

SmartQ - open source проект для организации очередей

![Очередь](http://cppstudio.com/wp-content/images/article/queue.jpg)

### Соглашения
+ ветки именуются в формате login.feauture/TASK-ID, login.TASK-ID, login.feature
+ код должен удовлетворять правилам [code style](https://github.com/airbnb/javascript)
+ перед сливанием ветки сквошим все коммиты в один

### Минимальные требования
+ Node `>=10`
+ Git `>=2.13.0`

### Быстрый старт
```
git clone https://github.com/MarkSmirnov13/SmartQ.git
cd SmartQ
cd server
npm ci
cd ../client
npm ci
cd ../
npm run dev
```

### Eslint
+ для проверки кода на соответсвие правилам выполните в корне проекта: `npm run lint`
+ для автоматического исправления ошибок: `npm run lint:fix`