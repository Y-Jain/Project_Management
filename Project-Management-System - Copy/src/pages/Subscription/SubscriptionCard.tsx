import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface SubscriptionCardProps {
  data: {
    planName: string;
    features: string[];
    planType: string;
    price: number;
    buttonName: string;
  };
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ data }) => {
  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-xl shadow-[#14173b]
    p-5 space-y-5 w-[18rem] border border-gray-700">
      <p className="text-lg font-semibold text-black">{data.planName}</p>

      <p className="flex justify-between items-center text-black">
        <span className="text-xl font-bold">₹{data.price}</span>
        <span className="text-sm uppercase">{data.planType}</span>
      </p>


      {data.planType === "ANNUALLY" && <p className="text-green-600 text-sm font-medium">30% Off</p>}


      <Button className="w-full">{data.buttonName}</Button>


      <div className="space-y-2 mt-3">
        {data.features.map((item) => (
          <div key={item} className="flex items-center gap-2 text-black">
            <CheckCircledIcon className="text-green-500" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;


// import { Button } from "@/components/ui/button"
// import { CheckCircledIcon } from "@radix-ui/react-icons"

// const SubscriptionCard = ({ data }) => {
//   return (
//     <div className="rounded-x1 bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b]
//     shadow-2x1 card p-5 space-y-5 w-[18rem]">
//       <p>{data.planName}</p>
//       <p>
//         <span className="text-xl font-semibold">₹{data.price}</span>
//         <span>{data.planType}</span>

//       </p>
//       {data.planType === "ANNUALLY" && <p className="text-green-500">30% off</p>}

//       <Button className="w-full">
//         {data.buttonName}
//       </Button>
//       <div>
//         {data.features.map((item : string) => <div key={item}className="flex items-center gap-2">
//           <CheckCircledIcon/>
//           <p>{item}</p>
//         </div> )}
//       </div>

//     </div>
//   )
// }

// export default SubscriptionCard
