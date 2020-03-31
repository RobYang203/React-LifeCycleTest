const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:[
        "./main.js"
    ],
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    module:{//針對不同的語言載入不同的模組 ex:babel、TypeScript，讓其可編譯後輸出成為直譯器所讀的檔案 .js
		rules:[
			{
				test:/\.(js|jsx)$/,//判斷是否為".js or jsx"
				loader:"babel-loader",//編譯器，把符合條件的檔案，編譯成指定樣式
				exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                exclude:/node_modules/
            }
		]
	}

};