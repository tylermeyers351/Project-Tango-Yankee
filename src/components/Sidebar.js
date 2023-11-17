import React from "react"

function Sidebar(props) {
    const handleSubmit = () => {
        props.updateTruthy()
      };

    return (
        <div>
            <div style={{display:"flex", justifyContent: 'center', alignItems:'center'}}>
                <button 
                    style={{color: 'white', backgroundColor: '#F5793B', fontWeight: 'bold', border: 'none'}} 
                    onClick={handleSubmit} className="btn" type="button">
                    New Trip!
                </button>
            </div>
        </div>
    );
}
  
export default Sidebar;
