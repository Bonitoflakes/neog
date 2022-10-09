import { useState } from "react";
import styled from "styled-components";
import Footer from "./footer";
import { Container, Input, Button } from "./UI_KIT";

const App = () => {
  const [pnl, setPnl] = useState<number>(0);
  const [pnlPercentage, setPnlPercentage] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [costPrice, setCostPrice] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [output, setOutput] = useState<string>("");

  const calculatePnl = (e: any) => {
    e.preventDefault();
    if (qty > 0 && costPrice > 0 && currentValue > 0) {
      let profit = (currentValue - costPrice) * qty;
      let pnlPercentage = ((currentValue - costPrice) * 100) / costPrice;
      setPnl(profit);
      setPnlPercentage(pnlPercentage);

      if (Math.sign(profit) === 1) {
        setOutput(`You have a profit of ${profit} Rs. (${Number(pnlPercentage.toFixed(2))}%)`);
      } else if (Math.sign(profit) === -1) {
        setOutput(`You have a loss of ${profit} Rs. (${Number(pnlPercentage.toFixed(2))}%)`);
      } else {
        setOutput(`You have no profit or loss`);
      }
    } else {
      setOutput("One or more values is zero");
    }
  };

  return (
    <>
      <Container>
        <div
          style={{
            maxWidth: "80%",
            margin: " 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Stock profit & loss calculator
          </h1>

          <form onSubmit={calculatePnl} style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              required
              type="number"
              name="quantity"
              min={1}
              placeholder="Enter the number of stocks"
              value={qty || ""}
              onChange={(e) => setQty(Number(e.target.value))}
            />

            <Label htmlFor="buyPrice">Buy Price</Label>
            <Input
              required
              type="number"
              name="buyPrice"
              min={0}
              placeholder="Enter the purchase price"
              value={costPrice || ""}
              onChange={(e) => setCostPrice(Number(e.target.valueAsNumber))}
            />

            <Label htmlFor="currentPrice">Current Price</Label>
            <Input
              required
              type="number"
              name="currentPrice"
              min={0}
              placeholder="Enter the current price"
              value={currentValue || ""}
              onChange={(e) => setCurrentValue(Number(e.target.valueAsNumber))}
            />
            <Button type="submit">Calculate</Button>
          </form>

          <div style={{ marginTop: "2rem" }}>
            {pnl > 0 ? (
              <span style={{ color: "green", fontSize: "4rem", textAlign: "center", marginBottom: "2rem" }}>
                {output}
              </span>
            ) : (
              <span style={{ color: "red", fontSize: "4rem", textAlign: "center", marginBottom: "2rem" }}>
                {output}
              </span>
            )}
          </div>
          <Footer />
        </div>
      </Container>
    </>
  );
};
export default App;

const Label = styled.label`
  font-size: 2.4rem;
`;
