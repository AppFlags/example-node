## AppFlags Node.js Example

Simple app demonstrating how to use AppFlags in a Node.js application. 

For more information, see the docs: https://docs.appflags.io/sdks

### To run the example

1. Clone this repository
    ```shell script
    git clone https://github.com/AppFlags/example-javascript-node.git
    ```
2. Modify index.js with your SDK key 

    * Replace `YOUR_SDK_KEY` with your client key
    
3. Create a feature flag in your account with the key `test`
    
4. Install packages and run the application
    ```shell script
    npm install
    npm start
    ```

5. The console will output the current state of the `test` feature. 

6. Go to the AppFlags dashboard and enable/disable the `test` feature. The console will output the changes in realtime.

  
   