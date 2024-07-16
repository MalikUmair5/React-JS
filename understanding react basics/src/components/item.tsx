
interface itemProps {
    item: string;

}

function item({ item }: itemProps): JSX.Element {
  return (
    <>
      <li  className="list-group-item">
        {item}
      </li>{" "}
    </>
  );
}

export default item;
