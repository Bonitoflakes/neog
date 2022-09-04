import { useState } from "react";
import styled from "styled-components";
import { Container, Input, Button } from "./UI_KIT";

const App = () => {
  const [pnl, setPnl] = useState<undefined | number>(undefined);
  const [pnlPercentage, setPnlPercentage] = useState<undefined | number>(
    undefined
  );
  const [qty, setQty] = useState<undefined | number>(undefined);
  const [cp, setCp] = useState<undefined | number>(undefined);
  const [bp, setBp] = useState<undefined | number>(undefined);

  const calculatePnl = (e: any) => {
    e.preventDefault();
    if (qty && cp && bp) {
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
              placeholder="Enter the number of stocks"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />

            <Label htmlFor="buyPrice">Buy Price</Label>
            <Input
              required
              type="number"
              name="buyPrice"
              placeholder="Enter the purchase price"
              value={bp}
              onChange={(e) => setBp(Number(e.target.value))}
            />

            <Label htmlFor="currentPrice">Current Price</Label>
            <Input
              required
              type="number"
              name="currentPrice"
              placeholder="Enter the current price"
              value={cp}
              onChange={(e) => setCp(Number(e.target.value))}
            />

            <Button type="submit">Calculate</Button>
          </form>

          {pnl && (
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
                      ${pnl}, {pnlPercentage?.toFixed(2)}%
                    </span>
                  ) : (
                    <span style={{ color: "red" }}>
                      ${pnl}, {pnlPercentage?.toFixed(2)}%
                    </span>
                  )}
                </span>
              </h2>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
export default App;

const Label = styled.label`
  font-size: 2.4rem;
`;
