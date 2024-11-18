//console.log("Hello World from Hello.js!");
export default function Hello(app)
{app.get('/hello', (req, res) => {
    res.send("Hello World! Life is Good")
}) //req = request coming from client, res = server's response
app.get('/', (req, res) => {
    res.send("Welcome to Full Stack Development!")
}
)}
