import React from 'react';
//import cat from '../assets/pexels-nestorsh-10884423.jpg';
//import hamster from '../assets/pexels-archibald-marajas-8727896.jpg';
import '../petlist/petlist.css';

function Petlist () {


    return (
        <div>
            <div class="row row-cols-1 row-cols-md-2 g-4" id="flex">
                <div class="col">
                    <div class="card">
                    {/* <img src={cat} class="card-img-top" alt="..."/> */}
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text"></p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    {/* <img src={cat} class="card-img-top" alt="..."/> */}
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text"></p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    {/* <img src={cat} class="card-img-top" alt="..."/> */}
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text"></p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    {/* <img src={cat} class="card-img-top" alt="..."/> */}
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text"></p>
                    </div>
                    </div>
                </div>
            </div>
            {/* <h1>PET COLLECTION</h1> */}
            {/* <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <img src={cat} class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item">
                        <img src={hamster} class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item">
                        <img src={cat} class="d-block w-100" alt="..."/>
                    </div>

                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div> */}
        </div>
    )

}

export default Petlist;