const keys = require('../../config/keys');
module.exports = survey =>{
    
    return `
        <html>
            <body>
              <div style="text-align:center">
              <h3>We would love your input</h3> 
                <p>Please answer the following quetion:</p>
                <p>${survey.body}</p>
                <br/>
                <a href="localhost:3000">Test Click</a>
                <p><a href="${keys.redirectDomain}/api/surveys/thanks">YES</a></p>
                <p><a href="${keys.redirectDomain}/api/surveys/thanks">NO</a></p>
              </div>
            </body>
        </html>
    `
    
}