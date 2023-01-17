# biker

A simple data scraping tool.

```rust
npm i biker
```

```rust
const biker = require('biker')
biker.data('https://example.com')
    .then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });

```
