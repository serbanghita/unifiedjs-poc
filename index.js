var unified = require('unified');
var stream = require('unified-stream');
var markdown = require('remark-parse');
var remark2rehype = require('remark-rehype');
var html = require('rehype-stringify');

var visit = require('unist-util-visit-parents');

function relative_img_url(options) {
    var settings = options || {};

    return transform;

    function transform(root) {
        visit(root, visitor);
        return root;

        function visitor(node, parents) {
            // console.log(node.type, node.tagName);
            if (node.type === 'element' && node.tagName === 'img') {
                console.log('src', node);
                node.properties.src = 'wtf/' + node.properties.src;
            }
        }
    }
}

var processor = unified()
    .use(markdown)
    .use(remark2rehype);
    // .use(html)
    // .use(relative_img_url);

process.stdin.pipe(stream(processor)).pipe(process.stdout);

// node index.js < ./dist/docs/test_picture.md > ./dist/test_picture2.html
