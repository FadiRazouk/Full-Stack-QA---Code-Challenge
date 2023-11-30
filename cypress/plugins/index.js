// const { isFileExist } = require('cy-verify-downloads');
// const xlsx = require('node-xlsx').default;
// const fs = require('fs'); // for file
// const { rmdir } = require('fs');
// const readXlsxFile = require('read-excel-file/node');
// const writeXlsxFile = require('write-excel-file/node');

// module.exports = (on) => {
// 	// `on` is used to hook into various events Cypress emits
// 	// `config` is the resolved Cypress config
// 	on('task', { isFileExist });

// 	on('task', {
// 		deleteFolder(folderName) {
// 			if(fs.existsSync(folderName)){
// 				console.log('deleting folder %s', folderName);

// 				return new Promise((resolve, reject) => {
// 					rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
// 						if (err) {
// 							console.error(err);

// 							return reject(err);
// 						}
// 						resolve(null);
// 					});
// 				});
// 			}
// 			else{
// 				console.log('deleting folder not exist');

// 				return null;
// 			}
// 		},
// 	});

// 	on('task', {
// 		fixExel ({path, fileName, column, sheetNumber, valueCount, amount}) {
// 			return new Promise((resolve, reject) =>{
// 				try {
// 					readXlsxFile.readSheetNames(path).then(async sheetNames => {
// 						const sheetsPromises = [];
// 						for (const sn of sheetNames) {
// 							sheetsPromises.push(readXlsxFile(path, { sheet: sn }));
// 						}
// 						Promise.all(sheetsPromises).then(sheets => {
// 							const mappedSheets = [];
// 							for (const sheet of sheets) {
// 								const mappedRows = sheet.map((row) =>
// 									row.map((c) => {
// 										if (typeof c === 'number') {
// 											return { type: Number, value: c };
// 										} else if (typeof c === 'boolean') {
// 											return { type: Boolean, value: c };
// 										} else {
// 											return { type: String, value: c };
// 										}
// 									}),
// 								);
// 								mappedSheets.push(mappedRows);
// 							}
// 							if(column){
// 								for (let i = 1; i <= valueCount; i++) {
// 									mappedSheets[sheetNumber][i][column] = {
// 										type: Number,
// 										value: amount,
// 									};
// 								}
// 						  }
// 							writeXlsxFile(mappedSheets, {
// 								filePath: `cypress/fixtures/${fileName}.xlsx`,
// 								sheets: sheetNames,
// 							});
// 							resolve(null);
// 						});
// 					});
// 				}catch(e){
// 					reject(e);
// 				}
// 			});
// 		},
// 	});

// 	on('task', {
// 		parseXlsx({ filePath }) {
// 			return new Promise((resolve, reject) => {
// 				try {
// 					const jsonData = xlsx.parse(fs.readFileSync(filePath));
// 					resolve(jsonData);
// 				} catch (e) {
// 					reject(e);
// 				}
// 			});
// 		},
// 	});

// 	on('task', {
//        	 removeFile({ filePath }) {
// 			if(fs.existsSync(filePath)){
//  	           fs.unlinkSync(filePath);

// 				return null;
// 			}
// 			else{
// 				console.log('deleting file not exist');

// 				return null;
// 			}
// 	        },
// 	    });


// };
