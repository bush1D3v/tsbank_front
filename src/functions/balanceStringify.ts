import jsonUserParser from "./jsonUserParser";

interface balanceStringifyProps {
  token: string;
  actualBalance: number;
  inputBalance: string;
  arithmeticOperator: "+" | "-";
}

export default function balanceStringify({
  token,
  actualBalance,
  inputBalance,
  arithmeticOperator
}: balanceStringifyProps): void {
  const { user } = jsonUserParser(sessionStorage.getItem("userData"));

  if (arithmeticOperator === "+") {
    user[ "balance" ] = actualBalance + parseFloat(inputBalance.replace(/,/g, "."));
  } else if (arithmeticOperator === "-") {
    user[ "balance" ] = actualBalance - parseFloat(inputBalance.replace(/,/g, "."));
  }

  const newUser = JSON.stringify({
    user,
    token
  });

  sessionStorage.setItem("userData", newUser);
}
