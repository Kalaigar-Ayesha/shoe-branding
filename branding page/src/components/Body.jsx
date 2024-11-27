const Body=()=>{
    return (
        <>
        <main className="body">
            <div className="body-content">
            <h1>Celebrate originality</h1>
            <br />
            <p>Adidas encourages self-expression, creativity, and individuality,  <br />highlighting their commitment to innovation, diversity,<br /> and authentic personal style.</p>
            <br />
                <div className="body-btn">
                   <div><button>Shop now!</button></div>

                        <div><button>Category</button></div>
                    
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                    <img className="amazon-logo"src="./images/amazon.png" alt="Amazon logo" /> 
                            <img className="flipkard-logo"src="./images/flipkard.png" alt="Flipkart logo" />
                    </div>

                </div>
            </div>
            <div className="body-img">
            <img src="./images/shoe.png" alt="shoe image" />

            </div>
        </main>
        </>
    )
};
export default Body;