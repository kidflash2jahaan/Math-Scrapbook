export default function PiSong2() {
    return (<div>
        <div className="container my-5 p-5 text-center shadow-lg rounded-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-1 fw-bold">The Pi Song 2.0</h1>
                    <p className="lead">The Pi Song 2.0 is a new take on the classic Pi Song.
                        Made by AsapSCIENCE, this song helps you memorize not one, but two hundred digits of pi!
                        This also comes in the form of a very funny and entertaining video. Sounds interesting?</p>
                    <a href="/" className="btn btn-primary mt-3">Go Back</a>
                </div>
            </div>
        </div>
        <div className="container my-5 p-5 text-center shadow-lg rounded-5">
            <div className="row">
                <div className="col">
                    <embed width="100%" height="700px" src="https://www.youtube.com/embed/d0lXrqjM_m8?si=Sd43m1aXufaKZG5q"/>
                </div>
            </div>
        </div>
    </div>)
}
