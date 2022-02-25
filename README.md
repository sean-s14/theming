# Theming

Theming with CSS & jQuery (and optionally Bootstrap and Sass)

## Upon load
- Spinner is displayed upon entering page
- `app.js` checks local storage for key `theme`
- If `theme` is `dark` then loop through all elements with classes that contain either `light` or `dark`
- For each element, use regex to replace all instances of `light` with `dark`, and `dark` with `light`
- Once classes have been set, change spinner `display` attribute to `none`

## When toggling theme
- `app.js` checks local storage for key `theme`
- If `theme` is `dark` then loop through all elements with classes that contain either `light` or `dark`
- For each element, use regex to replace all instances of `light` with `dark`, and `dark` with `light`
- Update local storage with new theme
