import React from "react";
export default function MorphAccordion(props) {
  return (
    <div
      className="accordion accordion-flush menu-text mx-3"
      id="accordionFlushExample"
    >
      {Object.keys(props.output).map((key) => {
        return (
          <div className="accordion-item bg-dark menu-text">
            <h2
              className="accordion-header menu-text"
              id={"flush-heading" + key}
              key={key + "Header"}
            >
              <button
                className="accordion-button collapsed fw-bold bg-dark menu-text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#" + key}
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                key={key + "Button"}
              >
                {key}
              </button>
            </h2>
            <div
              id={key+"Id"}
              className="accordion-collapse collapse menu-text"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              key={key+"Div"}
            >
              <table className="table menu-text" key={key + "Table"}>
                <tbody key={key+"Tbody"}>
                  {Object.entries(props.output[key]).map((entry) => {
                    return (
                      <tr key={entry[0]}>
                        <td key={entry + "Cell"} className="col-6">
                          {entry[0]}
                        </td>
                        <td key={entry[1]}>{entry[1]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
