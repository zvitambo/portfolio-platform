import './Card.css';

const Card = ({children, className, onClick}) => {

  return (
    <article className={`card ${className}`} onClick={onClick}>
      {/* <div style={{ display: "block", overflow: "scroll", height: "550px" }}> */}
        <div style={{ display: "block",  height: "550px" }}>
        {children}
      </div>
    </article>
  );
}

export default Card