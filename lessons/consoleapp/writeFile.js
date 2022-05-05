var fs = require("fs");
var content = "Tom and Jerry are good friends";
var writeStream = fs.createWriteStream("movies.txt");
writeStream.write(content, "utf-8");
writeStream.end();
//handle finish event
writeStream.on("finish", function () {
  console.log("content written to the File");
});
//Handle error event
writeStream.on("error", function (err) {
  console.log(`ERROR!!!${arr.stack}`);
});
console.log("End....");
