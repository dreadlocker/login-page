export default function Success({ text = "Success" }) {
  return (
    <div className="absoluteCenter">
      <div>{text}</div>
      <br />
      {/* TODO - after REDUX save it there */}
      <div>You will be redirected shortly.</div>
    </div>
  );
}
