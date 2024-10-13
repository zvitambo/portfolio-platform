import "./Card.css";

const PortfolioCard = ({ children, className, onClick }) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      <div style={{ display: "block", height: "550px" }}>{children}</div>
    </article>
  );
};

export default PortfolioCard;
