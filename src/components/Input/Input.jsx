import "./Input.css"

const Input = (props) =>{
    return(
        <div className="input-list">
            <input type="text"  placeholder="Enter Your Nickname"  className="input"/>
            <input type="number" placeholder="Enter your Age" className="input"/>
        </div>
    )
}

export default Input