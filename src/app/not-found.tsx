import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Image
        src="https://i.ibb.co.com/vCtz4N4H/not-found.webp"
        width={500}
        height={500}
        alt="not found page"
        className="w-full"
      />
    </div>
  );
};

export default NotFoundPage;
