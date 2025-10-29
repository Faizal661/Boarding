
const HOC = () => {
  return (
    <div className="border-2 p-4 m-4 ">
        <h1></h1>
        <UserProfile name={'faizal'} email={'faisalt661@gmail.com'}/>
    </div>
  )
}

export default HOC



const UserProfile = ({ name, email }: { name: string; email: string }) => {
  return (
    <div>
      <h1>name : {name}</h1>
      <h1>email : {email}</h1>
    </div>
  );
};

