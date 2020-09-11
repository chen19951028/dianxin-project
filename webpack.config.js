const path=require('path')

const webpack=require('webpack')

module.exports={
    watch: true,//在此添加此状态则默认开启监听
   //ignored:/node_modules/,//忽略要监听的文件
    //判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次 poll: 1000
   // aggregateTimeout:300,	//监听到变化发生后会等300ms再去执行，默认300ms,不能和热更新同时使用
    /* mode:'production', */
    mode:'development',//热更新
    entry:{
        app:'./src/index.js' 
    },//如果有多个入口，使用对象
    output:{
        //打包成一个文件
     /*   filename:'bundle.js',//打包后的文件名
        path:path.resolve(__dirname,'dist')//存放的路径和文件夹的名称*/

        //分开打包
        filename:'bundle.js',//打包后的文件名
        path:path.resolve(__dirname,'src')
    }
   ,
    module:{
        rules:[
            {
                test:/\.js$/,use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:'file-loader'
            },
            {
                test:/\.(png|jpg|gif|jepg)$/,
                use:file-loader
            }
        ]
    } ,
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host:'127.0.0.1',
        hot:true,
        contentBase: './src',
        compress: true,
        port: 8080,
        //open:true
      }
};