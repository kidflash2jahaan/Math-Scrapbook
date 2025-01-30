export default function Home() {
    return (<div>
        <div className="container my-5 p-5 text-center shadow-lg rounded-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-1 fw-bold">Jahaan's Math Scrapbook</h1>
                    <p className="lead">This is my very own math website designed to
                        help people start to take interest in the foundation of math
                        while having fun at the same time!</p>
                </div>
            </div>
        </div>
        <div className="container my-5 p-5 text-start shadow-lg rounded-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-3 fw-bold">2048</h1>
                    <p className="lead">2048 is a video game where different numbered blocks appear,
                        and combining them results in them being added together.
                        It is a fun and interactive game that also teaches the basics of multiplication.
                        Click the button below to play it now!</p>
                    <a href="/2048" className="btn btn-primary mt-3">Play 2048</a>
                </div>
                <div className="col">
                    <img className="rounded-5" src="/assets/2048.png" alt="2048"/>
                </div>
            </div>
        </div>
        <div className="container my-5 p-5 text-end shadow-lg rounded-5">
            <div className="row">
                <div className="col">
                    <img className="rounded-5" src="/assets/pisong2.png" alt="pisong2"/>
                </div>
                <div className="col">
                    <h1 className="display-3 fw-bold">The Pi Song 2.0</h1>
                    <p className="lead">The Pi Song 2.0 is a new take on the classic Pi Song.
                        Made by AsapSCIENCE, this song helps you memorize not one, but two hundred digits of pi!
                        This also comes in the form of a very funny and entertaining video. Sounds interesting?
                        Click the button below to watch it now!</p>
                    <a href="/pisong2" className="btn btn-primary mt-3">Watch Pi Song 2.0</a>
                </div>
            </div>
        </div>
        <div className="container my-5 p-5 text-start shadow-lg rounded-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-3 fw-bold">Math Tutor</h1>
                    <p className="lead">Math Tutor is special AI Assistant designed by Jahaan Pardhanani
                        that specializes in all kinds of math problems!
                        It can help you with anything from simple addition to complex calculus problems.
                        It is also very good at explaining topics in a simple and easy-to-understand way.
                        Click the button below to use it now!</p>
                    <a href="/mathtutor" className="btn btn-primary mt-3">Use Math Tutor</a>
                </div>
                <div className="col">
                    <img className="rounded-5" src="/assets/mathtutor.jpg" alt="mathtutor" style={{maxWidth: "600px"}}/>
                </div>
            </div>
        </div>
    </div>)
}