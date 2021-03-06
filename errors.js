//    Copyright 2018 Luis Hsu
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
require("colors");
const Path = require('path');

module.exports = (fileName) => {
	return {
		fileName: fileName,
		line: 0,
		error: errorOut,
		addLine: addLine,
		warning: warnOut,
		hasError: false
	};
};
function addLine(){
	this.line += 1;
}
function errorOut(msg){
	console.error(`${Path.basename(this.fileName)}:${this.line} [Error] ${msg}`.red.bold);
	this.hasError = true;
}
function warnOut(msg){
	console.error(`${Path.basename(this.fileName)}:${this.line} [Warning] ${msg}`.yellow.bold);
}