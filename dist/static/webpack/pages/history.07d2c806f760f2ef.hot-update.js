/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/history",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/components/screens/history/History.module.css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/components/screens/history/History.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\\r\\n\\r\\n.History_container__GWJqW {\\r\\n    display: grid;\\r\\n    grid-template-columns: 130px 1fr;\\r\\n    grid-template-rows: 1fr;\\r\\n    font-family: \\\"Montserrat\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.History_title__2dF7L {\\r\\n    height: 40px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    font-family: \\\"Montserrat\\\", sans-serif;\\r\\n    font-size: 24px;\\r\\n    font-weight: 500;\\r\\n    color: white;\\r\\n    background-color: #1085f9;\\r\\n    border-radius: 10px;\\r\\n    margin-bottom: 20px;\\r\\n    padding-top: 1px;\\r\\n    \\r\\n}\\r\\n\\r\\n.History_table_wrapper__kHDhy {\\r\\n    padding: 0 10px;\\r\\n    box-sizing: border-box;\\r\\n    overflow-x: auto;\\r\\n}\\r\\n\\r\\n.History_table__g11hj {\\r\\n    width: 100%;\\r\\n    overflow-x: auto;\\r\\n    table-layout: fixed;\\r\\n    white-space: nowrap;\\r\\n    min-width: 700px;\\r\\n}\\r\\n\\r\\n.History_table__g11hj th {\\r\\n    padding: 10px 10px;\\r\\n    white-space: normal;\\r\\n    max-width: none;\\r\\n    overflow: auto; \\r\\n}\\r\\n\\r\\n@media (max-width: 950px) {\\r\\n    .History_container__GWJqW {\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n    .History_title__2dF7L {\\r\\n        margin: 0 10px;\\r\\n    }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/screens/history/History.module.css\"],\"names\":[],\"mappings\":\"AAAA,+MAA+M;;AAE/M;IACI,aAAa;IACb,gCAAgC;IAChC,uBAAuB;IACvB,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,qCAAqC;IACrC,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI;QACI,0BAA0B;IAC9B;IACA;QACI,cAAc;IAClB;AACJ\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\\r\\n\\r\\n.container {\\r\\n    display: grid;\\r\\n    grid-template-columns: 130px 1fr;\\r\\n    grid-template-rows: 1fr;\\r\\n    font-family: \\\"Montserrat\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.title {\\r\\n    height: 40px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    font-family: \\\"Montserrat\\\", sans-serif;\\r\\n    font-size: 24px;\\r\\n    font-weight: 500;\\r\\n    color: white;\\r\\n    background-color: #1085f9;\\r\\n    border-radius: 10px;\\r\\n    margin-bottom: 20px;\\r\\n    padding-top: 1px;\\r\\n    \\r\\n}\\r\\n\\r\\n.table_wrapper {\\r\\n    padding: 0 10px;\\r\\n    box-sizing: border-box;\\r\\n    overflow-x: auto;\\r\\n}\\r\\n\\r\\n.table {\\r\\n    width: 100%;\\r\\n    overflow-x: auto;\\r\\n    table-layout: fixed;\\r\\n    white-space: nowrap;\\r\\n    min-width: 700px;\\r\\n}\\r\\n\\r\\n.table th {\\r\\n    padding: 10px 10px;\\r\\n    white-space: normal;\\r\\n    max-width: none;\\r\\n    overflow: auto; \\r\\n}\\r\\n\\r\\n@media (max-width: 950px) {\\r\\n    .container {\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n    .title {\\r\\n        margin: 0 10px;\\r\\n    }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"History_container__GWJqW\",\n\t\"title\": \"History_title__2dF7L\",\n\t\"table_wrapper\": \"History_table_wrapper__kHDhy\",\n\t\"table\": \"History_table__g11hj\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9oaXN0b3J5L0hpc3RvcnkubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDRLQUF3RjtBQUNsSTtBQUNBO0FBQ0EsZ0lBQWdJLHlDQUF5QyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixtQ0FBbUMsc0JBQXNCLHlDQUF5QyxnQ0FBZ0MsZ0RBQWdELEtBQUssK0JBQStCLHFCQUFxQixzQkFBc0IsZ0NBQWdDLGdEQUFnRCx3QkFBd0IseUJBQXlCLHFCQUFxQixrQ0FBa0MsNEJBQTRCLDRCQUE0Qix5QkFBeUIsYUFBYSx1Q0FBdUMsd0JBQXdCLCtCQUErQix5QkFBeUIsS0FBSywrQkFBK0Isb0JBQW9CLHlCQUF5Qiw0QkFBNEIsNEJBQTRCLHlCQUF5QixLQUFLLGtDQUFrQywyQkFBMkIsNEJBQTRCLHdCQUF3Qix3QkFBd0IsS0FBSyxtQ0FBbUMsbUNBQW1DLHVDQUF1QyxTQUFTLCtCQUErQiwyQkFBMkIsU0FBUyxLQUFLLFdBQVcsMEhBQTBILE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSwrR0FBK0cseUNBQXlDLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLG9CQUFvQixzQkFBc0IseUNBQXlDLGdDQUFnQyxnREFBZ0QsS0FBSyxnQkFBZ0IscUJBQXFCLHNCQUFzQixnQ0FBZ0MsZ0RBQWdELHdCQUF3Qix5QkFBeUIscUJBQXFCLGtDQUFrQyw0QkFBNEIsNEJBQTRCLHlCQUF5QixhQUFhLHdCQUF3Qix3QkFBd0IsK0JBQStCLHlCQUF5QixLQUFLLGdCQUFnQixvQkFBb0IseUJBQXlCLDRCQUE0Qiw0QkFBNEIseUJBQXlCLEtBQUssbUJBQW1CLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHdCQUF3QixLQUFLLG1DQUFtQyxvQkFBb0IsdUNBQXVDLFNBQVMsZ0JBQWdCLDJCQUEyQixTQUFTLEtBQUssdUJBQXVCO0FBQ3ZzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaGlzdG9yeS9IaXN0b3J5Lm1vZHVsZS5jc3M/OGI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi5IaXN0b3J5X2NvbnRhaW5lcl9fR1dKcVcge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5IaXN0b3J5X3RpdGxlX18yZEY3TCB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA4NWY5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLkhpc3RvcnlfdGFibGVfd3JhcHBlcl9fa0hEaHkge1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5IaXN0b3J5X3RhYmxlX19nMTFoaiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uSGlzdG9yeV90YWJsZV9fZzExaGogdGgge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcXHJcXG4gICAgLkhpc3RvcnlfY29udGFpbmVyX19HV0pxVyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcbiAgICAuSGlzdG9yeV90aXRsZV9fMmRGN0wge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaGlzdG9yeS9IaXN0b3J5Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsK01BQStNOztBQUUvTTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA4NWY5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlX3dyYXBwZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgdGgge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSGlzdG9yeV9jb250YWluZXJfX0dXSnFXXCIsXG5cdFwidGl0bGVcIjogXCJIaXN0b3J5X3RpdGxlX18yZEY3TFwiLFxuXHRcInRhYmxlX3dyYXBwZXJcIjogXCJIaXN0b3J5X3RhYmxlX3dyYXBwZXJfX2tIRGh5XCIsXG5cdFwidGFibGVcIjogXCJIaXN0b3J5X3RhYmxlX19nMTFoalwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/components/screens/history/History.module.css\n"));

/***/ })

});