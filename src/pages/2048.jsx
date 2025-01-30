export default function Game2048() {
    return (<div>
        <div className="container my-5 p-5 text-center shadow-lg rounded-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-1 fw-bold">2048</h1>
                    <p className="lead">2048 is a video game where different numbered blocks appear,
                        and combining them results in them being added together.
                        It is a fun and interactive game that also teaches the basics of multiplication.</p>
                    <a href="/" className="btn btn-primary mt-3">Go Back</a>
                </div>
            </div>
        </div>
        <div className="container my-5 p-5 text-center shadow-lg rounded-5">
            <div className="row">
                <div className="col">
                    <embed src="https://www.2048.org/" width="100%" height="700px"/>
                </div>
            </div>
        </div>
    </div>)
}