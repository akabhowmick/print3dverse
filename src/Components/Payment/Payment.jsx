/* eslint-disable react/prop-types */
import { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ButtonWrapper from "./ButtonWrapper.jsx";
import { useCartContext } from "../../Providers/CartProvider.jsx";
import { Button } from "@mui/material";

export const Payment = ({ handleNext }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { finalTotal } = useCartContext();
  const currency = "USD";

  const handleNextClick = (e) => {
    e.preventDefault();
    if (paymentSuccess) {
      handleNext();
    }
  };

  return (
    <div>
      <div className="payment-info">
        <h2 className="page-title">Payment</h2>
        <div className="paypal-buttons">
          <h3>Complete the payment!</h3>
          <PayPalScriptProvider
            options={{
              "client-id":
                "AXqOomrS73dZYPvV-fElIHCQITsnzIRe0DNmMZKhmIC6nod2TPfhJV9HGnD4iE4O0M4UL3_jAJzgL8gs",
              components: "buttons",
              currency: "USD",
            }}
          >
            <ButtonWrapper
              amount={finalTotal}
              currency={currency}
              showSpinner={true}
              setPaymentSuccess={() => setPaymentSuccess(true)}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        onClick={(e) => handleNextClick(e)}
      >
        Next
      </Button>
    </div>
  );
};
