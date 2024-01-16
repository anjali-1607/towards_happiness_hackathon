import React from "react";
import Feedback from "../../assets/landing/feedback.svg";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  return (
    <>
      <h3 className="alignCentre  display-6 feedback_text fnt-heading">Feedback Form</h3>
      <div className="outline_form ">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
          <div className="form_picture">
            <img
              className=" col-md-5 col-sm-12"
              src={Feedback}
              style={{
                width: "35em",
                height: "100%",
              }}
            />
          </div>
          <div className="form_feedback">
            <div className="col-lg-6 col-md-5 col-sm-12">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label fnt-description">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label fnt-description">
                  Leave Your Feedback Here
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"></textarea>
              </div>
              <button className="btn submit_form btn_background">Submit</button>
            </div>
          </div>
        </div>

        <div className="row mt-4 "></div>
      </div>
    </>
  );
}
