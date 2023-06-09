import Button from "./button";

const Billboard = () => {
  return ( 
    <div className="hidden lg:block relative aspect-[2.4/1] overflow-hidden bg-[#f7f0ea]">
      <img src="/bg.svg" className="absolute object-cover" />
      <div className="left-10 top-32 absolute space-y-2">
        <p className="text-lg">In This Season, Find The Best 🔥</p>
        <h2 className="font-semibold text-6xl text-black">
          Exclusive Collection <br /> For Everyone
        </h2>
        <Button>Check It Out</Button>
      </div>
      <div className="aspect-square absolute right-0">
        <img src="/user.png" className="object-cover" />
      </div>
    </div>
   );
}
 
export default Billboard;