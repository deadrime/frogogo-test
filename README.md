# frogogo-test

Установка
```
yarn
```

Запуск
```
yarn dev
```

Билд
```
yarn build
```

## Некоторые уточнения
- Я немного недолюбливаю JSX, поэтому решил попробовать без него. Обычно я так не пишу, хотя что-то в этом есть.
- Заюзал Stylus, потому что я его люблю, мне нравится, что он съедает любой синтакси и можно, например, просто вставить обычный CSS из девтулзов, а потом отформатировать. Без JSX было бы красиво с emotion, но писать стили в camelCase я не очень люблю.
- Не хотелось оверхэдить и добавлять redux, поэтому я заюзал context API, используется в виде HOC в AccountCart и Cart.
- Svg импортятся в виде компонентов, решил сделать так, чтобы можно было юзать fill: currentColor и легко контролировать цвет иконки.