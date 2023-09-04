import React from "react";
import WishlistItem from "./WishlistItem"

const WishlistPage = ({hostLink})=>{
    return (
        <div id="content" className="site-content">
			<div className="site-content-container container">
				<div id="primary" className="content-area">
					<main id="main" className="site-main">
						<div className="page hentry">
							<header className="entry-header"><h1 className="entry-title">Wishlist </h1></header>
							<div className="entry-content">
								<div className="soo-wishlist">

											<WishlistItem hostLink={hostLink}/>

									
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
    )
}

export default WishlistPage;