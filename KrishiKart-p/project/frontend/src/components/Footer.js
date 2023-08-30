import react from "react";

function Footer() {

    return (
        <div >

            <div class="container-fluid ">


                <footer
                    class="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#1c2331" }}
                >

                    <section
                        class="d-flex justify-content-between p-4"
                        style={{backgroundColor:"rgb(72, 129, 153)"}}
                    >

                        <div class="me-5">
                        <h6 class="text-uppercase fw-bold">Get Connected With Us On Social Media</h6>
                        </div>

                        <div>
                            <a href="https://www.instagram.com/accounts/login/?hl=en" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            
                            <a href="https://www.facebook.com/" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://image.pngaaa.com/124/3883124-middle.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            
                        </div>

                    </section>

                    <section class="">
                        <div class="container text-center text-md-start mt-5">

                            <div class="row mt-3">

                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 class="fw-bold">KrishiKart</h6>
                                    <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                    <p>
                                    A farmer is a person engaged in agriculture, raising living organisms for food or raw materials.
                                     The term usually applies to people who do some combination of raising field crops, orchards, vineyards, poultry, or other livestock

                                    </p>
                                </div>

                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">   Home</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="/admin-login" class="text-white">Admin</a>
                                    </p>
                                    <p>
                                        <a href="/farmer-login" class="text-white">Farmer</a>
                                    </p>
                                    <p>
                                        <a href="/buyer-login" class="text-white">Buyer</a>
                                    </p>
                                    {/* <p>
                                        <a href="#!" class="text-white">Bootstrap Angular</a>
                                    </p> */}
                                </div>



                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="mailto:krishikart777@gmail.com" class="text-white">Contact us</a>
                                    </p>
                                    
                                    <p>
                                        <a href="/" class="text-white">About us</a>
                                    </p>
                                    <p>
                                        <a href="/" class="text-white">Help</a>
                                    </p>
                                </div>



                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 class="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    {/* <p><i class="fas fa-home mr-3"></i> C-DAC New Delhi</p> */}
                                    <p><i class="fas fa-envelope mr-3"></i>krishikart777@gmail.com</p>
                                    <p><i class="fas fa-phone mr-3"></i></p>
                                    <p><i class="fas fa-phone mr-3"></i>Suraj Jagdale</p>
                                    <p><i class="fas fa-phone mr-3"></i>Krishna Kant Srivastava</p>
                                   
                                </div>

                            </div>

                        </div>
                    </section>

                    <div
                        class="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        <hr class="mb-4"></hr>
                        Copyright ©2023 All rights reserved by :
                        <a class="text-white" href="https://iacsd.com/" > IACSD, Pune</a>
                    </div>

                </footer>


            </div>

        </div>
    );
}

export default Footer;