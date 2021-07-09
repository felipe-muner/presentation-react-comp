interface MyProps {
  variant: "rectangle" | "circle";
  width: string;
  height: string;
  margin?: string;
}

export default function SkeletonItem({
  variant,
  width,
  height,
  margin,
}: MyProps) {
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
          border-radius: ${variant === "rectangle" ? "15px" : "50%"};
          width: ${width};
          height: ${height};
          margin: ${margin};
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
