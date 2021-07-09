export default function SkeletonGrid({
  amount,
  amountInRow,
  width,
  height,
}: {
  amount: number;
  amountInRow: number;
  width: string;
  height: string;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {Array.from(Array(amount).keys()).map((item, i) => (
          <div key={i.toString()} className="skeleton-div"></div>
        ))}
        {/* <div className="skeleton-div"></div>
        <div className="skeleton-div"></div>
        <div className="skeleton-div"></div>
        <div className="skeleton-div"></div>
        <div className="skeleton-div"></div>
        <div className="skeleton-div"></div>
        <div className="skeleton-div"></div>
        <div className="skeleton-div"></div>
        <div className="skeleton-div"></div>
        <div className="skeleton-div"></div> */}
      </div>
      <style jsx>{`
        .skeleton-div {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          background-image: linear-gradient(
            90deg,
            #ddd 25%,
            #eee 37%,
            #ddd 63%
          );
          width: 300px;
          height: 300px;
          margin: 15px;
          list-style: none;
          background-size: 400% 100%;
          // background-position: 100% 50%;
          animation: skeleton-loading 2s ease infinite;
        }

        @keyframes skeleton-loading {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }
      `}</style>
    </div>
  );
}
