### Как запустить?
#### - всё просто:

  1. Установи недостающие зависимости:
```bash
  npm install 
```

  2. Далее запусти одну из этих команд:
```javascript
    "dev": "webpack --env mode=development"
    "prod": "webpack --env mode=production"
    "start": "webpack serve  --env port=2025"
```
 - `npm start` запускает локальный сервер,
 - `npm run prod` собирает сборку в prod,
 - `npm run dev` собирает сборку в dev (для дебага).
 
