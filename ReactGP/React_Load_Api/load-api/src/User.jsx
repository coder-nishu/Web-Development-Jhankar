export default function User(props) {
  const clickHandler = (data) =>{
    console.log("Button clicked!", data);
  }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src= {props.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {props.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{props.email}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{props.gender}</div>
      <div className="badge badge-outline">{props.phone}</div>
    </div>
    <button onClick={() => clickHandler(props.name)} className="btn btn-primary">Buy Now</button>
  </div>
</div>
  );
}
