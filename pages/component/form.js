import React from "react";

function form() {

    return (
        <>
            <div className=" my-5 py-3 mx-4 px-4 container shadow-lg rounded" style={{ backgroundColor: "white" }}>
                <form className="needs-validation"  >
                    <div className="row">

                        <div className="col-md-5">
                            <h6>Name</h6>
                            <input type="text" className="form-control" placeholder="Enter your Full Name" />
                        </div>
                        <div className="col-md-5">
                            <h6>Email</h6>
                            <input type="email" className="form-control" placeholder="Enter your Email Address" />
                            <div className="invalid-feedback">
                                Please provide a valid email
                            </div>
                        </div>
                    </div>
                    <h6 className="my-3">Phone Number</h6>
                    <div>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            required className="form-control" placeholder="Enter your phone number with country code" />
                        <div className="invalid-feedback">
                            Please provide a valid phone number
                        </div>
                    </div>
                    <h6 className="my-3">App/Website Link(optional)</h6>
                    <input type="text" className="form-control" placeholder="Enter you App/Website you wish to monetise" />
                    <h6 className="my-3">Monthly Revenue (USD)</h6>
                    <input type="number" className="form-control" placeholder="Enter your Average monthly revenue in USD" />

                    <button type="submit" className="btn btn-primary my-3 w-100">Get Started</button>
                    <br />
                    <small>By signing up, you agree to our <span className="textcolorch">Terms</span> and <span className="textcolorch">Privacy Policy</span></small>
                </form>
            </div>

        </>
    )

}

export default form