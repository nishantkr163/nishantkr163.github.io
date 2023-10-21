import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <div className="gitcont">
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Github
      </h1>
      <div className="hh">
        <GitHubCalendar username="nishantkr163"></GitHubCalendar>
      </div>

      {/* <p  style={{ width: "120%",textAlign:"center",marginLeft:"25px",marginBottom:"20px" }}></p> */}


<div className="img_div">


      <img
        id="github-top-langs"
        // style={{ width: "100%" }}
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=nishantkr163&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact"
        alt="nishantkr163"
      />

      <img
        id="github-stats-card"
        // style={{ width: "100%" }}
        src="https://github-readme-stats.vercel.app/api?username=nishantkr163&theme=light&hide_border=false&include_all_commits=true&count_private=true"
        alt="nishantkr163"
      />

      <img
        id="github-streak-stats"
        // style={{ width: "100%" }}
        src="https://github-readme-streak-stats.herokuapp.com?user=nishantkr163"
        alt="nishantkr163"
      />


</div>
    </div>
  );
}
