//Variables
const home = document.getElementById('HomeResidential');
const office = document.getElementById('OfficeCleaning');
const laundry = document.getElementById('LaundryService');
const divServicios = document.querySelector('.service-detail-text');
const li_a = document.querySelector('.a');
const li_b = document.querySelector('.b');
const li_c = document.querySelector('.c');

cargarEventListeners();

//Listeners
function cargarEventListeners(){
     //Dispara cuando se presiona agregar carrito
    home.addEventListener('click', añadirHome);


     //oficina
     office.addEventListener('click', añadiroffice);


     //Lavanderia
     laundry.addEventListener('click', añadirlaundry);

     
}


//Funciones

function añadiroffice(e){
	document.querySelector('.service-detail-text').innerHTML = `
	    <h1 class="fs-46 mt-20 mb-10">Office Cleaning Service</h1>
                        <p class="fs-20 blue lh-15">We provide cleaning and maintenance services for your office.</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <p>If you are interested in disinfecting your offices, jobs, buildings, warehouses or commercial premises, this service is for you.</p>
                            </div>
                            <div class="col-lg-6">
                                <p>The brigades include the disinfection and cleaning service carried out by our Cleaning Professionals, high-quality products for surface disinfection and specialized machinery to remove bacteria and cover all areas in depth.</p>
                            </div>
                        </div>
                        <div class="hr-1 opacity-1 bg-black mt-5 mb-25"></div>
                        <h4 class="fs-19 f-700 mb-10 mb-md-15 lh-13">Our office cleaning service includes:</h4>
                        <ul class="check-list type-2-c half-list">
                            <li><i class="far fa-check-square"></i>Cobwebs removed </li>
                            <li><i class="far fa-check-square"></i>Furniture cleaned </li>
                            <li><i class="far fa-check-square"></i>Range hood & stove top cleaned</li>
                            <li><i class="far fa-check-square"></i>Floors vacuumed</li>
                            <li><i class="far fa-check-square"></i>Range hood & stove top cleaned</li>
                            <li><i class="far fa-check-square"></i>Tile area behind tub cleaned </li>
                            <li><i class="far fa-check-square"></i>Floors swept & mopped</li>
                            <li><i class="far fa-check-square"></i>Sink cleaned / Chrome polished </li>
                            <li><i class="far fa-check-square"></i>Window sills & frames dusted </li>
                            <li><i class="far fa-check-square"></i>Cabinet doors wiped down </li>
                            <li><i class="far fa-check-square"></i>Window sills & frames dusted</li>
                            <li><i class="far fa-check-square"></i>Wastebaskets emptied </li>
                            <li><i class="far fa-check-square"></i>Picture dusted </li>
                            <li><i class="far fa-check-square"></i>Window sills & frames dusted </li>
                        </ul>
                        <div class="hr-1 opacity-1 bg-black mt-15 mb-30"></div>
                        <!--<div class="row align-items-center">
                            <div class="col-xl-6 col-lg-12">
                                <img src="img/service/img-ser.jpg" class="w-100 mb-lg-25" alt="">
                            </div>
                            <div class="col-xl-6 col-lg-12 ">
                                <h4 class="fs-19 f-700 mb-10">A clean home is a happy home.</h4>
                                <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus finibus nibh, non molestie quam vehicula sed. Maecenas placerat sollicitudin arcu, vitae euismod velit semper ultrices. </p>
                                <p class="mb-0">Curabitur sagittis tempus enim, sed ornare purus mattis in. Nam in aliquet risus, id fermentum ex. Sed ultrices justo quis libero venenatis, id fringilla arcu vulputate. Integer ipsum lorem.</p>
                            </div>
                        </div>-->
                        <div class="hr-1 opacity-1 bg-black mt-30 mb-25"></div>
                        <h4 class="fs-19 f-700 mb-15">Frequently asked questions</h4>
                        <div class="faq-boxes">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                                        <h5 class="mb-0">
                  What cleaning supplies do I have to provide?<i class="fas fa-plus"></i>
                      </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header  collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                                        <h5 class="mb-0">
                 How can i book via website?<i class="fas fa-plus"></i>
                      </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header collapsed" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                                        <h5 class="mb-0">
                  Aorem ipsum dolor sit amet consecte?<i class="fas fa-plus"></i>
                      </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

	`;
	


}

function añadirlaundry(e){
	e.preventDefault();

	document.querySelector('.service-detail-text').innerHTML = `
	   <h1 class="fs-46 mt-20 mb-10">Laundry Service</h1>
                        <p class="fs-20 blue lh-15">We do the laundry for you</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <p>We dry clean and water, taking into account the different textures and colors, in order to extend the life of your clothes. We wash all kinds of clothes.</p>
                            </div>
                            <div class="col-lg-6">
                                <p>Our service is personalized, so each piece of clothing is treated in this way, thus detecting the necessary processes for each one, which ensures a good result.</p>
                            </div>
                        </div>
                        <div class="hr-1 opacity-1 bg-black mt-5 mb-25"></div>
                        <h4 class="fs-19 f-700 mb-10 mb-md-15 lh-13">Our Laundry service includes:</h4>
                        <ul class="check-list type-2-c half-list">
                            <li><i class="far fa-check-square"></i>Cobwebs removed </li>
                            <li><i class="far fa-check-square"></i>Furniture cleaned </li>
                            <li><i class="far fa-check-square"></i>Range hood & stove top cleaned</li>
                            <li><i class="far fa-check-square"></i>Floors vacuumed</li>
                            <li><i class="far fa-check-square"></i>Range hood & stove top cleaned</li>
                            <li><i class="far fa-check-square"></i>Tile area behind tub cleaned </li>
                            <li><i class="far fa-check-square"></i>Floors swept & mopped</li>
                            <li><i class="far fa-check-square"></i>Sink cleaned / Chrome polished </li>
                            <li><i class="far fa-check-square"></i>Window sills & frames dusted </li>
                            <li><i class="far fa-check-square"></i>Cabinet doors wiped down </li>
                            <li><i class="far fa-check-square"></i>Window sills & frames dusted</li>
                            <li><i class="far fa-check-square"></i>Wastebaskets emptied </li>
                            <li><i class="far fa-check-square"></i>Picture dusted </li>
                            <li><i class="far fa-check-square"></i>Window sills & frames dusted </li>
                        </ul>
                        <div class="hr-1 opacity-1 bg-black mt-15 mb-30"></div>
                        <!--<div class="row align-items-center">
                            <div class="col-xl-6 col-lg-12">
                                <img src="img/service/img-ser.jpg" class="w-100 mb-lg-25" alt="">
                            </div>
                            <div class="col-xl-6 col-lg-12 ">
                                <h4 class="fs-19 f-700 mb-10">A clean home is a happy home.</h4>
                                <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus finibus nibh, non molestie quam vehicula sed. Maecenas placerat sollicitudin arcu, vitae euismod velit semper ultrices. </p>
                                <p class="mb-0">Curabitur sagittis tempus enim, sed ornare purus mattis in. Nam in aliquet risus, id fermentum ex. Sed ultrices justo quis libero venenatis, id fringilla arcu vulputate. Integer ipsum lorem.</p>
                            </div>
                        </div>-->
                        <div class="hr-1 opacity-1 bg-black mt-30 mb-25"></div>
                        <h4 class="fs-19 f-700 mb-15">Frequently asked questions</h4>
                        <div class="faq-boxes">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                                        <h5 class="mb-0">
                  What cleaning supplies do I have to provide?<i class="fas fa-plus"></i>
                      </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header  collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                                        <h5 class="mb-0">
                 How can i book via website?<i class="fas fa-plus"></i>
                      </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header collapsed" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                                        <h5 class="mb-0">
                  Aorem ipsum dolor sit amet consecte?<i class="fas fa-plus"></i>
                      </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


	`;


}

function añadirHome(e){

	e.preventDefault();

	document.querySelector('.service-detail-text').innerHTML = `
	   <h1 class="fs-46 mt-20 mb-10">Home/Residential Cleaning service</h1>
                        <p class="fs-20 blue lh-15">Relax while we take care of cleaning your home.</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <p>We offer you the opportunity to hire cleaning assistants with knowledge in household care issues, so that you can enjoy your free time doing what you like best.
                                </p>
                            </div>
                            <div class="col-lg-6">
                                <p>WE TAKE CARE THAT EVERYTHING IS CLEAN</p>
                            </div>
                        </div>
                        <div class="hr-1 opacity-1 bg-black mt-5 mb-25"></div>
                        <h4 class="fs-19 f-700 mb-10 mb-md-15 lh-13">Our house cleaning service includes:</h4>
                        <ul class="check-list type-2-c half-list">
                            <li><i class="far fa-check-square"></i>Cobwebs removed </li>
                            <li><i class="far fa-check-square"></i>Furniture cleaned </li>
                            <li><i class="far fa-check-square"></i>Range hood & stove top cleaned</li>
                            <li><i class="far fa-check-square"></i>Floors vacuumed</li>
                            <li><i class="far fa-check-square"></i>Range hood & stove top cleaned</li>
                            <li><i class="far fa-check-square"></i>Tile area behind tub cleaned </li>
                            <li><i class="far fa-check-square"></i>Floors swept & mopped</li>
                            <li><i class="far fa-check-square"></i>Sink cleaned / Chrome polished </li>
                            <li><i class="far fa-check-square"></i>Window sills & frames dusted </li>
                            <li><i class="far fa-check-square"></i>Cabinet doors wiped down </li>
                            <li><i class="far fa-check-square"></i>Window sills & frames dusted</li>
                            <li><i class="far fa-check-square"></i>Wastebaskets emptied </li>
                            <li><i class="far fa-check-square"></i>Picture dusted </li>
                            <li><i class="far fa-check-square"></i>Window sills & frames dusted </li>
                        </ul>
                        <div class="hr-1 opacity-1 bg-black mt-15 mb-30"></div>
                        <!--<div class="row align-items-center">
                            <div class="col-xl-6 col-lg-12">
                                <img src="img/service/img-ser.jpg" class="w-100 mb-lg-25" alt="">
                            </div>
                            <div class="col-xl-6 col-lg-12 ">
                                <h4 class="fs-19 f-700 mb-10">A clean home is a happy home.</h4>
                                <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus finibus nibh, non molestie quam vehicula sed. Maecenas placerat sollicitudin arcu, vitae euismod velit semper ultrices. </p>
                                <p class="mb-0">Curabitur sagittis tempus enim, sed ornare purus mattis in. Nam in aliquet risus, id fermentum ex. Sed ultrices justo quis libero venenatis, id fringilla arcu vulputate. Integer ipsum lorem.</p>
                            </div>
                        </div>-->
                        <div class="hr-1 opacity-1 bg-black mt-30 mb-25"></div>
                        <h4 class="fs-19 f-700 mb-15">Frequently asked questions</h4>
                        <div class="faq-boxes">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                                        <h5 class="mb-0">
                  What cleaning supplies do I have to provide?<i class="fas fa-plus"></i>
                      </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header  collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                                        <h5 class="mb-0">
                 How can i book via website?<i class="fas fa-plus"></i>
                      </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header collapsed" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                                        <h5 class="mb-0">
                  Aorem ipsum dolor sit amet consecte?<i class="fas fa-plus"></i>
                      </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

	`;

}