module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    entry: './app/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        // define the rules for processing specific files like css or ts
        rules: [
            // array of 'rule' instances, to handle a specific type of file
            {
                test: /\.ts$/,
                loader: ['ts-loader'] // before handing the code to webpack, ts-loader transpiles the code into JS 
            }
        ]
    }
};

