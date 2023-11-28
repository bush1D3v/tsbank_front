import { ReactElement } from "react";
import { jsonUserParser } from "../../functions";
import { CgProfile } from "react-icons/cg";

export default function ProfilePage(): ReactElement {
  const stringUserData = localStorage.getItem("userInfo");

  const jsonUserData = jsonUserParser(stringUserData);

  return (
    <main className="flex items-center justify-center flex-col h-[82vh] p-2">
      <table className="flex flex-col h-content w-full justify-center max-w-sm gap-2 p-1 border-lightGray border-2 rounded-md md:scale-110 lg:scale-125">
        <thead className="flex justify-center pb-6">
          <CgProfile className="w-[10vh] h-[10vh]" />
        </thead>
        <tr className="flex justify-between border-lightGray border-2 rounded-2xl px-2">
          <td className="p-[2px] font-bold">User:</td> <td className="p-[2px]"> {jsonUserData.user.name}</td>
        </tr>
        <tr className="flex justify-between border-lightGray border-2 rounded-2xl px-2">
          <td className="p-[2px] font-bold">Balance:</td> <td className="p-[2px]"> {jsonUserData.user.balance}</td>
        </tr>
        <tr className="flex justify-between border-lightGray border-2 rounded-2xl px-2">
          <td className="p-[2px] font-bold">Email:</td> <td className="p-[2px]"> {jsonUserData.user.email}</td>
        </tr>
        <tr className="flex justify-between border-lightGray border-2 rounded-2xl px-2">
          <td className="p-[2px] font-bold">Phone:</td> <td className="p-[2px]"> {jsonUserData.user.phone}</td>
        </tr>
        <tr className="flex justify-between border-lightGray border-2 rounded-2xl px-2">
          <td className="p-[2px] font-bold">Cpf:</td> <td className="p-[2px]"> {jsonUserData.user.cpf}</td>
        </tr>
      </table>
    </main>
  );
}
