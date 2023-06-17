import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useCartContext } from "../Providers/CartProvider";
import { useUsersContext } from "../Providers/UserProvider";

export default function Review() {
  const { cartItems, finalTotal } = useCartContext();
  const { user, order } = useUsersContext();
  const addresses = [
    user.addressLine1,
    user.city,
    user.state,
    user.country,
    user.zipCode,
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems?.map((cartItem) => (
          <ListItem key={cartItem.name} sx={{ py: 1, px: 0 }}>
            <img
              src={cartItem.images[0]}
              style={{
                maxWidth: "60px",
                margin: "0.5rem",
                borderRadius: "10px",
              }}
            />
            <ListItemText primary={cartItem.name} secondary={cartItem.desc} />
            <Typography variant="body2">
              ${cartItem.price.toFixed(2)}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total (including shipping and taxes)" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${finalTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {user.firstName + " " + user.lastName}
          </Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Order Number
          </Typography>
          <Typography gutterBottom>#{order}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <form
          action="https://formsubmit.co/print3Dverse@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Complete Order for Queens Finest Prints!" />
          <input type="hidden" name="_next" value="http://127.0.0.1:5173/upload-image" />
          <input type="hidden" name="_template" value="table" />
          <input type='hidden' name='Name' value={user.firstName + " " + user.lastName}/>
          <input type='hidden' name='Order-Number' value={order}/>
          <input type='hidden' name='Address' value={addresses.join(", ")}/>
          <input type='hidden' name='Total-Cost' value={"$"+finalTotal}/>
          {cartItems.map(function(element, index){
              return(
                <div key={ index } id={ index }>
                  <input type='hidden' name="Product-Ordered" value={(element.name)+ "-" + element.quantity}/>  
                </div>)})
            }

          <Button
            fullWidth
            variant="contained"
            sx={{ bgColor: "var(--blue-background" }}
            type="submit"
          >
            <Typography>
              Upload Images and Personalizations! 
            </Typography>
          </Button>
        </form>
      </Grid>
    </React.Fragment>
  );
}
