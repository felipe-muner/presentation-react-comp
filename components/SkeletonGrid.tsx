export default function SkeletonGrid({
  variant,
  width,
  height,
}: {
  variant: string;
  width: string;
  height: string;

}) {
  return (

    <div>
      <div className="skeleton-div"></div>
      
      <style jsx>{`
        .skeleton-div {
          background-image: linear-gradient(
            90deg,
            #ddd 25%,
            #eaeaea 37%,
            #ddd 63%
          );
          width: ${width};
          height: ${height};
          list-style: none;
          background-size: 400% 100%;
          background-position: 100% 50%;
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
