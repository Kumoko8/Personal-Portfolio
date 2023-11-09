import { Link } from 'react-router-dom'


export default function Projects() {
    return (
        <div>
            <div>
                <h1> Projects</h1>
            </div>
            <section>
                <a href="https://kumoko8.github.io/Front-End-App-DnD-Character-Project/" target="_blank">
                    <img className="image-deco" src='../../DnD.png'></img>
                </a>
            </section>
            <section>
            <a href="https://project-collections-cfb3d3b9c8f8.herokuapp.com/"target="_blank">
                    <img className="image-deco" src='../../placeholder.png'></img>
                </a>
            </section>
            <Link to="/Contact">
                <button >
                    Contact Me
                </button>
            </Link>
            <Link to="/Design">
                <button >
                    Design
                </button>
            </Link>
        </div>
    );





}