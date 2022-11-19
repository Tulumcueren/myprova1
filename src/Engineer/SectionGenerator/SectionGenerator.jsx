import './SectionGenerator.css';
function SectionGenerator(props) {
    return ( 
        <div className="SectionGenerator" onClick={props.onClick}>
            <div className="TitleinContainer">
                {props.title}
            </div>
        </div>
     );
}

export default SectionGenerator;