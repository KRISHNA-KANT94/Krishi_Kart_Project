import { useParams } from "react-router-dom";
import axios from "axios";

function BuyerPay() {

    const { payment } = useParams();

    
        function handlePayment() {
            const email = document.querySelector('input[type="email"]').value;
            const cardDetails = document.querySelector('.card-atm input[type="text"]').value;
            const expiry = document.querySelector('.card-atm input[type="text"]:first-child').value;
            const cvv = document.querySelector('.card-atm input[type="password"]').value;
            const cardholderName = document.querySelector('.cardname input[type="text"]').value;
            const pin = document.querySelector('.address .zip').value;
            const state = document.querySelector('.address .state').value;


            if (
                email.trim() === "" ||
                cardDetails.trim() === "" ||
                expiry.trim() === "" ||
                cvv.trim() === "" ||
                cardholderName.trim() === "" ||
                pin.trim() === "" ||
                state.trim() === ""
            ) {
                alert("Please fill out all the fields.");
            } else {
                alert("Payment Successful");
                window.location = `http://localhost:9099/buyer/pdf/generate`;
            }
        }
    return (
        <div className='container  d-flex justify-content-center' style={{ height: "100vh", marginTop: "50px" }}>
            <div className="row col-5 ">
                <div className="box-2">
                    <div className="box-inner-2">
                        <div>
                            <p className="fw-bold"><h3>Payment Details</h3></p>
                            <p className="dis mb-3">Complete your purchase by providing your payment details</p>
                        </div>
                        <form >
                            <div className="mb-3">
                                <p className="dis fw-bold mb-2">Email address</p> <input className="form-control" type="email"  required/>
                            </div>
                            <div>
                                <p className="dis fw-bold mb-2">Card details</p>
                                <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                                    <div className="fab fa-cc-visa ps-3"></div> <input type="number" className="form-control" placeholder="Card Details" required/>
                                    <div className="d-flex w-50"> <input type="number" className="form-control px-0" placeholder="MM/YY" required/> <input type="password" maxlength="3" className="form-control px-0" placeholder="CVV" required /> </div>
                                </div>
                                <div className="my-3 cardname">
                                    <p className="dis fw-bold mb-2">Cardholder name</p> <input className="form-control" type="text" required/>
                                </div>
                                <div className="address">

                                    <div className="d-flex"> <input className="form-control zip" type="number" placeholder="Pin" required/> <input className="form-control state" type="text" placeholder="State" required/> </div>

                                    <div className="d-flex flex-column dis">


                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <p className="fw-bold">Total</p>
                                            <p className="fw-bold"><span className="fas fa-dollar-sign"></span>{payment}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </form>

                        <button type="submit" class="btn btn-danger " onClick={handlePayment}>Pay</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default BuyerPay;