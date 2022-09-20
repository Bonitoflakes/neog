import { useState } from "react";
import styled from "styled-components";
import Footer from "./footer";
import { Container, Input, Button } from "./UI_KIT";

const App = () => {
  const [pnl, setPnl] = useState<number>(0);
  const [pnlPercentage, setPnlPercentage] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [cp, setCp] = useState<number>(0);
  const [bp, setBp] = useState<number>(0);

  const calculatePnl = (e: any) => {
    e.preventDefault();
    if (qty > 0 && cp > 0 && bp > 0) {
      setPnl(qty * cp - qty * bp);
      setPnlPercentage(((qty * cp - qty * bp) / (qty * bp)) * 100);
    }
  };

  return (
    <>
      <Container>
        <div style={{ maxWidth: "50%", margin: " 0 auto" }}>
          <h1
            style={{
              fontSize: "4rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Stock profit & loss calculator
          </h1>

          <form onClick={calculatePnl}>
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
              value={bp || ""}
              onChange={(e) => setBp(Number(e.target.valueAsNumber))}
            />

            <Label htmlFor="currentPrice">Current Price</Label>
            <Input
              required
              type="number"
              name="currentPrice"
              min={0}
              placeholder="Enter the current price"
              value={cp || ""}
              onChange={(e) => setCp(Number(e.target.valueAsNumber))}
            />

            <Button type="submit">Calculate</Button>
          </form>

          {pnl === 0 ? (
            "No profits or losses yet"
          ) : pnl > 0 ? (
            <div style={{ marginTop: "2rem" }}>
              <h2
                style={{
                  fontSize: "4rem",
                  textAlign: "center",
                  marginBottom: "2rem",
                }}
              >
                Your profit/loss is &nbsp;
                <span>
                  {pnl > 0 ? (
                    <span style={{ color: "green" }}>
                      ${pnl}, ({pnlPercentage?.toFixed(2)}%)
                    </span>
                  ) : (
                    <span style={{ color: "red" }}>
                      ${pnl}, {pnlPercentage?.toFixed(2)}%
                    </span>
                  )}
                </span>
              </h2>
            </div>
          ) : null}
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
