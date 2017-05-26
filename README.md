# SBAC-Global-UI-Kit
### Development Installation
#### Angular 2+
Run the following NPM command in your project root directory
```bash
npm install --save-dev git+https://github.com/SmarterApp/SBAC-Global-UI-Kit.git#develop
```
Or you can manually add the following entry to your package.json
```javascript
"devDependencies": {
    "sbac-ui-kit": "git+https://github.com/SmarterApp/SBAC-Global-UI-Kit.git#develop"
}
```
To use the style kit's styles and images add these entries into .angular-cli.json
```javascript
"apps": [
  {
    "assets": [
      {"glob": "**/*", "input": "../node_modules/sbac-ui-kit/dist/images", "output": "assets/image"}
    ],
    "styles": [
      "../node_modules/sbac-ui-kit/dist/css/sbac-ui-kit.min.css"
    ]
  }
]
```
Example HTML using styles and images:
```html
<i class="fa fa-user-circle"></i>
<i class="glyphicon glyphicon-menu-right"></i>
<img src="/assets/image/SmarterBalanced-Logo.png">
```
### Build
#### Prerequisites
<ol>
    <li>Install node.js (https://nodejs.org/en/)</li>
</ol>

#### Instructions
```bash
npm install
npm run build
```