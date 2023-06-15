import Button from "@/components/button";

const Summary = () => {
  return ( 
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Subtotal</div>
          <div className="text-sm font-medium text-gray-900">$99.00</div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center text-sm text-gray-600">
            Shipping estimate
          </div>
          <div className="text-sm font-medium text-gray-900">$5.00</div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex text-sm text-gray-600">
            Tax estimate
          </div>
          <div className="text-sm font-medium text-gray-900">$8.32</div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <div className="text-base font-medium text-gray-900">$112.32</div>
        </div>
      </dl>
      <Button className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
}
 
export default Summary;