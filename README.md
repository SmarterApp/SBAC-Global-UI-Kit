# SBAC-Global-UI-Kit
### Demo
Demo the UI components and styles by cloning the repository and opening index.html
```bash
git clone https://github.com/SmarterApp/SBAC-Global-UI-Kit.git
open SBAC-Global-UI-Kit/index.html
```
### Development Installation
To install a development versions of the style kit, run the following command where TAG_NAME points to a specific development release. See <a href="https://github.com/SmarterApp/SBAC-Global-UI-Kit/releases">releases</a>
```bash
npm install --save-dev git+https://github.com/SmarterApp/SBAC-Global-UI-Kit.git#TAG_NAME
```
#### Angular 2+
To use the style kit's styles and images in an Angular project, add these entries into .angular-cli.json
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
Next you will need to rebuild your Angular project using the following commands:
```bash
ng build
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
    <li>Install <a href="https://nodejs.org/">node.js</a></li>
</ol>

#### Instructions
```bash
npm install
npm run build
```
### Release
#### Development Releases
To publish a development release simply create a lightweight tag on your latest commit. Example:
```bash
git tag v0.0.1
git push origin v0.0.1
```