import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Article() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: article, isPending, error } = useFetch(url);

  return (
    <>
      {article && (
        <div className="flex justify-center">
          <div className="card card-compact w-[695px] bg-base-100 shadow-xl">
            <figure className="h-[400px]">
              <img src={article.image} alt="image" />
            </figure>
            <div className="card-body flex gap-3">
              <h2 className="card-title text-5xl">{article.title}</h2>
              <hr />
              <p className="text-[17px]">
                <span className="font-bold text-cyan-600">Ingredients:</span>
                {article.ingredients.join(", ")}
              </p>
              <hr />
              <p className="text-[14px]">
                <span className="font-bold text-cyan-600">Method: </span>
                {article.method}
              </p>
              <hr />
              <p className="text-[17px] ">
                <span className="font-bold text-cyan-600">CookingTime: </span>
                {article.cookingTime}
              </p>
              <div className="card-actions justify-end">
                <Link to={"/"} className="btn btn-primary">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Article;
