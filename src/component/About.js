import { Link } from 'react-router-dom'
function About() {
    return <>
        <h1>About Page</h1>
        <p>This is a About Page of our awesome app </p>
        <p>And here we are learning about Router</p>
        <Link to="/"> Go to Home page</Link>
        <br/>
        <Link to="/user/anil" state={{name: 'anil shidu'}}>Anil</Link>
        <br/>
        <Link to="/user/peter">Peter</Link>
        <br/>
    </>
}
export default About;