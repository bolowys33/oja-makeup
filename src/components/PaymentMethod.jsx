import methods from '../assets/pay.png'

const PaymentMethod = () => {
    return ( 
        <div className="bg-white rounded-lg shadow-md pt-6 pb-8 px-4 ">
                <h3 className="text-lg font-bold">Pay with</h3>
                <img src={methods} alt="" />
            </div>
     );
}
 
export default PaymentMethod;