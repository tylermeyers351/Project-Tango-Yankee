function Header(props) {
  return (
    <>
      <p>{props.phrase}</p>
      <button 
        className={props.truthyCheck ? "btn btn-primary" : "btn btn-secondary"} 
        onClick={props.updateTruthy}
      >
        HELLO {props.truthyCheck === true ? "TRUE" : "FALSE"}
      </button>
    </>
  );
}

export default Header;
