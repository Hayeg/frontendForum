// import React, { useContext, useState, useEffect } from "react";
// import { AppState } from "../../App";
// import { Link } from "react-router-dom";
// import classes from "./Home.module.css";
// import axios from "../../axios/axiosConfig";
// import { IoPerson } from "react-icons/io5";
// import { FaArrowCircleRight } from "react-icons/fa";


// function Home() {
// 	const { user } = useContext(AppState);
// 	const [questions, setQuestions] = useState([]);
// 	useEffect(() => {
// 		const fetchQuestions = async () => {
// 			try {
// 				const {data} = await axios.get("/question/selectquestion", {
// 					headers: {
// 						Authorization: `Bearer ${user.token}`,
// 					},
// 				});
// 				setQuestions(data?.question);
// 				console.log(data?.question);
// 			} catch (error) {
// 				console.error("Error fetching questions:", error);
// 			}
// 		};
// 		fetchQuestions();
// 	}, [user]);

// 	return (
// 		<section className={classes.home}>
// 			<div className={classes.home__container}>
// 				<div className={classes.home__wellcome}>
// 					<div className={classes.home__question}>
// 						<p>
// 							<Link to={"/askquestion"}>Ask Question</Link>
// 						</p>
// 					</div>
// 					<div>
// 						<h2>Welcome: {user.username}</h2>
// 					</div>
// 				</div>
// 				<div className={classes.home__input}>
// 					<input type="text" placeholder="Search Question" />
// 				</div>
// 				<div className={classes.closing_link}>
// 					<Link to={"/answer"}>
// 						{" "}
// 						<div className={classes.biggerbox}>
// 							<div>
// 								{questions?.map((question) => (
// 									<Link
// 										to={`/answer/${question.questionid}`}
// 										key={question.questionid}
// 									>
// 										<div className={classes.bigbox}>
// 											<div className={classes.middlebox}>
// 												<div className={classes.smallbox}>
// 													<div className={classes.person_icon}>
// 														<IoPerson size={70} />
// 													</div>
// 													<div className={classes.userName}>
// 														<p>{question.username}</p>
// 													</div>
// 												</div>
// 												<div>
// 													<p>{question.title}</p>
// 												</div>
// 											</div>
// 											<div>
// 												<div className={classes.arrow}>
// 													<FaArrowCircleRight size={30} />
// 												</div>
// 											</div>
// 										</div>
// 									</Link>
// 								))}
// 							</div>
// 						</div>
// 					</Link>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default Home;

import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios/axiosConfig";
import classes from "./Home.module.css";
import { Appstate } from "../../App";
import React, { useEffect, useState, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Home() {
  // const [selectdata, setselectdata] = useState({});

  // const { user } = useContext(Appstate);
  // const token = localStorage.getItem("token");
  // // useEffect(() => {
  // async function selectuser() {
  //   try {
  //     const { data } = await axios.get("question/selectquestion");
  //     setselectdata(data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  // selectuser();
  // // }, [token]);

  // return (
  //   <section className={classes.home}>
  //     <div className={classes.home__container}>
  //       <div className={classes.home__wellcome}>
  //         <div className={classes.home__question}>
  //           <p>
  //             <Link to={"/askquestion"}>Ask Question</Link>
  //           </p>
  //         </div>
  //         <div>
  //           <h2 style={{ fontWeight: "400" }}>
  //             Wellcome:
  //             <span style={{ color: "rgb(254, 128, 130", fontWeight: "500" }}>
  //               {user.username}
  //             </span>
  //           </h2>
  //         </div>
  //       </div>
  //       <div className={classes.home__input}>
  //         <input type="text" placeholder="Search Question" />
  //       </div>
  //       <hr />

  //       {selectdata?.AllQuestions && selectdata.AllQuestions.length > 0 ? (
  //         <>
  //           {selectdata?.AllQuestions?.map((question, index) => (
  //             <Link to={`/answer/${question.questionid}`}>
  //               <div key={index} className={classes.Iconuser}>
  //                 <div className={classes.LeftDivision}>
  //                   <FaUserCircle
  //                     size={100}
  //                     style={{ padding: "0 20px 0 10px", margin: "0" }}
  //                   />
  //                   <div className={classes.user}>{question.username}</div>
  //                 </div>
  //                 <div className={classes.MiddleDivision}>{question.title}</div>
  //                 <div className={classes.RightDivision}>
  //                   <FaAngleRight
  //                     className={classes.angle}
  //                     size={40}
  //                     style={{ paddingTop: "50" }}
  //                   />
  //                 </div>
  //               </div>
  //             </Link>
  //           ))}
  //         </>
  //       ) : (
  //         <p>No question is posted</p>
  //       )}
  //     </div>
  //   </section>
  // );

  const [selectData, setSelectData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { user } = useContext(Appstate);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    async function selectUser() {
      try {
        const { data } = await axios.get("question/selectquestion", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSelectData(data.AllQuestions);
        setFilteredData(data.AllQuestions); // Initialize filtered data with the complete data set
      } catch (error) {
        console.log(error.response);
        navigate("/");
      }
    }

    if (token) {
      selectUser();
    } else {
      navigate("/"); // Redirect if no token is present
    }
  }, [token, navigate]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = selectData.filter((question) =>
      question.title.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <section className={classes.home}>
      <div className={classes.home__container}>
        <div className={classes.home__wellcome}>
          <div className={classes.home__question}>
            <p>
              <Link to={"/askquestion"}>Ask Question</Link>
            </p>
          </div>
          <div>
            <h2 style={{ fontWeight: "400" }}>
              Welcome:
              <span style={{ color: "rgb(254, 128, 130)", fontWeight: "500" }}>
                {user.username}
              </span>
            </h2>
          </div>
        </div>
        <div className={classes.home__input}>
          <input
            type="text"
            placeholder="Search Question"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <hr />
        {filteredData && filteredData.length > 0 ? (
          <>
            {filteredData.map((question, index) => (
              <Link to={`/answer/${question.questionid}`} key={index}>
                <div className={classes.Iconuser}>
                  <div className={classes.LeftDivision}>
                    <FaUserCircle
                      size={100}
                      style={{ padding: "0 20px 0 10px", margin: "0" }}
                    />
                    <div className={classes.user}>{question.username}</div>
                  </div>
                  <div className={classes.MiddleDivision}>{question.title}</div>
                  <div className={classes.RightDivision}>
                    <FaAngleRight
                      className={classes.angle}
                      size={40}
                      style={{ paddingTop: "50" }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <p>No questions posted</p>
        )}
      </div>
    </section>
  );
}

export default Home;

