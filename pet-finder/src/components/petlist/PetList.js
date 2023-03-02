import React from 'react';
import cat from '../assets/cats.jpg';
import hamster from '../assets/hmaster.jpg';
import dog from '../assets/dogs.jpg';
import '../petlist/petlist.css';

function Petlist () {


    return (
        <div>
           
            <div className="album py-5 bg-light" id="list">
                <div className="container">
                    <div className="row">
                        <h1 className="text-start mb-5" id="header"> BROWSE CATEGORIES </h1> 

                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={cat} className="card-img-top" alt="Cat"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={hamster} className="card-img-top" alt="Cat"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={dog} className="card-img-top" alt="Cat"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={hamster} className="card-img-top" alt="Cat"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={cat} className="card-img-top" alt="Cat"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={dog} className="card-img-top" alt="Cat"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Petlist;

// {/* <h1>PET COLLECTION</h1> */}
//             {/* <div id="carouselExample" class="carousel slide">
//                 <div class="carousel-inner">

//                     <div class="carousel-item active">
//                         <img src={cat} class="d-block w-100" alt=cat/>
//                     </div>

//                     <div class="carousel-item">
//                         <img src={hamster} class="d-block w-100" alt="..."/>
//                     </div>

//                     <div class="carousel-item">
//                         <img src={cat} class="d-block w-100" alt="..."/>
//                     </div>

//                 </div>

//                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Previous</span>
//                 </button>

//                 <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Next</span>
//                 </button>

//             </div> */}