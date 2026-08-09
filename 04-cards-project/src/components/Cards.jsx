import { Bookmark } from "lucide-react";

const cards = (props) => {
  return (
    <>
      <div className="cards">
        <div>
          <div className="top">
            <img
              src={props.logo}
              alt=""
            />
            <button>
              Save <Bookmark size={16} />
            </button>
          </div>
          <div className="center">
            <h3>
              {props.company} <span>{props.posted}</span>
            </h3>
            <h2>{props.role}</h2>
            <div>
              <h4>{props.type}</h4>
              <h4>{props.level}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default cards;
