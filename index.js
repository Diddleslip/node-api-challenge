const server = require("./server");

const port = 5000;

server.listen(port, () => {
    console.log(`\n Server running on Port: ${port}\n`)
})
