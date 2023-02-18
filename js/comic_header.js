//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="./img/header.jpg" alt="" /></a> 

        <div id="nav">
            <button>
                <a href="index.html">Home</a>
            </button>
            <button>
                <a href="archive.html">Archive</a>
            </button>
            <button>
                <a href="about.html">About</a>
            </button>
            <button>
                <a href="characters.html">Characters</a>
            </button>
        </div>
    </header>
`;