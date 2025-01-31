import {useState} from "react";
import OpenAI from "openai";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css'

export default function MathTutor() {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])
    const [thinking, setThinking] = useState(false)

    const openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

    return (<div>
        <div className="container my-5 p-5 text-center shadow-lg rounded-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-1 fw-bold">Math Tutor</h1>
                    <p className="lead">Math Tutor is special AI Assistant designed by Jahaan Pardhanani
                        that specializes in all kinds of math problems!
                        It can help you with anything from simple addition to complex calculus problems.
                        It is also very good at explaining topics in a simple and easy-to-understand way!</p>
                    <p className="lead text-danger">DISCLAIMER: This is an AI that needs time to think, so responses
                        will be delayed. Please be patient for responses.</p>
                    <a href="/" className="btn btn-primary mt-3">Go Back</a>
                </div>
            </div>
        </div>
        <div className="container my-5 p-5 shadow-lg rounded-5">
            <div className="row">
                <form className="">
                    {messages.map((message, index) => (
                        <div key={index} className={`form-control ${message.role === "user" ? "bg-primary-subtle" : "bg-success-subtle"} my-2`}>
                            {console.log(message.content)}
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{message.content}</ReactMarkdown>
                        </div>
                    ))}
                </form>
            </div>
            <div className="row">
                <form className="input-group" onSubmit={async (event) => {
                    event.preventDefault()
                    if (input === "" || thinking) {
                        return
                    }

                    const newMessages = messages
                    newMessages.push({role: "user", content: input})
                    setMessages(newMessages)
                    setInput("")
                    setThinking(true)

                    const chat = [{
                        role: "developer",
                        content: "You are Math Tutor." +
                            "Math Tutor is special AI Assistant designed by Jahaan Pardhanani that specializes in all kinds of math problems!" +
                            "It can help you with anything from simple addition to complex calculus problems." +
                            "It is also very good at explaining topics in a simple and easy-to-understand way." +
                            "Use only markdown, and wrap all math in latex and dollar signs, every single number or algebraic letter!!!"
                    },]
                    messages.forEach((message) => {
                        chat.push({role: message.role, content: message.content})
                    })

                    const completion = await openai.chat.completions.create({
                        model: "gpt-4o",
                        messages: chat
                    });

                    newMessages.push(completion.choices[0].message)
                    setMessages(newMessages)
                    setInput("")
                    setThinking(false)
                }}>
                    <input type="text" value={input} className={`form-control ${thinking ? "bg-secondary-subtle" : "bg-primary-subtle"}`}
                           placeholder={thinking ? "Thinking..." : "Type something here..."}
                           onChange={(event) => {
                               setInput(event.target.value)
                           }}/>
                    <button className={`btn ${thinking ? "btn-secondary" : "btn-primary"}`}>Submit</button>
                </form>
            </div>
        </div>
    </div>)
}