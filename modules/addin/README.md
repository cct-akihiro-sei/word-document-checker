# Word Document Checker (仮)

## Overview

React 17 + TypeScript を使った Microsoft Word 向けのアドイン開発プロジェクトです。

## Setup

### Install tools

1. Install Visual Studio Code.
2. Install Node.js 16.15 (LTS).
3. Install yarn.


### Build & Debug on Word app

1. Install dependent libs.
```
$ cd word-document-checker
$ yarn
```
2. Build project.
```
$ yarn build
```
3. Debug on Word app.
```
$ yarn start:web
```
-> Word app with the add-in added should start.


### If you initialize a new add-in project.

1. Install Yeomon & Office Add-in Generator for Global

```
$ yarn global add yo generator-office
```


### Reference URLs

- https://docs.microsoft.com/ja-jp/office/dev/add-ins/develop/develop-add-ins-vscode
- https://docs.microsoft.com/ja-jp/office/dev/add-ins/quickstarts/word-quickstart?tabs=yeomangenerator
- https://docs.microsoft.com/ja-jp/office/dev/add-ins/develop/add-in-manifests?tabs=tabid-1
- https://docs.microsoft.com/en-us/office/dev/add-ins/overview/office-add-in-code-samples
