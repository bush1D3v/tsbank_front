import TransactionModal from "./TransactionModal";
import { type Meta } from "@storybook/react";

const meta: Meta<typeof TransactionModal> = {
  title: "Pages/InitialPage/TransactionDetail/TransactionModal",
  component: TransactionModal,
  decorators: [
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = () =>
  <TransactionModal
    transactionData={{
      id: 1,
      description: "deposit",
      value: 1000,
      date: "2024/01/08 21:57:59",
      user_id: 71,
      type: "input"
    }}
  />;
