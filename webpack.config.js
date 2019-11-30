var path = require('path');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    module:{
        rules:[
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        // placeholder[] 占位符
                        name:'[name]-[hash].[ext]',
                        outputPath: 'images/',
                        limit:204800 // url-loader
                    }
                }
            }
        ]
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}