import React from "react";
import { useSearchParams } from "react-router-dom";
import { heresHow1Data } from "../../PAGE1/Card1/heresHow1Data";
import "./specialOffer.css";
import "./HeresHow1.css";

export default function HeresHow3() {
  const [searchParams, _] = useSearchParams();
  const [hereData, setHereData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const hereHow = heresHow1Data.find((el) => el.id === pid);
    setHereData(hereHow);
  });

  const list = [];

  for (let i in hereData.ans1) {
    list.push(
      <div key={i}>
        <div>{hereData.ans1[i]}</div>
      </div>
    );
  }

  const terms = [];

  for (let i in hereData.termsAndConditions) {
    terms.push(
      <div key={i}>
        <div>{hereData.termsAndConditions[i]}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <a
          href="#"
          type="button"
          className="HeresHow"
          data-toggle="modal"
          data-target="#myModal"
        >
          Here's How ▼
        </a>

        <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Here's how</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>

              <div className="modal-body scroll-modal-wrapper">
                <h5 style={{ textAlign: "center" }}>Promotion Terms</h5>
                <p className="question">{hereData.ques1}</p>
                <p>{list}</p>
                <p className="question">{hereData.ques2}</p>
                <p>{hereData.ans2}</p>
                <p className="question">{hereData.ques3}</p>
                <p>{hereData.ans3}</p>
                <p className="question">{hereData.ques4}</p>
                <p>{hereData.ans4}</p>
                <h5 style={{ textAlign: "center" }}>{hereData.head2}</h5>
                <p
                  style={{
                    marginTop: "24px",
                    fontWeight: "600",
                  }}
                >
                  {terms}
                </p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
