## Scaffolding of ReactJS Application

```
npm create vite@latest
```

## Add TailwindCSS

``
pnpm add -D tailwindcss autoprefixer postcsss

```

we need to configure tailwindcss

```

npx tailwindcss init

````

Then in the tailwind.config.js we need to add the next line

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
````

Then we need to create a postcss.config.js file in the root of our project

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Now we need to add the layers of TailwindCSS to our main css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
