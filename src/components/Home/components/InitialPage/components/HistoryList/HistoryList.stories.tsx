import { type HistoryData } from "../../../functions";
import { type Meta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import HistoryList from "./HistoryList";

const meta: Meta<typeof HistoryList> = {
  title: "Pages/InitialPage/HistoryList",
  component: HistoryList,
  decorators: [
    withRouter,
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

const historyData: HistoryData[] = [
  {
    id: 49,
    description: "deposit",
    value: 100,
    date: "2024/01/08 21:57:59",
    user_id: 71,
    type: "input"
  },
  {
    id: 50,
    description: "deposit",
    value: 100,
    date: "2024/01/08 21:58:59",
    user_id: 71,
    type: "input"
  },
  {
    id: 51,
    description: "deposit",
    value: 100,
    date: "2024/01/08 21:59:59",
    user_id: 71,
    type: "input"
  }
];

export const Default = () => <HistoryList historyData={historyData} />;
