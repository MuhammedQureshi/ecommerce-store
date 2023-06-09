import Currency from "@/components/currency";
import Rating from "@/components/rating";

interface InfoProps {
  name: string;
  price: number;
}

const Info: React.FC<InfoProps> = ({ name, price }) => {
  return ( 
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl tracking-tight text-gray-900">
          <Currency value={price} />
        </p>
        <Rating value={5} total={50} />
      </div>
    </div>
  );
}
 
export default Info;