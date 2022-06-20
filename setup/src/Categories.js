import React from "react";

const Categories = ({ categories, filterItems }) => {
	return (
		<div className="btn-container">
			{/* dynamically map categories to each item in the menu and assign it a buttom */}
			{categories.map((category, index) => {
				// create button for all the different categories
				return (
					<button
						type="button"
						className="filter-btn"
						key={index}
						onClick={() => filterItems(category)}>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
