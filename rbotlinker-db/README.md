# rbotlinker-db

## Usage

``` js
const setupDatabase = require('rbotlinker-db')

setupDabase(config).then(db => {
  const { Agent, Metric } = db

}).catch(err => console.error(err))
```
