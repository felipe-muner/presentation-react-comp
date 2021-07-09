import SkeletonItem from "./SkeletonItem";

export default function SkeletonGrid() {
  const AMOUNT = 8;
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {Array.from(Array(AMOUNT).keys()).map((el, i) => (
        <div
          key={i}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            width: "300px",
            height: "300px",
            backgroundColor: "white",
            margin: "15px",
            padding: "15px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SkeletonItem variant="circle" width={"50px"} height={"50px"} />
            <SkeletonItem
              variant="rectangle"
              width={"200px"}
              height={"30px"}
              margin={"10px 0px 0px 5px"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
