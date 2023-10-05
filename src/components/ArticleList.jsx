import { Link } from "react-router-dom";

function ArticleList({ articles }) {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {articles.map((article) => {
        const { id, title, ingredients, method, cookingTime, image } = article;

        const ing = ingredients.map((ingredient) => {
          return ingredient + "," + " " + "";
          // return ones.substring(0, 5);
        });

        return (
          <li key={id} className="card  max-w-full md:max-w-full shadow-xl">
            <figure>
              <img src={image} alt="taom" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>
                <span className="font-bold text-cyan-600">Ingredients: </span>
                {ing + "..."}
              </p>
              <p>
                <span className="font-bold text-cyan-600">Method: </span>
                {method.substring(0, 40) + "..."}
              </p>
              <p>
                <span className="font-bold text-cyan-600">CookingTime </span>
                {cookingTime}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/article/${id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleList;
