import { useFetch } from "../hooks/useFetch";
import ArticleList from "../components/ArticleList";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Loading from "../components/Loading";

function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");

  const { changeLoading, loading } = useContext(ThemeContext);
  useEffect(() => {
    changeLoading(isPending);
  }, [isPending]);

  if (loading) {
    return <Loading />;
  }

  return <div>{articles && <ArticleList articles={articles} />}</div>;
}

export default Home;
