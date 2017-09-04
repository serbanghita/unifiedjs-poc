var marked = require("marked");
var fs = require("fs");
var Url = require('url');

var oldFn = marked.InlineLexer.prototype.outputLink;

var root = "pages/granite/ui/docs";

marked.InlineLexer.prototype.outputLink = function(cap, link) {
    console.log("here!!");
    var parsedLink = Url.parse(link.href);
    console.log(parsedLink);
    /*
        Url {
          protocol: null,
          slashes: null,
          auth: null,
          host: null,
          port: null,
          hostname: null,
          hash: null,
          search: null,
          query: null,
          pathname: 'test.jpg',
          path: 'test.jpg',
          href: 'test.jpg'
        }
     */
    if (parsedLink.protocol === null) {

    }
    return oldFn.call(this, cap, link);
};

fs.readFile("pages/test.md", "utf8", function (err, fileContents) {
    if (err) throw err;
    // console.log("original", fileContents);
    //
    marked(fileContents, function (err, fileContentsConverted) {
        if (err) throw err;
        console.log("\n");
        console.log("converted", fileContentsConverted);
    });

    // var lexer = new marked.Lexer({});
    // var tokens = lexer.lex(fileContents);
    // // console.log(tokens);
    // // console.log("\n\n\n");
    // console.log(lexer.rules);
});