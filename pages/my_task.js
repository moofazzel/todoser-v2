import MyTasks from "../components/MyTasks.js/MyTasks";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/all_tasks");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const my_task = ({ data }) => {
  // console.log(data);
  return (
    <div className="container pt-20">
      {data.map((t) => (
        <MyTasks key={t._id} tasks={t} />
      ))}

      {/* <MyTasks allTasks={data} /> */}
    </div>
  );
};

export default my_task;
