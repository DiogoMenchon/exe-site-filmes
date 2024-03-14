
window.addEventListener('scroll', function () {
    let header = document.querySelector('#header')

    header.classList.toggle('roll', window.scrollY > 850)
});

$('#blogCarousel').carousel({
    interval: 5000
});

var sourceMapResolve = require("source-map-resolve")
var sourceMap = require("source-map")

var code = [
    "!function(){...}();",
    "/*# sourceMappingURL=foo.js.map */"
].join("\n")

sourceMapResolve.resolveSourceMap(code, "/js/foo.js", fs.readFile, function (error, result) {
    if (error) {
        return notifyFailure(error)
    }
    result
    // {
    //   map: {file: "foo.js", mappings: "...", sources: ["/coffee/foo.coffee"], names: []},
    //   url: "/js/foo.js.map",
    //   sourcesRelativeTo: "/js/foo.js.map",
    //   sourceMappingURL: "foo.js.map"
    // }

    sourceMapResolve.resolveSources(result.map, result.sourcesRelativeTo, fs.readFile, function (error, result) {
        if (error) {
            return notifyFailure(error)
        }
        result
        // {
        //   sourcesResolved: ["/coffee/foo.coffee"],
        //   sourcesContent: ["<contents of /coffee/foo.coffee>"]
        // }
    })
})

sourceMapResolve.resolve(code, "/js/foo.js", fs.readFile, function (error, result) {
    if (error) {
        return notifyFailure(error)
    }
    result
    // {
    //   map: {file: "foo.js", mappings: "...", sources: ["/coffee/foo.coffee"], names: []},
    //   url: "/js/foo.js.map",
    //   sourcesRelativeTo: "/js/foo.js.map",
    //   sourceMappingURL: "foo.js.map",
    //   sourcesResolved: ["/coffee/foo.coffee"],
    //   sourcesContent: ["<contents of /coffee/foo.coffee>"]
    // }
    result.map.sourcesContent = result.sourcesContent
    var map = new sourceMap.sourceMapConsumer(result.map)
    map.sourceContentFor("/coffee/foo.coffee")
    // "<contents of /coffee/foo.coffee>"
});

socket.setMaxListeners(15);