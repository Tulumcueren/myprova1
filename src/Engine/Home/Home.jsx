import './Home.scss';
function Home(props) {
    const Item= (props)=>{
        return (
        <div className="Item">
            <div className="ItemTitle">{props.title}</div>
            <div className="ItemDescription">{props.description}</div>
        </div>
        )
    };
    return ( 
        <div className="Home">
            <Item title='HELLOTitle' description='ImTryingDescription'/>
            <Item title='HELLOTitle' description='ImTryingDescription'/>
            <Item title='HELLOTitle' description='ImTryingDescription'/>
        </div>
     );
}
export default Home;