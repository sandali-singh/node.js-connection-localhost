const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req);

  const { headers, url, method } = req;
  console.log(headers, url, method);
  res.write("hello");
  res.end();
});

const PORT = 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));

server.on("error", (error) => {
  console.error("Server error:", error);
});
