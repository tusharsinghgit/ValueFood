import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function RecipePage() {
    const location = useLocation();
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(0); // Track selected recipe index

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('query');

        const fetchRecipes = async () => {
            try {
                const appId = 'a9c9e6ea'; // Replace with your actual Edamam app ID
                const appKey = '9a527fdf5250a160dadc31aa0b6919ae'; // Replace with your actual Edamam app key
                const searchUrl = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${appId}&app_key=${appKey}`;
                const response = await fetch(searchUrl);
                const data = await response.json();
                setRecipes(data.hits);
            } catch (error) {
                console.error('Failed to fetch recipes:', error);
            }
        };

        if (query) {
            fetchRecipes();
        }
    }, [location.search]);

    const handleImageClick = (index) => {
        setSelectedRecipeIndex(index); // Set selected recipe index
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
                <div className="row g-4 mb-5">
                    <div className="col-lg-8 col-xl-9">
                        {/* Render details of the selected recipe */}
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="border rounded">
                                    <a href="#">
                                        <img src={recipes[selectedRecipeIndex]?.recipe.image} alt={recipes[selectedRecipeIndex]?.recipe.label} className="img-fluid rounded" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h4 className="fw-bold mb-3">{recipes[selectedRecipeIndex]?.recipe.label} </h4>
                                <h5 className="mb-3">Diet Labels:</h5> 
                                <p> {recipes[selectedRecipeIndex]?.recipe.dietLabels.join(', ')}</p>
                                <br></br>
                                <h5 className="mb-3">Health labels:</h5> 
                                <p>{recipes[selectedRecipeIndex]?.recipe.healthLabels.join(', ')}</p>
                                <br>
                                </br>
                                <h4 className="fw-bold mb-3">Ingredients:</h4>

                                <ul>
                                    {recipes[selectedRecipeIndex]?.recipe.ingredientLines.map((ingredient, i) => ( 
                                        <li className="mb-4" key={`${recipes[selectedRecipeIndex]?.recipe.uri}-ingredient-${i}`}>{ingredient}</li>
                                    ))}
                                </ul>
                                <div className="input-group quantity mb-5" style={{ width: '100px' }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <a  href={recipes[selectedRecipeIndex]?.recipe.url} target="_blank" rel="noopener noreferrer" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                    <i className="fa fa-shopping-bag me-2 text-primary"></i> View Recipe
                                </a>
                            </div>
                        </div>
                    </div>
                    <h1 className="fw-bold mb-0">More Recipes</h1>
                    <main className="main">
                    {recipes.map(({ recipe }, index) => (
                    <section className="section1" key={recipe.uri}>
                        <img
                        src={recipe.image}
                        alt={recipe.label}
                        onClick={() => handleImageClick(index)}
                        
                        className="image1"
                        />
                        
                        <div className="card-text">
                        <h5 className="heading1">{recipe.label}</h5>
                        <p className="para1">
                        {recipe.description}
                        </p>
                        <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                        </div>
                    </section>
                    ))}
                    </main>
                    <div className="hover-me"></div>
                </div>
            </div>
        </div>
    );
}

export default RecipePage;
