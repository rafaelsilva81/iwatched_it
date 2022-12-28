import { type NextPage } from "next";
import api from "../lib/axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoginForm from "../components/LoginForm";

const Home = ({ popular }: { popular: MovieResponse }) => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return <LoginForm />;
  } else {
    return (
      <div className="flex flex-1 flex-row">
        {/* Header */}
        <div className="flex flex-1">
          {/* Brand */}
          <div className="flex flex-1">IWATCHEDIT</div>

          {/* Searchbar */}
          <div className="flex flex-1">
            <input type="text" />
          </div>

          {/* User */}
          <div className="flex flex-1">User</div>
        </div>
      </div>
    );
  }
};

export async function getStaticProps() {
  const popular = await api.get("/popular", {
    params: {
      api_key: process.env.MOVIE_DB_API_KEY,
      page: 1,
      language: "pt-BR",
    },
  });

  // Only revalidate at most once per day
  return {
    props: {
      popular: popular.data,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default Home;
