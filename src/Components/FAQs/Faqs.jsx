import React from "react";
import "./Faqs.css";
export default function Faqs() {
  return (
    <>
      <h3 className="alignCentre mt-5 display-6 ">
        Frequently Asked Questions
      </h3>
      <details className="mt-2  border-bottom-0">
        <summary>How do I create accordion?</summary>
        <div>
          The tags <em>details</em> and <em>summary</em> have you covered.
        </div>
      </details>
      <details className="mt-2  border-bottom-0">
        <summary>How do I create accordion?</summary>
        <div>
          The tags <em>details</em> and <em>summary</em> have you covered.
        </div>
      </details>
      <details className="mt-2  border-bottom-0">
        <summary>How do I create accordion?</summary>
        <div>
          The tags <em>details</em> and <em>summary</em> have you covered.
        </div>
      </details>
      <details>
        <summary>How do I create accordion?</summary>
        <div>
          The tags <em>details</em> and <em>summary</em> have you covered.
        </div>
      </details>
    </>
  );
}
