type ProfileProps = {
  name: string;
  age: number;
}

export default function Profile(props: ProfileProps){
  return <div>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
  </div>
}