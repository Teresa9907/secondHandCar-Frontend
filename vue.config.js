module.exports={
    publicPath: '',
    indexPath: "index.html",
    filenameHashing: true,
    


        devServer: {
            proxy: {
                '/api': {
                    pathRewrite: {                   
                        '^/api': ''                   
                    },
                    target: 'http://119.91.26.172:5001',
                    ws:true,
                    changeOrigin:true,
                    secure: false,
                headers: {
                    Referer: 'http://119.91.26.172:5001'
                }
                    
                }
            },

    


    }}