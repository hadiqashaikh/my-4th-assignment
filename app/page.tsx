

import Card from "./card/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Card name="hadiqa" rollnumber={123} day="Monday" timing="2:00 pM - 5:00 PM" /><br />
      <Card name="usama" rollnumber={456} day="monday" timing="2:00 PM - 5:00 PM" /><br />
      <Card name="hunain" rollnumber={789} day="monday" timing="2:00 PM - 5:00 PM" /><br />
    </>
  );
}
