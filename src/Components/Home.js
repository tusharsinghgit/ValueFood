import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS

export default function Home(){

    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    

    const fetchRecipes = async () => {
        const appId = 'a9c9e6ea'; // Replace with your actual Edamam app ID
        const appKey = '9a527fdf5250a160dadc31aa0b6919ae'; // Replace with your actual Edamam app key

        // List of popular queries
        const queries = ['chicken', 'beef', 'vegetarian', 'pasta', 'dessert', 'salad', 'soup', 'seafood', 'vegan', 'breakfast'];
        const randomQuery = queries[Math.floor(Math.random() * queries.length)]; // Select a random query

        const searchUrl = `https://api.edamam.com/search?q=${randomQuery}&app_id=${appId}&app_key=${appKey}`;

        const response = await fetch(searchUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }

        const data = await response.json();
        return data.hits;
    };

    useEffect(() => {
        const loadRecipes = async () => {
            try {
                const fetchedRecipes = await fetchRecipes();
                setRecipes(fetchedRecipes);
            } catch (error) {
                console.error('Failed to fetch recipes:', error);
                alert('Failed to fetch recipes. Please try again later.');
            }
        };

        loadRecipes();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim() !== '') {
            navigate(`/recipe?query=${encodeURIComponent(query)}`);
        } else {
            alert('Please enter at least one ingredient.');
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        beforeChange: (current, next) => setCurrentIndex(next),
    };

    return(

        <>
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                    <form onSubmit={handleSubmit} className="input-group w-75 mx-auto d-flex"> 
                        <label htmlFor="query" className="visually-hidden">Enter ingredients (comma-separated):</label>
                        <input 
                            type="text" 
                            id="query" 
                            name="query" 
                            className="form-control p-3" 
                            placeholder="Enter ingredients (comma-separated)" 
                            aria-describedby="search-icon-1" 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                        /> 
                        <button type="submit" id="search-icon-1" className="input-group-text p-3">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                    </div> 
                </div>
            </div>
        </div>
        <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-4">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        {/* <h4 className="mb-3 text-secondary">#</h4> */}
                        <h1 className="mb-5 display-3 text-primary">Enter Your Ingredients</h1>
                        <div className="position-relative mx-auto">
                            <form onSubmit={handleSubmit} className="position-relative w-75 mx-auto d-flex">
                                <input 
                                    className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" 
                                    type="text" 
                                    id="query" 
                                    name="query" 
                                    placeholder="Search" 
                                    value={query} 
                                    onChange={(e) => setQuery(e.target.value)} 
                                />
                                <button 
                                    type="submit" 
                                    className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" 
                                    style={{ top: 0, right: '25%' }}
                                >
                                    Submit Now
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src="img/fwbanner5.jpg" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                                    <a href="#" className="btn px-4 py-2 text-white rounded"></a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src="img/fwbanner6.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="new-main center-img">
            <div className="container py-4">
                <div class="row g-4 align-items-center">
                    <div class="col-lg-12">
                        <div class="position-relative">
                            <img src="img/fwbanner7.jpg" class="banner-image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="new-main">
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img src="img/fwbanner5.jpg" className="img-fluid w-100 rounded" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img src="img/fwbanner6.jpg" className="img-fluid w-100 rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    <div class="image-container">
        <img src="img/newbanner.png" alt="Food Image" width="1200" height="auto" />
        <div class="text-overlay">
            <h1>Every Ingredient Counts</h1>
            <p>Transform What You Have Into Delicious Meals.</p>
        </div>
    </div>
       
        <div className="container-fluid py-4">
            <div className="container py-3">
                <h3>Just For You</h3>
            </div>
        </div>
        
        <div className="new-main">
            <Slider {...settings}>
                {recipes.map(({ recipe }) => (
                    <div key={recipe.uri}>
                        <div className="card">
                            <div className="card_image">
                                <img src={recipe.image} alt={recipe.label} />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">{recipe.label}</h2>
                                <div className="card_text">
                                    <p>{recipe.ingredientLines.join(', ')}</p>
                                    <p><strong>Diet Labels:</strong> {recipe.dietLabels.join(', ')}</p>
                                    <p><strong>Health Labels:</strong> {recipe.healthLabels.join(', ')}</p>
                                    <hr />
                                    <p>{recipe.totalTime > 0 ? `Total Time: ${recipe.totalTime} minutes` : 'No cooking time specified'}</p>
                                    <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

        </>

    );
}