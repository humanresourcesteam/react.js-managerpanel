import "./averagework.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AverageWork = () => {
  const percentage = 66;
  return (
    <div className="averagework">
      <span className="average_span">Average Working Time</span>
      <div className="circle" style={{ width: 250, height: 250 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% mans`}
          strokeWidth={4}
        />
      </div>
    </div>
  );
};

export default AverageWork;
