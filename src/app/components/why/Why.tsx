import Image from "next/image";

const Why = () => {
  return (
    <div className="bg-white my-2 rounded-md  text-black  md:w-[80%] mx-auto p-1   flex flex-col-reverse md:flex-row h-[450px] lg:h-[280px]">
      <div className="flex-1 p-2" dir="rtl">
        <div className="textBody flex flex-col gap-2 ">
          <div className="title font-bold text-xl">
            چرا مرکز رشد واحدهای فناور دزفول؟
          </div>
          <div className="body text-[14px]">
            مرکز رشد دزفول سازمانی است که جریان دانش و فناوری را در میان دانشگاه
            ها، موسسات تحقیق و توسعه، شرکت های خصوصی، مخترعین و مبتکرین شهرستان
            دزفول به حرکت انداخته و ارتباط آنها را با بازار از طریق ایده ­های نو
            و کاربردی تسهیل می­ نماید.
          </div>
        </div>
        <div className="box border rounded-md shadow-md  ">
          <div className="title text-center my-3  py-2 h-full  font-bold">
            آمار کلی مرکز رشد از زمان تأسیس تا کنون
          </div>
          <div className="boxChild  p-3 m-1 mt-3 flex flex-row justify-center items-center h-full">
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="number font-bold text-xl text-[rgb(65,160,208)]">
                +200
              </div>
              <div className="boxchildtitle">طرح های رسیده</div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="number font-bold text-xl text-[rgb(65,160,208)]">
                +70
              </div>
              <div className="boxchildtitle">هسته ها</div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="number font-bold text-xl text-[rgb(65,160,208)]">
                +50
              </div>
              <div className="boxchildtitle">شرکت های فن آور</div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="number font-bold text-xl text-[rgb(65,160,208)]">
                +300
              </div>
              <div className="boxchildtitle">اشتغال شرکت ها</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[30%] w-full h-full  relative rounded-md  bg-red-400">
        <Image
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          quality={100}
          objectFit=""
          className="absolute "
          alt=""
          src={
            "https://uploads.storage.iran.liara.space/The-Importance-of-Personal-Development-in-Sales.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Why;
