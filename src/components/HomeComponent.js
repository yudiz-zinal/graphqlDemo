import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_COUNTRIES } from "./query";

const HomeComponent = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const navigate = useNavigate();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div className="App">
      <h2>My first Apollo app 🚀🚀🚀🚀🚀🚀🚀🚀😀😋 </h2>
      <br />
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Flag</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.countries?.map((country, index) => {
            return (
              <tr key={index}>
                <td>{country?.code}</td>
                <td>{country?.name}</td>
                <td>{country?.emoji}</td>
                <td>{country?.phone}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={(e) => {
                      navigate(`/inner/${country?.code}`);
                    }}
                  >
                    Go to
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default HomeComponent;
