import Image from "./image";
import WorkSample from "./WorkSample";
import Counter from "./Counter";
import LoadUser from "./LoadUser";
export default function App() {
  const workData = [
    {
      year: "2018-2025",
      experience: "Bsc in CS",
      institute: "lorem5",
    },
    {
      year: "2020-2025",
      experience: "Full stack Web developer",
      institute: "lorem60",
    },
    {
      year: "2021-2025",
      experience: "Software Engineer",
      institute: "lorem100",
    },
  ];
  return (
    <div>
      <Image />
      {/* <WorkSample
        year={"2018-2025"}
        experience={"Bsc in CS"}
        institute={"lorem5"}
      />
      <WorkSample
        year={"2020-2025"}
        experience={"Full stack Web developer"}
        institute={"lorem60"}
      /> */}
      
      {workData.map((item) => (
        <WorkSample works={item}/>
      ))}
      <Counter />
      <LoadUser />
    </div>
  );
}
