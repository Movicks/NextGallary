


interface SkeletonProps {
  item: number;
}

export default function Skeleton({ item }: SkeletonProps) {
  return (
    <>
      {[...Array(item).keys()].map((index) => (
        <div key={index} className="animate-pulse h-full">
          <div className="bg-gray-800 rounded-lg h-full shadow-lg"></div>
        </div>
      ))}
    </>
  );
}
